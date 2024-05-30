import { createContext, useContext, useReducer } from "react";

// Import our reducer
import { reducer } from "./reducer";

// Create our theme context using createContext()
export const StateContext = createContext();
const { Provider } = StateContext;

// Create a custom hook that allows easy access to our NameContext values
export const useAppState = () => useContext(StateContext);

// Creating our theme provider. Accepts an argument of "props"
export default function StateProvider({ children }) {
  const initialState = {
    //get it from local storage
    cart: JSON.parse(localStorage.getItem("myCart")) || [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={[state, dispatch]}>{children}</Provider>;
}

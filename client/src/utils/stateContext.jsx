import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "./reducer"; // Adjust if reducer is not the default export

// Create our state context using createContext()
export const StateContext = createContext();
const { Provider } = StateContext;

// Create a custom hook that allows easy access to our StateContext values
export const useAppState = () => useContext(StateContext);

// Creating our state provider. Accepts an argument of "props"
export default function StateProvider({ children }) {
  const initialState = {

    //get it from local storage
    cart: JSON.parse(localStorage.getItem("myCart")) || [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // Store cart in local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  return <Provider value={[state, dispatch]}>{children}</Provider>;
}
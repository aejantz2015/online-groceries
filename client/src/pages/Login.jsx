import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";

function Login() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input name="email" type="email" />
        <label htmlFor="password">Password:</label>
        <input name="password" type="password" />
        <button onClick={handleFormSubmit}>Submit</button>
      </form>
    </>
  );
}

export default Login;

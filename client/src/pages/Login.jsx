import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

function Login() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });

      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <h1>Login</h1>
      <h6>
        New User? <Link to="/signup">Signup</Link> here!
      </h6>
      <form>
        <label htmlFor="email">Email:</label>
        <input name="email" type="email" onChange={handleChange} />
        <label htmlFor="password">Password:</label>
        <input name="password" type="password" onChange={handleChange} />
        <button onClick={handleFormSubmit}>Submit</button>
      </form>
    </>
  );
}

export default Login;

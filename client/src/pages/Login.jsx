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
    const mutationResponse = await login({
      variables: { email: formState.email, password: formState.password },
    });
    console.log("mutation response", mutationResponse);
    const token = mutationResponse.data.login.token;
    console.log(token);
    Auth.login(token);
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
      <h3>
        New User? <Link to="/signup">Signup</Link> here!
      </h3>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input name="email" type="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input name="password" type="password" onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Login;

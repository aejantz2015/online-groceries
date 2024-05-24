import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

function Login() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(event);
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      console.log("mutation response", mutationResponse);
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
        {error ? (
          <div>
            <p>The login is incorrect</p>
          </div>
        ) : null}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Login;

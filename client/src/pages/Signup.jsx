import { useMutation } from "@apollo/client";
import { useState } from "react";
import auth from "../utils/auth";
import { CREATE_USER } from "../utils/mutations";
import { Link } from "react-router-dom";

function Signup() {
  const [formState, setFormState] = useState({
    firstname: " ",
    lastName: " ",
    username: " ",
    email: " ",
    password: " ",
  });

  const [addUser] = useMutation(CREATE_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const response = await addUser({
      variables: {
        firstName: formState.firstName,
        lastName: formState.lastName,
        username: formState.username,
        email: formState.email,
        password: formState.password,
      },
    });
    console.log(response);

    const token = response.data.createUser.token;
    auth.login(token);
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
      <p>
        Already have an account? <Link to="/login">Login</Link> here.
      </p>
      <h1>Signup</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" name="firstName" onChange={handleChange} />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" name="lastName" onChange={handleChange} />
        <br />
        <label htmlFor="username">Choose a username:</label>
        <input type="text" name="username" onChange={handleChange} />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" onChange={handleChange} />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Signup;

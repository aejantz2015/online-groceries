import { useState } from "react";

import { useMutation } from "@apollo/client";

import { CREATE_USER } from "../utils/mutations";

const UserForm = () => {
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(" ");
  const [createUser] = useMutation(CREATE_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await createUser({
        variables: { firstName, lastName, email, password },
      });

      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h3>Create User</h3>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            placeholder="Enter your first name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <input
            placeholder="Enter your last name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <input
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          <button type="submit">Create User</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;

function Signup() {
  return (
    <>
      <h1>Signup</h1>
      <form>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" name="firstName" />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" name="lastName" />
        <br />
        <label htmlFor="username">Choose a username:</label>
        <input type="text" name="username" />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" />
      </form>
    </>
  );
}

export default Signup;

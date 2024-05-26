import { NavLink, useLocation } from "react-router-dom";
import './style.css'

function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <>
      <ul>
        <li>
          <NavLink
            to="/"
            className={currentPage === "/" ? "nav-link active" : "nav-link"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={
              currentPage === "/login" ? "nav-link active" : "nav-link"
            }
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/account"
            className={
              currentPage === "/account" ? "nav-link active" : "nav-link"
            }
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signup"
            className={
              currentPage === "/signup" ? "nav-link active" : "nav-link"
            }
          >
            Signup
          </NavLink>
        </li>
        <li>Logout</li>
      </ul>
    </>
  );
}

export default Nav;

import { NavLink, useLocation } from "react-router-dom";
import auth from "../../utils/auth";
import "./style.css";

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
        {auth.loggedIn() ? (
          <>
            <li>
              <a href="/" onClick={() => auth.logout()}>
                Logout
              </a>
            </li>
          </>
        ) : (
          <>
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
                to="/signup"
                className={
                  currentPage === "/signup" ? "nav-link active" : "nav-link"
                }
              >
                Signup
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </>
  );
}

export default Nav;

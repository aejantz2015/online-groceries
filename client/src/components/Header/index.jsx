import Departments from "../Departments";
import Nav from "../Nav/index";
import { Link } from "react-router-dom";
import "./style.css";

export default function Header() {
  return (
    <div className="mainheader">
      <div className="wrapper">
        <h1 className="title">PAC Groceries</h1>
        <div>
          <input className="searchbar"></input>
          <Link to="/cart">
            <button className="shoppingcart">My Cart</button>
          </Link>
        </div>
      </div>
      <div className="subwrapper">
        <Departments />
        <Nav />
      </div>
    </div>
  );
}

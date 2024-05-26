import Departments from "../Departments";
import Nav from "../Nav/index";
import "./style.css";

export default function Header() {
  return (
    <div className="mainheader">
      <div className="wrapper">
        <h1 className="title">PAC Groceries</h1>
        <div>
          <input className="searchbar"></input>
          <button className="shoppingcart">My Cart</button>
        </div>
      </div>
      <div className="subwrapper">
        <Departments />
        <Nav />
      </div>
    </div>
  );
}

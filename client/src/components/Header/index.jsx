import Departments from "../Departments";
import Nav from "../Nav/index";
import "./style.css";

export default function Header() {
  return (
    <div className="mainheader">
      <div class = 'wrapper'> 
      <h1 className="title">PAC Groceries</h1>
      <div>
        <input class = 'searchbar'></input>
      <button className="shoppingcart">My Cart</button>
      </div>
      </div>
      <div class = 'subwrapper'>
      <Departments />
      <Nav />
      </div>
    </div>
  );
}

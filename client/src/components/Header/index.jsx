import Nav from "../Nav/index";
import "./style.css";

export default function Header() {
  return (
    <div className="mainheader">
      <h1 className="title">PAC Groceries</h1>
      <button className="shoppingcart">My Cart</button>
      <Nav />
    </div>
  );
}

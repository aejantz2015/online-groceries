import "./style.css";
import { Link } from "react-router-dom";

export default function Departments() {
  return (
    <div>
      <Link to="department/dairy">
        <button className="deptbutton">dairy & eggs</button>
      </Link>
      <Link to="/department/meat">
        <button className="deptbutton">meat & seafood</button>
      </Link>
      <Link to="/department/beverages">
        <button className="deptbutton">beverages</button>
      </Link>
      <Link to="/department/frozen">
        <button className="deptbutton">frozen</button>
      </Link>
      <Link to="/department/pantry">
        <button className="deptbutton">pantry</button>
      </Link>
      <Link to="/department/produce">
        <button className="deptbutton">produce</button>
      </Link>
      <Link to="/department/snacks">
        <button className="deptbutton">snacks</button>
      </Link>
      <Link to="/">
        <button className="deptbutton">all</button>
      </Link>
    </div>
  );
}

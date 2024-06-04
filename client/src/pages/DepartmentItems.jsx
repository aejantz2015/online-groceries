import { useQuery } from "@apollo/client";
import { QUERY_ITEMS } from "../utils/queries";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAppState } from "../utils/stateContext";
import { ADD_TO_CART } from "../utils/actions";
import "./departmentItems.css";

const DepartmentList = () => {
  const { name } = useParams();

  const { loading, data } = useQuery(QUERY_ITEMS);

  const items = data?.items || [];

  const itemKeys = Object.values(items);
  const [{ cart }, dispatch] = useAppState();

  function addToCart(item) {
    const newCart = [...cart, item];
    localStorage.setItem("myCart", JSON.stringify(newCart));
    dispatch({ type: ADD_TO_CART, payload: item });
  }

  let myDepartment = [];
  for (let i = 0; i < itemKeys.length; i++) {
    if (itemKeys[i].department.name === name) {
      myDepartment.push(itemKeys[i]);
    }
  }

  if (loading) {
    console.log("loading...");
  }

  return (
    <div className="display">
      {myDepartment.map((item) => (
        <div key={item._id}>
          <Link to={`/items/${item._id}`}>
            <img
              src={`/images/${item.image}`}
              alt={`screenshot of ${item.name}`}
              width="200"
            />
          </Link>
          <p>{item.name}</p>
          <p>${item.price}</p>

          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default DepartmentList;

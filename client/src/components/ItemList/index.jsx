import { Link } from "react-router-dom";
import { useAppState } from "../../utils/stateContext";
import { ADD_TO_CART } from "../../utils/actions";
import "./style.css";

const ItemList = ({ items }) => {
  const [{ cart }, dispatch] = useAppState();
  console.log("cart", cart);

  function addToCart(item) {
    const newCart = [...cart, item];
    localStorage.setItem("myCart", JSON.stringify(newCart));
    dispatch({ type: ADD_TO_CART, payload: item });
  }

  return (
    <div className="display">
      {items.map((item) => (
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

          <button onClick={() => addToCart(item)}>Add To Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ITEMS } from "../utils/queries";
import { ADD_TO_CART } from "../utils/actions";
import { useAppState } from "../utils/stateContext";

export const ItemView = () => {
  const { id } = useParams();

  const { loading, data } = useQuery(QUERY_ITEMS);
  const [{ cart }, dispatch] = useAppState();
  console.log(cart);

  function addToCart(item) {
    dispatch({ type: ADD_TO_CART, payload: item });
  }

  if (loading) {
    console.log("loading...");
  }

  let items = data?.items || [];

  const itemKeys = Object.values(items);
  let myItem;
  {
    itemKeys.map((item) => {
      if (item._id === id) {
        myItem = item;
      }
    });
  }

  return (
    <div key={myItem._id}>
      <h5>
        <Link to="/">⇽ Go Back</Link>
      </h5>
      <h1>{myItem.name}</h1>
      <img
        src={`/images/${myItem.image}`}
        alt={`screenshot of ${myItem.name}`}
        width="300"
      />
      <p>{myItem.description}</p>
      <p>${myItem.price}</p>
      <p>In stock: {myItem.quantity}</p>
      <button onClick={() => addToCart(myItem)}>Add To Cart</button>
    </div>
  );
};

export default ItemView;

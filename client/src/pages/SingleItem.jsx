import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_ITEM } from "../utils/queries";
import { ADD_TO_CART } from "../utils/actions";
import { useAppState } from "../utils/stateContext";

export const ItemView = () => {
  const { id } = useParams();
  console.log(id);

  const { data } = useQuery(QUERY_SINGLE_ITEM, {
    variables: { id },
  });
  console.log(data);
  const myItem = data?.item || {};

  const [{ cart }, dispatch] = useAppState();

  function addToCart(item) {
    const newCart = [...cart, item];
    localStorage.setItem("myCart", JSON.stringify(newCart));
    dispatch({ type: ADD_TO_CART, payload: item });
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
      <button onClick={() => addToCart(myItem)}>Add To Cart</button>
    </div>
  );
};

export default ItemView;

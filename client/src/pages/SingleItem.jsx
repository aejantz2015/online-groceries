import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ITEMS } from "../utils/queries";

const ItemView = () => {
  const { id } = useParams();

  const { loading, data } = useQuery(QUERY_ITEMS);

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
    <>
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
      <button>Add To Cart</button>
    </>
  );
};

export default ItemView;

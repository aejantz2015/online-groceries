import { CartAction, addItem, useCart } from "../../reducers/Cart";

const ItemList = (items) => {
  const itemKeys = Object.values(items);
  const [cart, dispatch] = useCart();
  return (
    <div>
      {itemKeys[0].map((item) => (
        <div key={item._id}>
          <img
            src={`/images/${item.image}`}
            alt={`screenshot of ${item.name}`}
            width="200"
          />
          <p>{item.name}</p>
          <p>{item.description}</p>
          <p>${item.price}</p>
          <p>In Stock: {item.quantity}</p>
          {!cart.includes(item._id) ? (
            <button onClick={() => dispatch(addItem(item._id))}>
              Add To Cart
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({ type: CartAction.REMOVE_ITEM, value: item._id })
              }
            >
              Remove Item
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ItemList;

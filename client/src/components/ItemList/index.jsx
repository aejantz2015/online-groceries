const ItemList = (items) => {
  const itemKeys = Object.values(items);

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

          <button>Add To Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

const ItemList = (items) => {
  console.log("this is the item from ItemList", items);
  const itemKeys = Object.values(items);
  console.log("this is the index itemkeys", itemKeys);

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
        </div>
      ))}
    </div>
  );
};

export default ItemList;

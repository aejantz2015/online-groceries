import { useQuery } from "@apollo/client";
import { QUERY_ITEMS } from "../utils/queries";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const DepartmentList = () => {
  const { name } = useParams();

  const { loading, data } = useQuery(QUERY_ITEMS);

  const items = data?.items || [];

  const itemKeys = Object.values(items);

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
    <div>
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
          <p>${item.prce}</p>
          <p>In Stock: {item.quantity}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default DepartmentList;

import { useQuery } from "@apollo/client";
import { QUERY_ITEMS } from "../utils/queries";
import ItemList from "../components/ItemList";

const Home = () => {
  const { loading, data } = useQuery(QUERY_ITEMS);
  let items = data?.items || [];

  return <>{loading ? <p>loading....</p> : <ItemList items={items} />}</>;
};

export default Home;

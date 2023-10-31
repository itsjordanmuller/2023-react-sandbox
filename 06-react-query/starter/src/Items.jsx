import SingleItem from "./SingleItem";
import { useQuery } from "@tanstack/react-query";
import customFetch from "./utils";

const Items = ({ items }) => {
  const result = useQuery({
    queryKey: ["tasks"],
    queryFn: () => customFetch.get("/"),
  });
  console.log(result);
  return (
    <div className="items">
      {items.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;

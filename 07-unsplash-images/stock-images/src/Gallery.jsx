import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const url = "http://localhost:5000/api/images/search";

const Gallery = () => {
  const response = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const result = await axios.get(url);

      return result.data;
    },
  });
  console.log(response);
  return <h2>Gallery</h2>;
};
export default Gallery;

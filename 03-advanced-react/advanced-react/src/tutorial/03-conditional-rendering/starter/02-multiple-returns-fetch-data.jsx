import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(url);
        const user = await response.json();
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  return <h2>Fetch Example</h2>;
};
export default MultipleReturnsFetchData;

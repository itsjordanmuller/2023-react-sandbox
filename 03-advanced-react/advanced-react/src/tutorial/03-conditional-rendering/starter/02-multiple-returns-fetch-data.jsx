import { useEffect, useState } from "react";
const url = "https://api.github.com/users/itsjordanmuller";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [user, setUser] = useState(null);

  // Order Matters - Destructuring Here Will Not Work
  // const { avatar_url, name, bio, html_url } = user;

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const user = await response.json();
        // console.log(user);
        // console.log(response.ok);
        setUser(user);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      setIsLoading(false);
    };
    getUser();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>There was an error...</h2>;
  }

  const { avatar_url, name, bio, html_url } = user;

  return (
    <div className="container">
      <h2>Fetch Example</h2>
      <img
        style={{ width: "150px", borderRadius: "25px" }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <p>{bio}</p>
      <a href={html_url} className="btn">
        View GitHub
      </a>
    </div>
  );
};
export default MultipleReturnsFetchData;

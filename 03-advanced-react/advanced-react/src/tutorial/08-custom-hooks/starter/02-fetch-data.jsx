// import useFetchPerson from "./useFetchPerson";
import useFetch from "./useFetch";

const url = "https://api.github.com/users/itsjordanmuller";

const FetchData = () => {
  const { isLoading, isError, data: user } = useFetch(url);

  // const FetchData = () => {
  //   const { isLoading, isError, user } = useFetchPerson(url);
  // order matters
  // don't place user JSX before loading or error

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }
  const { avatar_url, name, html_url, bio } = user;
  return (
    <div>
      <img
        style={{ width: "100px", borderRadius: "25px" }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>
        <a href={html_url}>
          <button className="btn">Link to Profile</button>
        </a>
      </h4>
      <p>{bio}</p>
    </div>
  );
};
export default FetchData;

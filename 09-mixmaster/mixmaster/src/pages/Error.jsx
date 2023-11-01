import Wrapper from "../assets/wrappers/ErrorPage";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  const { status, statusText, data } = error;
  if (status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="404 Not Found Error" />
          <h3>Oops!</h3>
          <p>We can't seem to find the page you are looking for...</p>
          <Link to="/">Back Home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3>Something went wrong</h3>
      </div>
    </Wrapper>
  );
};
export default Error;

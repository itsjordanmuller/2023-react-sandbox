import UserContainer from "./UserContainer";

const NavLinks = () => {
  return (
    <>
      <div className="nav-container" style={{ display: "flex" }}>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </div>
      <div>
        <UserContainer />
      </div>
    </>
  );
};
export default NavLinks;

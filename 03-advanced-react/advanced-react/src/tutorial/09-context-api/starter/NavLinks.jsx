import UserContainer from "./UserContainer";

const NavLinks = ({ user, logoutUser }) => {
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
        <UserContainer user={user} logoutUser={logoutUser} />
      </div>
    </>
  );
};
export default NavLinks;

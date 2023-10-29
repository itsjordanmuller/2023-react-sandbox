import { useState } from "react";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [user, setUser] = useState({ name: "Jordan" });

  const logoutUser = () => {
    setUser(null);
  };

  return (
    <nav
      className="navbar"
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      <h5>Context API</h5>
      <NavLinks user={user} logoutUser={logoutUser} />
    </nav>
  );
};
export default Navbar;

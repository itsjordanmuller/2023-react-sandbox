import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "jordan" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <>
      <h2>user challenge</h2>
      {user ? (
        <div>
          <h4>Hello there, user {user.name}</h4>
          <button onClick={logout} className="btn">
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h4>Please Login</h4>
          <button onClick={login} className="btn">
            Login
          </button>
        </div>
      )}
    </>
  );
};

export default UserChallenge;

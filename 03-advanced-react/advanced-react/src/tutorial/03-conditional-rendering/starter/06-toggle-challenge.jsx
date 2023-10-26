import { useEffect } from "react";
import { useState } from "react";

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);

  const toggleAlert = () => {
    if (showAlert) {
      setShowAlert(false);
      return;
    }
    setShowAlert(true);
  };

  return (
    <>
      <h2>toggle challenge</h2>
      <div>
        <button className="btn" onClick={toggleAlert}>
          toggle alert
        </button>
        {showAlert && <Alert />}
      </div>
    </>
  );
};
const Alert = () => {
  return <div className="alert alert-danger">Alert!</div>;
};

export default ToggleChallenge;

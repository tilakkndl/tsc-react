import React from "react";
import { useState } from "react";
function LoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogOut = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogOut}>LogOut</button>
      <div>User is {isLoggedIn ? "Logged in" : "Logged Out"} </div>
    </div>
  );
}

export default LoggedIn;

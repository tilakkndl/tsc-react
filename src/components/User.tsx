import React, { useState } from "react";
type AuthUser = {
  name: string;
  email: string;
};
function User() {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: "tilak",
      email: "94094@mglai,com",
    });
  };
  //   const handleLogOut = () => {
  //     setUser(null);
  //   };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      my name is{user.name} and email {user.email}
    </div>
  );
}

export default User;

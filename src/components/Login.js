import React, { useState } from "react";
import { useAuth } from "../provider/AuthProvider";

const Login = () => {
  const [user, setUser] = useState(null);
  const { login } = useAuth();

  const handClick = () => {
    login(user);
  };

  return (
    <>
      <h1>Login Page</h1>
      <label>User Name</label>
      <input type="text" onChange={(e) => setUser(e.target.value)} />
      <button onClick={handClick}>Login</button>
    </>
  );
};
export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = () => {
    if (password === "" || username === "") {
      alert("Please fill all the details");
    } else {
      alert("You have been logged in successfully");
      setPassword("");
      setUsername("");
      navigate("/userdetails");
    }
  };

  return (
    <div className="login-bod">
      <div className="login-card">
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button onClick={loginHandler}>Login</button>
      </div>
    </div>
  );
}

export default Login;

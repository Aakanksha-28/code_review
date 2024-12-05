import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      alert("Please enter username and password");
      navigate("/login");
      return;
    }
    navigate("/home");
  };
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center", paddingTop: "24px" }}>EatWise</h1>
        <div id="card">
          <div id="card-content">
            <div id="card-title">
              <h2>LOGIN</h2>
              <div className="underline-title"></div>
            </div>
            <form method="post" className="form">
              <label htmlFor="user-email" style={{ paddingTop: "13px" }}>
                &nbsp;Email
              </label>
              <input
                id="user-email"
                className="form-content"
                type="email"
                name="email"
                autocomplete="on"
                onChange={(e) => setUsername(e.target.value)}
              />
              <div className="form-border"></div>
              <label htmlFor="user-password" style={{ paddingTop: "22px" }}>
                &nbsp;Password
              </label>

              <input
                id="user-password"
                className="form-content"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="form-border"></div>
              <a href="#">
                <legend id="forgot-pass">Forgot password?</legend>
              </a>
              <input
                id="submit-btn"
                type="submit"
                name="submit"
                value="LOGIN"
                onClick={handleLogin}
              />
              <a href="#" id="signup">
                Don't have account yet?
              </a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;

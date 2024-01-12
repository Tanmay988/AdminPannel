import React, { useState } from "react";
import "./Login.css";

export const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const changeHandeler = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandeler = (e) => {
    e.preventDefault();

    setLogin({
      email: "",
      password: "",
    });
    console.log(login);
  };
  return (
    <>
      <section>
        <div className="conatiner">
          <div className="left-box">
            <div className="login-img">
              <img src="./Images/login.png" alt="login img" />
            </div>
          </div>
          <div className="right-box">
            <div className="heading">
              <h2>Login Form</h2>
            </div>
            <form onSubmit={submitHandeler}>
              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={login.email}
                  id="email"
                  placeholder="enter a email"
                  onChange={changeHandeler}
                />
              </div>

              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={login.password}
                  id="password"
                  placeholder="enter a password"
                  onChange={changeHandeler}
                />
              </div>

              <button className="login-btn" type="submit">
                Login Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

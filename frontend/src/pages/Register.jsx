import React, { useState } from "react";
import "./Register.css";

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const changeHandeler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const submithandeler = (e) => {
    e.preventDefault();

    setUser({
      username: "",
      email: "",
      phone: "",
      password: "",
    });

    console.log(user);
  };
  return (
    <>
      <section>
        <div className="container">
          <div className="left-box">
            <div className="reg-img">
              <img src="./Images/register.png" alt="register image" />
            </div>
          </div>
          <div className="right-box">
            <div className="heading">
              <h2>Register Form</h2>
            </div>

            <form onSubmit={submithandeler}>
              <div className="input-field">
                <label htmlFor="username">UserName</label>
                <input
                  type="text"
                  name="username"
                  value={user.username}
                  id="username"
                  placeholder="username"
                  onChange={changeHandeler}
                />
              </div>

              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  id="email"
                  placeholder="enter your email"
                  onChange={changeHandeler}
                />
              </div>

              <div className="input-field">
                <label htmlFor="phone">Phone</label>
                <input
                  type="number"
                  name="phone"
                  value={user.phone}
                  id="phone"
                  placeholder="phone"
                  onChange={changeHandeler}
                />
              </div>

              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  id="password"
                  placeholder="password"
                  onChange={changeHandeler}
                />
              </div>

              <button className=" reg-btn" type="submit">
                Register Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

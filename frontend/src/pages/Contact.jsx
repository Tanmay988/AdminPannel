import React, { useState } from "react";

export const Contact = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    message: "",
  });

  const changeHandeler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandeler = (e) => {
    e.preventDefault();

    setUser({
      username: "",
      email: "",
      message: "",
    });

    console.log(user);
  };
  return (
    <>
      <section>
        <div className="conatiner">
          <div className="left-box">
            <div className="login-img">
              <img src="./Images/support.png" alt="login img" />
            </div>
          </div>
          <div className="right-box">
            <div className="heading">
              <h2>Contact Us</h2>
            </div>
            <form onSubmit={submitHandeler}>
              <div className="input-field">
                <label htmlFor="username">UserName</label>
                <input
                  type="text"
                  name="username"
                  value={user.username}
                  id="username"
                  placeholder="enter a username"
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
                  placeholder="enter a email"
                  onChange={changeHandeler}
                />
              </div>
              <div className="input-field">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  value={user.message}
                  id="message"
                  cols="80"
                  rows="10"
                  placeholder="write a message here..."
                  onChange={changeHandeler}
                ></textarea>
              </div>

              <button className="login-btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.576189831729!2d73.84825867523524!3d18.457542082623785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac85230ba47%3A0x871eddd0a8a0a108!2sSCTR&#39;S%20Pune%20Institute%20of%20Computer%20Technology!5e0!3m2!1sen!2sin!4v1705039868128!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0, padding: "5rem 0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};

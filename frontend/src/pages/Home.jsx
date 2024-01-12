import React from "react";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <main>
        <div className="container">
          <div className="left-box">
            <div className="box">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Mollitia, rem!
              </p>
              <h2>Lorem ipsum dolor sit amet.</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
                libero quae aspernatur quo qui, velit blanditiis commodi dolorum
                error quisquam!
              </p>
              <div className="btn-grp">
                <a href="/contact">
                  <button className="btn1">Contact Now</button>
                </a>
                <a href="/services">
                  <button className="btn2">Learn More</button>
                </a>
              </div>
            </div>
          </div>

          <div className="right-box">
            <div className="home-img">
              <img src="./Images/home.png" alt="home img" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="grid-box">
            <div className="items">
              <h2>Heading</h2>
              <p>Lorem ipsum dolor sit.</p>
            </div>
            <div className="items">
              <h2>Heading</h2>
              <p>Lorem ipsum dolor sit.</p>
            </div>
            <div className="items">
              <h2>Heading</h2>
              <p>Lorem ipsum dolor sit.</p>
            </div>
            <div className="items">
              <h2>Heading</h2>
              <p>Lorem ipsum dolor sit.</p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="right-box">
            <div className="home-img">
              <img src="./Images/design.png" alt="home img" />
            </div>
          </div>

          <div className="left-box">
            <div className="box">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Mollitia, rem!
              </p>
              <h2>Lorem ipsum dolor sit amet.</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
                libero quae aspernatur quo qui, velit blanditiis commodi dolorum
                error quisquam!
              </p>
              <div className="btn-grp">
                <a href="/contact">
                  <button className="btn1">Contact Now</button>
                </a>
                <a href="/services">
                  <button className="btn2">Learn More</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

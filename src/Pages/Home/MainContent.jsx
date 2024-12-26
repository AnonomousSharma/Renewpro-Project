import React, { useState, useEffect } from "react";
import "./MainContent.css";
import hero_video from "../../assets/Project_Header.mp4";

// Counter component to animate numbers from 1 to a target
const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev < target) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return target;
        }
      });
    }, 50); // Adjust speed by changing the interval time
    return () => clearInterval(interval);
  }, [target]);

  return <span>{count}+</span>; // Add '+' after the number
};

function App() {
  return (
    <div className="App">
      {/* Main content section */}
      <div className="main-content">
        {/* Left Side */}
        <div className="left-side">
          <h2>About Us</h2>
          <p>
          Established in 2024, we have been one of the early movers in the solar park regime and have now grown into a well-established player in turnkey solar engineering, procurement and construction (“EPC”) services, catering to the increasing demand for renewable energy in the country. 
          </p>
          <p>
          We are also one of the leading integrated solar power company in India with implementation of solar power projects of 6.9 Mega-Watts peak (“MWp”).
          </p>
          <p>
          We offer a consultative approach to our customers’ solar energy needs and capabilities, which enables us to provide customized solutions to meet their requirements.
          </p>
          <p>
          We offer a consultative approach to our customers’ solar energy needs and capabilities, which enables us to provide customized solutions to meet their requirements.
          </p>
        </div>

        {/* Right Side (YouTube video) */}
        <div className="right-side">
  <h3>Our Company Video</h3>
  <video
    width="100%"
    height="315"
    loop
    muted
    autoPlay
    playsInline
    controls={false} // This hides the controls, remove if you need them
  >
    <source src={hero_video} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

      </div>

      {/* Bottom counters  */}
      <div className="bottom-section">
        <div className="counter-box">
          <h4>Employees</h4>
          <Counter target={10} /> 
        </div>
        <div className="counter-box">
          <h4>Capacity</h4>
          <Counter target={80} />
        </div>
      </div>
    </div>
  );
}

export default App;

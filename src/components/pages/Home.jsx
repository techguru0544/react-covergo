import React from "react";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();

  const onNext = () => {
    navigate("/tell-us-about-yourself");
  };
  return (
    <>
      <div className="home-container">
        <h1>Hello There!</h1>
        <p>Let's buy some insurance ...</p>
        <button onClick={onNext}>Start</button>
      </div>
    </>
  );
}

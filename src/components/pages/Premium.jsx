import React from "react";
import { useGlobalState } from "../../context/globalContext";
import { calculatePremium, packageMap } from "../../utlis";
import { useNavigate } from "react-router-dom";
export default function Premium() {
  const { name, age, country, package: packageValue } = useGlobalState();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Summary</h1>
      <div className="flex">
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Where do you live: {country}</div>
        <div>Package: {packageMap[packageValue]}</div>
        <div>Premium: {calculatePremium(age, country, packageValue)}</div>
        <button onClick={() => navigate("/tell-us-about-yourself")}>
          Back
        </button>
        <button>Buy</button>
      </div>
    </div>
  );
}

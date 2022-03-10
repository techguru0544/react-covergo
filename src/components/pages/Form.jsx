import React from "react";
import { useMemo } from "react";
import { SET_FORM_DATA } from "../../context/actions";
import { useGlobalState, useGlobalDispatch } from "../../context/globalContext";
import { packageRate, countryRate, calculatePremium } from "../../utlis";
import {useNavigate} from 'react-router-dom'
export default function Form() {
  const dispatch = useGlobalDispatch();
  const navigate = useNavigate();
  const { name, age, country, package: packageValue } = useGlobalState();
  const premium = useMemo(
    () => calculatePremium(age, country, packageValue),
    [age, country, packageValue]
  );
  const calculatePackage = (pck) => {
    if (age > 0 && packageRate[pck]) {
      return `(+${
        age * 10 * (packageRate[pck] % 1) * (countryRate[country] || 1)
      } ${country}, ${(packageRate[pck] % 1) * 100}%)`;
    }
    return "";
  };
  const onValueChange = (k, v) => {
    dispatch({
      type: SET_FORM_DATA,
      payload: { name, age, country, package: packageValue, [k]: v },
    });
  };
  const onPackageChange = (v) => {
    onValueChange("package", v);
  };
  return (
    <div className="form-container">
      <h1>Tell us about yourself</h1>
      <div>
        <label>
          Name
          <input
            type="text"
            value={name}
            name="name"
            onChange={({ target }) => onValueChange("name", target.value)}
          />
        </label>
        <label>
          Age
          <input
            type="text"
            value={age}
            name="age"
            onChange={({ target }) => onValueChange("age", target.value)}
          />
        </label>
        <label>
          Where do you live
          <select
            value={country}
            onChange={({ target }) => onValueChange("country", target.value)}
          >
            <option value="HKD">Hong Kong</option>
            <option value="USD">USA</option>
            <option value="AUD">Australia</option>
          </select>
        </label>
        <label>
          <input
            checked={packageValue === "standard"}
            type="radio"
            value="standard"
            name="package"
            onChange={({ currentTarget }) =>
              onPackageChange(currentTarget.value)
            }
          />
          Standard
          <input
            checked={packageValue === "safe"}
            type="radio"
            value="safe"
            name="package"
            onChange={({ currentTarget }) =>
              onPackageChange(currentTarget.value)
            }
          />
          Safe {calculatePackage("safe")}
          <input
            checked={packageValue === "superSafe"}
            type="radio"
            value="superSafe"
            name="package"
            onChange={({ currentTarget }) =>
              onPackageChange(currentTarget.value)
            }
          />
          Super Safe {calculatePackage("superSafe")}
        </label>
      </div>
      <div className="premium">Your Premium is : {premium}</div>
      <div>
        <button onClick={()=>navigate('/')}>Back</button>
        <button onClick={()=>navigate('/premium')}>Next</button>
      </div>
    </div>
  );
}

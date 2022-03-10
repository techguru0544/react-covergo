import React from "react";
import { SET_FORM_DATA } from "./actions";

const GlobalStateContext = React.createContext();
const GlobalDispatchContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case SET_FORM_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, {
    name: "",
    age: "",
    country: "HKD",
    package: "standard",
  });
  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  );
};

export const useGlobalDispatch = () => React.useContext(GlobalDispatchContext);
export const useGlobalState = () => React.useContext(GlobalStateContext);

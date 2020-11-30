/* eslint-disable no-unreachable */
import React, { createContext, useContext, useReducer } from "react";

////////////////
//INITIAL STATE
////////////////

const initialState = {
  url: "http://cooking-api-backend.herokuapp.com",
  token: null,
  username: null,
  events: null,
  new: {
    title: "",
    date: "",
    time: "",
    location: "",
  },
  edit: {
    id: 0,
    title: "",
    date: "",
    time: "",
    location: "",
  },
};

////////////
//REDUCER
////////////
//action = {type: "expects string", payload: ---}
const reducer = (state, action) => {
  let newState;
  switch (action.type) {
case "auth":
    newState = { ...state, ...action.payload };
    return newState;
    break;
    case "logout":
        newState = { ...state, token: null, username: null };
        window.localStorage.removeItem("auth");
        return newState;
        break;
        case "getEvents":
          newState = { ...state, events: action.payload };
          return newState;
          break;
          case "select":
            newState = { ...state, edit: action.payload };
            return newState;
            break;
    default:
        return state;
        break;
        
  }
};

///////////////
//AppContext
//////////////
const AppContext = createContext(null);
////////////////////
//AppState Component
//////////////////
export const AppState = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {props.children}
    </AppContext.Provider>
  );
};

/////////////////////
//useAppState hook
////////////////////

export const useAppState = () => {
  return useContext(AppContext);
};

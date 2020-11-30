import React,{useState,useEffect,useContext} from "react";
import { Link, withRouter } from 'react-router-dom'
import { useAppState } from "../AppState.js"


const Nav = (props) => {
  const { state, dispatch } = useAppState();

  return(
   <header>
    <h1>Chefd Up Cooking App</h1>
    <nav>
      {!state.token ? (
        <>
      <Link to="/"><div>Home</div></Link>
      <Link to="/auth/signup"><div>Sign Up</div></Link>
      <Link to="/auth/login"><div>Login</div></Link>
      </>
      ) : null}
{state.token ? (
  <div onClick={() => {
    dispatch({type: "logout" });
    props.history.push("/");
  }}
  >
    Logout
  </div>
) : null}
    </nav>
  </header>
  )
};

export default withRouter(Nav)
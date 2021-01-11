/* eslint-disable no-unused-vars */
import React,{useState,useEffect,useContext} from "react";
import { Link, withRouter } from 'react-router-dom'
import { useAppState } from "../../AppState.js"
import './Navigation.css'
import { Nav, Container, Navbar, NavDropdown, }  from 'react-bootstrap';


const Navigation = (props) => {
  const { state, dispatch } = useAppState();



  return(
  <header>
    
    <nav>
      {!state.token ? (
       <ul>
      <Link to="/"><div>Home</div></Link>
      <Link to="/auth/signup"><div>Sign Up</div></Link>
      <Link to="/auth/login"><div>Login</div></Link>
      <Link to="/about"><div>About</div></Link>
      <Link to="/policies"><div>Policies</div></Link>
      <Link to="/classes"><div>Classes</div></Link>
      <Link to="/team_building"><div>Team Building</div></Link>
      <Link to="/auth/users/events"><div>Private Courses</div></Link>
     </ul>
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

export default withRouter(Navigation)
import React,{useState,useEffect,useContext} from "react";
import { Link, withRouter } from 'react-router-dom'
import { useAppState } from "../../AppState.js"
import './Navigation.css'
import { Nav, Container, Navbar, NavDropdown, }  from 'react-bootstrap';


const Navigation = (props) => {
  const { state, dispatch } = useAppState();

  return(
//    <header>
//     <h1 className="title">Chefd Up Cooking App</h1>
//     <nav>
//       {!state.token ? (
//         <>
//       <Link to="/"><div>Home</div></Link>
//       <Link to="/auth/signup"><div>Sign Up</div></Link>
//       <Link to="/auth/login"><div>Login</div></Link>
//       <Link to="/about"><div>About</div></Link>
//       <Link to="/policies"><div>Policies</div></Link>
//       </>
//       ) : null}
// {state.token ? (
//   <div onClick={() => {
//     dispatch({type: "logout" });
//     props.history.push("/");
//   }}
//   >
//     Logout
//   </div>
// ) : null}
//     </nav>
//   </header>
<header>
    <Navbar collapseOnSelect expand="md" bg="maroon" variant="">
      <Navbar.Brand href="#home">In the Kitchen</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <i class="fas fa-bars"></i>
        </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        {!state.token ? (
          <>
        <h3>Hello!</h3>
         
          <Nav.Link className="Links" to="/about">
            About
          </Nav.Link>
          <Nav.Link className="Links" href="/private_vents/">
            Events
          </Nav.Link>
          <Nav.Link className="Links" href="/team_building">
            Team Building
          </Nav.Link>
          <Nav.Link className="Links" href="/geninfo">
            General Info
          </Nav.Link>
          <Nav.Link className="Links" href="/policies">
            Class Policies
          </Nav.Link>
         
          <NavDropdown title="contact us" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
            
Phone:
(856) 489-1682
or
(856) 795-CHEF (2433)
<br/>
E-mail:
ChefKage [at] aol [dot] com
<br/>
Address:
In the Kitchen Cooking School
10 Mechanic Street
Haddonfield, NJ 08033
              </NavDropdown.Item>
            {/* <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Something
              </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item> */}
          </NavDropdown>
          </>
        ): null}
        {state.token ? (
  <div onClick={() => {
    dispatch({type: "logout" });
    props.history.push("/");
  }}
  >
    Logout
  </div>
        ) : null}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </header>
  
  )
};

export default withRouter(Navigation)
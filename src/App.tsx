import React from 'react';
import { Navbar, NavbarBrand, Nav, NavLink } from 'reactstrap';
import Resume from "./downloadables/Resume of Beder Bourahmah.pdf";
import './App.css';


const App: React.FC = () => {
  return (
    <>
    <Navbar className="App-navbar">
      <NavbarBrand href="/" className="App-link">Beder's Web Resume</NavbarBrand>
      <Nav>
        <NavLink href={Resume} target='_blank' className="App-link">PDF Resume</NavLink>
      </Nav>
    </Navbar>
    </>
  );
}

export default App;

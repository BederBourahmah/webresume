import React from 'react';
import { Navbar, NavbarBrand, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavLink, Nav } from 'reactstrap';
import Resume from "../../downloadables/Resume of Beder Bourahmah.pdf";
import CoverLetter from "../../downloadables/Cover Letter of Beder Bourahmah.pdf";
import './BigScreen.css';
import { Link, BrowserRouter, Switch, Route, } from "react-router-dom";

export default class BigScreen extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar className="App-navbar">
        <Link className="App-navLinks" to={process.env.PUBLIC_URL}><NavbarBrand >Beder's Web Resume</NavbarBrand></Link>
        <Nav className="NavigationBar-items" >
          <Link className="App-navLinks" to="/education"><NavLink>Education</NavLink></Link>
          <UncontrolledDropdown inNavbar>
            <DropdownToggle nav caret className="App-navLinks">
              Downloads
            </DropdownToggle>
            <DropdownMenu right className="App-dropdownMenu">
              <DropdownItem href={Resume} target='_blank' className="App-navLinks">
                PDF Resume
              </DropdownItem >
              <DropdownItem href={CoverLetter} target='_blank' className="App-navLinks">
                PDF Cover Letter
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Navbar>

      <Switch>
        <Route path="/education">
          Education
        </Route>
      </Switch>
    </BrowserRouter>
    );
  }
}


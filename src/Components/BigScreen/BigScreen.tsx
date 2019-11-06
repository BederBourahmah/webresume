import React from 'react';
import { Navbar, NavbarBrand, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavLink, Nav } from 'reactstrap';
import Resume from "../../downloadables/Resume of Beder Bourahmah.pdf";
import CoverLetter from "../../downloadables/Cover Letter of Beder Bourahmah.pdf";
import './BigScreen.css';
import { Link, Switch, Route, HashRouter } from "react-router-dom";
import Education from '../Education/Education';

export default class BigScreen extends React.Component {
  render() {
    return (
      <HashRouter>
        <Navbar className="App-navbar">
        <Link className="App-navLinks" to="/"><NavbarBrand >Beder's Web Resume</NavbarBrand></Link>
        <Nav className="NavigationBar-items" >
          <Link className="App-navLinks" to="/education"><NavLink>Education</NavLink></Link>
          <UncontrolledDropdown inNavbar>
            <DropdownToggle nav caret className="App-navLinks">
              Downloads
            </DropdownToggle>
            <DropdownMenu right className="App-dropdownMenu">
              <DropdownItem href={Resume} target='_blank' className="App-navLinks">
                Resume
              </DropdownItem >
              <DropdownItem href={CoverLetter} target='_blank' className="App-navLinks">
                Cover Letter
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Navbar>

      <Switch>
        <Route path="/education">
          <Education />
        </Route>
      </Switch>
    </HashRouter>
    );
  }
}


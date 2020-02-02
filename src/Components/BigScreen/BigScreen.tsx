import React from 'react';
import { Navbar, NavbarBrand, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavLink, Nav } from 'reactstrap';
import './BigScreen.css';
import { Link, Switch, Route, HashRouter } from "react-router-dom";
import Education from "../Education/Education";
import Career from '../Career/Career';

export default class BigScreen extends React.Component {
  render() {
    return (
      <HashRouter>
        
        <Navbar className="App-navbar">
          <Link className="App-navLinks navBrand" to="/">Beder's Web Resume</Link>
          <Nav className="NavigationBar-items">
            <Link className="App-navLinks" to="/education"><NavLink>Education</NavLink></Link>
            <Link className="App-navLinks" to="/career"><NavLink>Career</NavLink></Link>
            <UncontrolledDropdown inNavbar>
              <DropdownToggle nav caret className="App-navLinks">
                Downloads
              </DropdownToggle>
              <DropdownMenu right className="App-dropdownMenu">
                <DropdownItem className="App-navLinks">
                  <Link className="App-navLinks" to="/resume">
                    <NavLink>Resume</NavLink>
                  </Link>
                </DropdownItem>
                <DropdownItem href={"#"} target='_blank' className="App-navLinks">
                <Link className="App-navLinks" to="/cover_letter">
                    <NavLink>Cover Letter</NavLink>
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Navbar>

        <Switch>
          <div className="main">
            <Route path="/education">
              <Education />
            </Route>
            <Route path="/career">
              <Career />
            </Route>
            <Route path="/resume">
              <iframe
                src="https://onedrive.live.com/embed?cid=3170DAEDCAD61BF4&resid=3170DAEDCAD61BF4%214244&authkey=AHEOa37xX3ovqXA&em=2"
                className="oneDriveDoc"
              />
            </Route>
            <Route path="/cover_letter">
            <iframe
              src="https://onedrive.live.com/embed?cid=3170DAEDCAD61BF4&resid=3170DAEDCAD61BF4%214246&authkey=AH_hdkvTb38JJgQ&em=2"
              className="oneDriveDoc"
              ></iframe>
            </Route>
          </div>
        </Switch>
      </HashRouter>
    );
  }
}


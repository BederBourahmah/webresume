import React from 'react';
import { Navbar, NavbarBrand, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Resume from "../../downloadables/Resume of Beder Bourahmah.pdf";
import CoverLetter from "../../downloadables/Cover Letter of Beder Bourahmah.pdf";
import './NavigationBar.css';

export default class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar className="App-navbar">
      <NavbarBrand href={process.env.PUBLIC_URL} className="App-navLinks">Beder's Web Resume</NavbarBrand>
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
    </Navbar>
    );
  }
}


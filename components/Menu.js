import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Button
  } from 'reactstrap';


const Menu = (props) => {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

return (

    <div>
      <Navbar color="primary" dark expand="md">
        <NavbarBrand href="/">Corn</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Meet new pops</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Friends">Only a pop</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Group">Popcorn Bowl</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
    );















    
}

export default Menu;
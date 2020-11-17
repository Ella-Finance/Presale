import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  // Collapse,
  Navbar
  // NavbarToggler,
  // NavbarBrand,
  // Nav
  // NavItem,
  // NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem
  // NavbarText
} from 'reactstrap';
import { Search } from '../../Search';

// import egoraslogo from '../../img/egoraslogo.png';

const Navbars = props => {
  let link = window.location.pathname.split('/');
  // let link = window.location.pathname;
  const [location] = useState(link[1]);
  const [isOpen, setIsOpen] = useState(false);

  console.log(location);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar
      color='light'
      light
      expand='md'
      className='border-bottom-0 bg-body-dark'
    >
      {/* <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className='mr-auto' navbar></Nav>
        
      </Collapse> */}
      {location === '' ? null : (
        <div class='search-div'>
          <Search />
        </div>
      )}

      <Link to='/transact' className='connect-wallet ml-auto'>
        Connect Wallet
      </Link>
    </Navbar>
  );
};

export default Navbars;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  NavbarText
} from 'reactstrap';


import ngoraslogo from '../../../img/single.png';

import { Authenticate } from '../../auth/Authenticate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faExchangeAlt, faPager, faSave } from '@fortawesome/free-solid-svg-icons';

export const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className='header-container header-bg fixed-top border-bottom-0'>
      <div className='container-fluid'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light py-2'>
          <Link to='/' className='nav-link py-0'>
            <img
              src={ngoraslogo}
              className='navbar-logo img-fluid'
              width='50'
              alt='logo'
            />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
             
             
              {/* <li className='nav-item'>
                <Link
                  className='nav-link text-black custom-nav-link'
                  to='/savings'
                >
                  Savings{' '}
                  <div class='icon-container d-inline mr-2'>
                  <FontAwesomeIcon icon={faBriefcase} />
                  </div>
                </Link>
              </li> */}

          
             
            </ul>
            <ul className='navbar-nav flex-row ml-md-auto'>
              <Authenticate isHome="false"/>
             
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

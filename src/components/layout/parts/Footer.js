import React from 'react';
import { Link } from 'react-router-dom';
import check from '../../../img/single.png';

export const Footer = () => {
  return (
    <div>
      <section id='footer' style={{background: "#FFF !important"}}>
        <div className='container'>
          <div className='row text-center text-xs-center text-sm-left text-md-left'>
            <div className='col-xs-12 col-sm-2 col-md-2'>
              <Link to='/' className=''>
                <img
                  src={check}
                  className='navbar-logo img-fluid'
                  width='125'
                  alt='logo'
                />
              </Link>
              <ul className='list-unstyled quick-links mt-3'>
                <li>
                  <a href=''>© 2020 ELLA</a>
                </li>
              </ul>
            </div>
            <div className='col-xs-12 col-sm-10 col-md-10'>
              <div className='row'>
                <div className='col-xs-12 col-sm-3 col-md-4'>
                  <h5>Legal</h5>
                  <ul className='list-unstyled quick-links'>
                    <li>
                      <a href=''>Privacy & policy</a>
                    </li>
                    <li>
                      <a href=''>Terms & Condition</a>
                    </li>
                    <li>
                      <a href=''>About Us</a>
                    </li>
                    <li>
                      <a href=''>API</a>
                    </li>
                    <li>
                      <a href=''>Documentation</a>
                    </li>
                  </ul>
                </div>
                {/* <div className='col-xs-12 col-sm-3 col-md-3'>
                  <h5>Quick links</h5>
                  <ul className='list-unstyled quick-links'>
                    <li>
                      <a href=''>Buy Bitcoin</a>
                    </li>
                    <li>
                      <a href=''>Buy Ethereum</a>
                    </li>
                    <li>
                      <a href=''>Buy Egoras</a>
                    </li>
                    <li>
                      <a href=''>Buy Litecoin</a>
                    </li>
                    <li>
                      <a href=''>Buy Stellar</a>
                    </li>
                  </ul>
                </div> */}
                <div className='col-xs-12 col-sm-3 col-md-4'>
                  <h5>Products</h5>
                  <ul className='list-unstyled quick-links'>
                    <li>
                      <Link to='/trade/ETH/DAI'>Exchange</Link>
                    </li>
                    {/* <li>
                      <a href=''>Loan</a>
                    </li> */}
                    <li>
                      <Link to='/savings'>Savings</Link>
                    </li>
                    {/* <li>
                      <a href=''>Governance</a>
                    </li> */}
                  </ul>
                </div>

                <div className='col-xs-12 col-sm-3 col-md-4'>
                  <h5>Social</h5>
                  <ul className='list-unstyled quick-links'>
                    <li>
                      <a href='http://t.me/ellafinance'>Telegram</a>
                    </li>
                    <li>
                      <a href='http://Facebook.com/ellafinance2'>Facebook</a>
                    </li>
                    <li>
                      <a href='https://twitter.com/ellafinance'>Twitter</a>
                    </li>
                    {/* <li>
                      <a href=''>Reddit</a>
                    </li>
                    <li>
                      <a href=''>Instagram</a>
                    </li>
                    <li>
                      <a href=''>Youtube</a>
                    </li>
                    <li>
                      <a href=''>Github</a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;

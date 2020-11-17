import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form
} from 'reactstrap';
import { Tooltip } from 'reactstrap';
import egoraslogo from '../img/egoraslogo.png';
import ethereum from '../img/ethereum.png';
// import { modals } from './layout/parts/Modals';

export const Search = props => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle1 = () => setModal(!modal);

  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle2 = () => setTooltipOpen(!tooltipOpen);

  return (
    <div>
      <Form>
        <div className='input-group ddsss'>
          <div className='input-group-prepend'>
            <UncontrolledDropdown className='main-dropdown'>
              <DropdownToggle
                className='landing-dropdown landing-input-btn text-black'
                caret
              >
                <img src={ethereum} width='25' className='img-fluid' alt='' />
                ETH
              </DropdownToggle>
              <DropdownMenu
                className='input-dropdown-menu scrollbar'
                id='style-1'
              >
                <DropdownItem>
                  <img src={ethereum} width='35' className='img-fluid' alt='' />
                  Eth
                </DropdownItem>
                <DropdownItem>
                  <img src={ethereum} width='35' className='img-fluid' alt='' />
                  Eth
                </DropdownItem>
                <DropdownItem>
                  <img src={ethereum} width='35' className='img-fluid' alt='' />
                  Eth
                </DropdownItem>
                <DropdownItem>
                  <img src={ethereum} width='35' className='img-fluid' alt='' />
                  Eth
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
          <input
            placeholder='0.0'
            // step='1'
            type='number'
            className='form-control  landing-input'
          />
          <div className='input-group-append'>
            <UncontrolledDropdown className=''>
              <DropdownToggle
                className='landing-dropdown btn-block btn-lg btn-success text-black landing-btn'
                caret
              >
                Buy
              </DropdownToggle>
              <DropdownMenu className='landing-input-action'>
                <DropdownItem>
                  <Link to='/buy'>
                    <i className='fa fa-money-check-alt mx-2'></i> Buy
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <i className='fa fa-donate mx-2'></i>Sell
                </DropdownItem>
                <DropdownItem onClick={toggle1}>
                  <i className='fa fa-hand-holding-usd mx-2'></i>Loan
                </DropdownItem>
                <DropdownItem>
                  <Link to='/stakes'>
                    <i className='fa fa-hand-holding-usd mx-2'></i>Stake
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </div>
      </Form>
      <Modal isOpen={modal} toggle={toggle1} className='custom-modal-dialog'>
        <ModalHeader toggle={toggle1} className='border-bottom-0'></ModalHeader>
        <ModalBody>
          <div className='row'>
            <div className='col-md-6'>
              <Form>
                <label className='text-price'>
                  How much ETH do you want to collaterize
                </label>
                <div className='input-group mb-4'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text'>$</span>
                  </div>
                  <input
                    type='text'
                    className='form-control'
                    aria-label='Amount (to the nearest dollar)'
                  />
                  <div className='input-group-append'>
                    <span className='input-group-text'>.00</span>
                  </div>
                </div>
                <label className='text-price'>
                  How much EUSD do you want to generate
                </label>
                <div className='input-group mb-4'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text'>$</span>
                  </div>
                  <input
                    type='text'
                    className='form-control'
                    aria-label='Amount (to the nearest dollar)'
                  />
                  <div className='input-group-append'>
                    <span className='input-group-text'>.00</span>
                  </div>
                </div>
              </Form>
            </div>
            <div className='col-md-6'>
              <div className='silk-border p-3 rounded-sm text-price'>
                <div className='d-block mb-2'>
                  <div className='trd-head'>
                    <span className='s1'>
                      LIquidation price{' '}
                      <i
                        className='fa fa-question-circle'
                        href='#'
                        id='Tooltip-1'
                      ></i>
                      <Tooltip
                        placement='right'
                        isOpen={tooltipOpen}
                        target='Tooltip-1'
                        toggle={toggle2}
                        className='rounded bs-tooltip'
                      >
                        LIquidation price
                      </Tooltip>
                    </span>
                  </div>
                  <div className='trd-head float-right'>
                    <span className='s1'>$432</span>
                  </div>
                </div>
                <div className='d-block mb-2'>
                  <div className='trd-head'>
                    <span className='s1'>
                      Collaterization ratio{' '}
                      <i
                        className='fa fa-question-circle'
                        href='#'
                        id='Tooltip-2'
                      ></i>
                      <Tooltip
                        placement='right'
                        isOpen={tooltipOpen}
                        target='Tooltip-2'
                        toggle={toggle2}
                        className='rounded bs-tooltip'
                      >
                        Collaterization ratio
                      </Tooltip>
                    </span>
                  </div>
                  <div className='trd-head float-right'>
                    <span className='s1'>89%</span>
                  </div>
                </div>
                <div className='d-block mb-2'>
                  <div className='trd-head'>
                    <span className='s1'>Current ETH price</span>
                  </div>
                  <div className='trd-head float-right'>
                    <span className='s1'>$524</span>
                  </div>
                </div>
                <div className='d-block mb-2'>
                  <div className='trd-head'>
                    <span className='s1'>
                      Liquidity penalty{' '}
                      <i
                        className='fa fa-question-circle'
                        href='#'
                        id='penalty'
                      ></i>
                      <Tooltip
                        placement='right'
                        isOpen={tooltipOpen}
                        target='penalty'
                        toggle={toggle2}
                        className='rounded bs-tooltip'
                      >
                        Liquidity penalty
                      </Tooltip>
                    </span>
                  </div>
                  <div className='trd-head float-right'>
                    <span className='s1'>89%</span>
                  </div>
                </div>
                <div className='d-block'>
                  <div className='trd-head'>
                    <span className='s1'>
                      Minimum ratio{' '}
                      <i
                        className='fa fa-question-circle'
                        href='#'
                        id='mratio'
                      ></i>
                      <Tooltip
                        placement='right'
                        isOpen={tooltipOpen}
                        target='mratio'
                        toggle={toggle2}
                        className='rounded bs-tooltip'
                      >
                        Minimum ratio
                      </Tooltip>
                    </span>
                  </div>
                  <div className='trd-head float-right'>
                    <span className='s1'>109%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>

        <div className='px-3 pb-3'>
          <Link className='btn btn-set-price btn-block' to='/views'>
            <span className='font-weight-bold'>
              Collaterize and Generate EUSD
            </span>
          </Link>
        </div>

        {/* <ModalFooter className='border-top-0'>
          
        </ModalFooter> */}
      </Modal>
    </div>
  );
};

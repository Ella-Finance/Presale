import React, { useEffect, useState } from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSpinner, faSignOutAlt, faSignInAlt, faWallet, faSpaceShuttle, faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import {
    Web3ReactProvider,
    useWeb3React,
    UnsupportedChainIdError
  } from "@web3-react/core";

  import Avatar from 'react-avatar';

 import { formatEther } from "@ethersproject/units";


 import {buy, getEthBalance, getTokenBalance}  from "../../web3/index"
 import { parseEther } from "@ethersproject/units";
export const Buy = (props) => {
  
    const [modal, setModal] = useState(false);
    const [clickedmodal, setClickedmodal] = useState(false);
    const [backdrop, setBackdrop] = useState(true);
    const [selected, setSelected] = useState("");
    const [keyboard, setKeyboard] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [stage, setStage] = useState(0);
    const [switcher, setSwitcher] = useState("ELLA");

    const [tradeData, setTradeData] = useState({
      amount: "",
      recieve: 0,
     
      pText: "Proccessing...",
      pmsg: "",
      hash: "",
      select_coin_address: ""
    });
    const toggle = () => {
        setModal(!modal);
        setClickedmodal(true);
    };
  
    const onChange = e => {
      let r = parseFloat(e.target.value) / parseFloat(props.price);
      setTradeData({ ...tradeData, [e.target.name]: e.target.value, ['recieve']: r })
      
      
    }

      const {amount, recieve, pText, hash, pmsg, select_coin_address} = tradeData;

      const isFormValid =
  parseFloat(amount) > 0;
 
const isValid = isFormValid == false || isProcessing == true;

const processSwap = async ()  => {
  setIsProcessing(true);
  let value = parseEther(amount.toString(), "wei").toString();
  let balence = await getEthBalance(account, library);
  
  if(parseFloat(balence.message) >=  parseFloat(value)){
    
    let bT = await getTokenBalance(library.getSigner());
    console.log(bT.message, recieve);
    // if(parseFloat(bT.message) >=  parseFloat(recieve)){

      let rs = await buy(value, library.getSigner())
      if(rs.status == true){
        
        setTradeData({...tradeData, ['hash']: rs.message})
        setIsProcessing(false);
        setStage(2)
      }else{
        setTradeData({...tradeData, ['pmsg']: "Transaction did not complete successfully!"})
    setStage(4)
    setIsProcessing(false);
      }
    // }else{
    //   setTradeData({...tradeData, ['pmsg']: "No ELLA is not available now, try again later "})
    // setStage(4)
    // setIsProcessing(false);
    // }
    
  }else{
    setTradeData({...tradeData, ['pmsg']: "non-sufficient funds"})
    setStage(4)
    setIsProcessing(false);
  }

}
const context = useWeb3React();
const {
  connector,
  library,
  chainId,
  account,
  activate,
  deactivate,
  active,
  error
} = context;


const  Continue = async (e) => {
  e.preventDefault();
  setStage(0);
  setIsProcessing(false);
}

// fetch eth balance of the connected account
const [ethBalance, setEthBalance] = React.useState();
React.useEffect(() => {
  console.log('running')
  if (library && account) {
    let stale = false;
    if(clickedmodal){
      setModal(!modal)
    }
    //console.log(modal);
    
    library
      .getBalance(account)
      .then(balance => {
        if (!stale) {
         
          setEthBalance(balance);
        }
      })
      .catch(() => {
        if (!stale) {
          setEthBalance(null);
        }
      });

    return () => {
      stale = true;
      setEthBalance(undefined);
    };
  }
}, [library, account, chainId]);



    return (
        <div style={{display: "inline-block", marginLeft: "20px", marginTop: "10px"}}>
            <Modal isOpen={modal} toggle={toggle} className="" backdrop={backdrop} keyboard={keyboard}>
                <ModalHeader toggle={toggle}></ModalHeader>
                <ModalBody>
                {stage == 0 ? (
                      <div className='widget-content mt-4 trade-widget-content'>

                        <div>
                          <h5>Send manually</h5>
                          <input className="form-control" value="0xb7401B746664f4206969bdc58bc70D7Bb73b4Ac4" />
                          <h5 className="mt-5">Send automatically</h5>
                        </div>
                        <div className="row">
                        
                        <div className="col-md-3">
                        <p><small>Price</small> </p>
                        </div>

                        <div className="col-md-9">
                        <p className="text-right"> <span className="price-of-trade">{parseFloat(props.price)}</span><small className="text-warning font-weight-bolder"><sup>ETH</sup></small></p>
                        </div>
                        </div>
                    
                    <hr />
                    <label><small>Amount</small></label>
                        <div className='pb-3 input-group'>
                        
                          <input
                           
                            step='1'
                            type='number'
                            className='form-control'
                            value={amount}
                            name="amount"
                            onChange={e => onChange(e)}
                          />
                          <div className='input-group-append'>
                            <span className='input-group-text'>{"ETH"}</span>
                          </div>
                        </div>
                        <div className="row">
                        <div className="col-md-3">
                        <p><small>Receive</small> </p>
                        </div>

                        <div className="col-md-9">
                <p className="text-right"> <span className="price-of-trade">{recieve}</span><small className="text-warning font-weight-bolder font-weight-bolder"><sup>ELLA</sup></small></p>
                        </div>
                        </div>
                       
                        <button onClick={processSwap} disabled={isValid} className='btn btn-success2  lemon k mt-2'>
                          

                          {isProcessing ? (<span>
                            <FontAwesomeIcon icon={faSpinner} spin /> Buy...
                          </span>) : 
                          (<span>Buy {switcher}</span>)
                          }
                        </button>

                       
                      </div> ) : null }

                      {stage == 4 ? (
            <div className=" intro-create-a-pair">
            <div className="inner">
               <div className="inner-2">
               <div className=" mt-4">
                <h1 className="text-center text-danger">
                
                  <FontAwesomeIcon icon={faTimes} />
                   <br />
                  Fail
                  </h1>
                  <p className="text-center text-danger">{pmsg}
                  <br />
               
          
                 
                  <a href="#" onClick={Continue}  className="btn btn-success2">Continue</a>

                  </p>
                  
              </div>
                
                       
               </div>

               
            </div>
          
            </div> ) : null }

            {stage == 2 ? (
            <div className="  intro-create-a-pair">
            <div className="inner">
               <div className="inner-2">
               <div className=" mt-4">
                <h1 className="text-center theColor">
                
                  <FontAwesomeIcon icon={faCheckCircle} />
                   <br />
                  Success
                  </h1>
                  <p className="text-center">Transaction was successful.
                  <br />
               
            <a
            className="btn btn-link text-success"
          href={"https://etherscan.io/tx/" + hash}
          target="_blank"
        >
          View on etherscan
        </a>{" "}
        <br />
        <br />
                  <a href="#" onClick={Continue}  className="btn btn-success2">Continue</a>
                  </p>
                  
              </div>
                
                       
               </div>

               
            </div>
          
            </div> ) : null }
                </ModalBody>
                
            </Modal>
            <button onClick={toggle}  className=" btn primary-btn lemon "> Buy {" "}  <FontAwesomeIcon icon={faSpaceShuttle} /> </button>


        </div>
    )
  
}

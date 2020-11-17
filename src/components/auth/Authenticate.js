import React, { useEffect, useState } from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSpinner, faSignOutAlt, faSignInAlt, faWallet } from '@fortawesome/free-solid-svg-icons';
import {
    Web3ReactProvider,
    useWeb3React,
    UnsupportedChainIdError
  } from "@web3-react/core";
  import {
    NoEthereumProviderError,
    UserRejectedRequestError as UserRejectedRequestErrorInjected
  } from "@web3-react/injected-connector";
  import Avatar from 'react-avatar';

  import {
    URI_AVAILABLE,
    UserRejectedRequestError as UserRejectedRequestErrorWalletConnect
  } from "@web3-react/walletconnect-connector";
  import { UserRejectedRequestError as UserRejectedRequestErrorFrame } from "@web3-react/frame-connector";
import { Web3Provider } from "@ethersproject/providers";
import { formatEther } from "@ethersproject/units";

import {
    injected,
   // network,
    walletconnect,
    // walletlink,
     ledger,
     trezor,
    // frame,
     fortmatic,
     portis,
    // squarelink,
    // torus,
    // authereum
  } from "../../connectors";

  import { useEagerConnect, useInactiveListener } from "../../hooks";
 
  const connectorsByName = {
    Injected: injected,
    // Network: network,
    WalletConnect: walletconnect,
    // WalletLink: walletlink,
    Ledger: ledger,
     Trezor: trezor,
    // Frame: frame,
     Fortmatic: fortmatic,
    Portis: portis,
    // Squarelink: squarelink,
    // Torus: torus,
    // Authereum: authereum
  };

export const Authenticate = (props) => {
    const [modal, setModal] = useState(false);
    const [clickedmodal, setClickedmodal] = useState(false);
    const [backdrop, setBackdrop] = useState(true);
    const [selected, setSelected] = useState("");
    const [keyboard, setKeyboard] = useState(false);
    const toggle = () => {
        setModal(!modal);
        setClickedmodal(true);
    };
  
    useEffect(() => {
       
      }, [])


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

// handle logic to recognize the connector currently being activated
const [activatingConnector, setActivatingConnector] = React.useState();
React.useEffect(() => {
    console.log('running dhhhdd '+activatingConnector, connector)
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);
    // success
     // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();
    // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
 useInactiveListener(!triedEager || !!activatingConnector);
// handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
useInactiveListener(!triedEager || !!activatingConnector);

//logout()

// set up block listener
const [blockNumber, setBlockNumber] = React.useState();
React.useEffect(() => {
  console.log('running')
  if (library) {
    let stale = false;

    console.log('fetching block number!!')
    library
      .getBlockNumber()
      .then(blockNumber => {
        if (!stale) {
          setBlockNumber(blockNumber);
        }
      })
      .catch(() => {
        if (!stale) {
          setBlockNumber(null);
        }
      });

    const updateBlockNumber = blockNumber => {
      setBlockNumber(blockNumber);
    };
    library.on("block", updateBlockNumber);

    return () => {
      library.removeListener("block", updateBlockNumber);
      stale = true;
      setBlockNumber(undefined);
    };
  }
}, [library, chainId]);

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

// log the walletconnect URI
React.useEffect(() => {
    console.log('running')
    const logURI = uri => {
      console.log("WalletConnect URI", uri);
    };
    walletconnect.on(URI_AVAILABLE, logURI);

    return () => {
      walletconnect.off(URI_AVAILABLE, logURI);
    };
  }, []);

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} className="" backdrop={backdrop} keyboard={keyboard}>
                <ModalHeader toggle={toggle}>Connect Wallet</ModalHeader>
                <ModalBody>
                {activatingConnector ? (
                  <h1  className="text-center theLoader">
                  <FontAwesomeIcon icon={faSpinner} spin /><br />
                 <small>Loading</small>
                 </h1>
                ) : (
                  <div className="row">
                  {Object.keys(connectorsByName).map(name => {
          const currentConnector = connectorsByName[name];
          
          
          const activating = currentConnector === activatingConnector;
          const connected = currentConnector === connector;
          const disabled =
            !triedEager || !!activatingConnector || connected || !!error;

          return (
           <div className="col-md-3" >
           <div className=" connectors" >
            <button style={{minHeight: "127.22px"}}
            className="btn wallets"
           
            key={name}
            onClick={() => {
              setActivatingConnector(currentConnector);
              activate(connectorsByName[name]);
              localStorage.setItem("selected", name)
              
            }}>
              <img src={"/providers/"+  name.toLowerCase() +".png"} style={{width: "58px"}} className="img-fluid"/><br/>

                {name == "Injected" ? "MetaMask" : [name == "WalletConnect" ? "Wallet Connect": name]}
            </button>
             </div>
             </div>
          );
        
        })}
                 
       

                   

                   


                  </div>
                )}
                </ModalBody>
                
            </Modal>
            {context.active ?  (<span>   <span>
          {ethBalance === undefined
            ? "..."
            : ethBalance === null
            ? "Error"
            : `Ξ${parseFloat(formatEther(ethBalance)).toPrecision(4)}`}
            {/* src={"/providers/"+ (localStorage.selected == undefined ? context.account : localStorage.selected.toLowerCase()) +".png"} */}
        </span> <Avatar name={localStorage.selected ? localStorage.selected : context.account }  round={true} size="40" /> { props.isHome == "false" ? (context.account.substring(0, 6) + "..."+ context.account.substring(38, 42)) : null} <button   onClick={() => {
              deactivate();
            }} className={props.isHome == "false" ? "auto btn btn-ella": " btn btn-ella"}> Logout <FontAwesomeIcon icon={faSignOutAlt} /> </button></span>): (<button onClick={toggle}  className={props.isHome == "false" ? "auto btn btn-ella": "btn btn-ella"}> Connect {" "}  <FontAwesomeIcon icon={faWallet} /> </button>
            )}


        </div>
    )
  
}

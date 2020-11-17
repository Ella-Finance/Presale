import { Contract } from '@ethersproject/contracts'
import tokenSale  from "./contracts/tokenSale.json";
import erc20  from "./contracts/erc20.json";




  const contractInstance = (signer) => {
    return new Contract(tokenSale.address, tokenSale.abi, signer);
  };

  
  const erc20Instance = (signer) => {
    return new Contract(erc20.address, erc20.abi, signer);
  };
  

  const getTokenBalance = async (signer) =>{

    try {
      const instance = erc20Instance(signer);
      let result = await instance.balanceOf(tokenSale.address);
      return {
        message: result.toString(),
      status: true,
      }
     } catch (error) {
      console.log(error);
      return {
        message: error,
        status: false,
      };
     }

    
  }

  const getEthBalance = async (account, library) => {
    
    try {
      let result = await library.getBalance(account);
      return {
        message: result.toString(),
      status: true,
      }
     } catch (error) {
      console.log(error);
      return {
        message: error,
        status: false,
      };
     }

  }

  
   const buy = async (amount, signer) => {
    try {
     const instance = contractInstance(signer);
     let result = await instance.buyer({value: amount});
     return {
       message: result.hash,
     status: true,
     }
    } catch (error) {
     console.log(error);
     return {
       message: error,
       status: false,
     };
    }
     
 
   }

  

  
   

  

   export {
    buy,
    getEthBalance,
    getTokenBalance
   };
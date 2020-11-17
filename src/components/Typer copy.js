import React, { useEffect, useState } from 'react'
const Typer =()=>{
    let text ="";
    const [counter, setCounter] = useState("");
    const message =["I s s u e","T r a d e"];
    let i =0 ;
    let jsxArray = [];
  
    useEffect(() => {

       
            localStorage.setItem("currentIndex", 0);
            localStorage.setItem("innerIndex", 0);
            localStorage.setItem("running", true);
        
    
        

       
        const timerId = setInterval(() => {


            setTimeout(
                function() {
                    if (localStorage.running == "true") {
                        console.log("Current index", localStorage.currentIndex);
                         var res = message[localStorage.currentIndex].split(" ");
                         if (typeof res[localStorage.innerIndex] != "undefined") {
                             jsxArray.push(
                                 res[localStorage.innerIndex] 
                                 // <span className="typewriter">
                                      
                                 // </span>
                               
                              );
         
                              localStorage.setItem("innerIndex", parseInt(localStorage.innerIndex)+1);
                          localStorage.setItem("text", jsxArray);
                          let con = localStorage.text.split(",");
                          setCounter(counter => con.length > 1 ? con.join("") : con);
                         }else{
                             localStorage.setItem("running", false);
                             localStorage.setItem("wait", 3);
                           
                             
                            
                         }
                     }
                }
                .bind(this),
                300
            );


            
                
               
                    
          
           
           
          }, 100);

          const y = setInterval(() => {   

            if (localStorage.running == "false") {
                localStorage.setItem("wait", 0);
                

            }
          }, 3000); 


          const yu = setInterval(() => {
            if (localStorage.running == "false") {
                if(localStorage.wait == 0){
                    jsxArray.pop(
                        localStorage.innerIndex-1
                       
                        // <span className="typewriter">
                             
                        // </span>
                      
                     );
                     localStorage.setItem("innerIndex", parseInt(localStorage.innerIndex)-1);
                     if(parseInt(localStorage.innerIndex) == -1){
                         
                        localStorage.setItem("innerIndex", 0);
                        localStorage.setItem("running", true);
    
                        if(parseInt(localStorage.currentIndex) == 0){
                            localStorage.setItem("currentIndex", 1);
                        }else{
                            localStorage.setItem("currentIndex", 0);
                        }
                        
                     }
                     localStorage.setItem("text", jsxArray);
                     let con = localStorage.text.split(",");
                     setCounter(counter => con.length > 1 ? con.join("") : con);
                      
                }
                
            }
          }, 100 );
      }, []);

    
    return counter;
  }

  export default Typer;
import { useState } from "react";
// import Comp1, { Comp2 } from "./components/Comp1";


const App=()=>
{
    const[choco , setchoco]= useState(20);
    function sellfun()
    {
      if(choco>0)
      {
        setchoco(choco-1);
      }
      else{
        alert("out of stock");
      }
    }
    //js logic code
  return(
    <>
         <h1> chocolate shop</h1>
         <p>available chocolate: {choco}</p>  
         <button onClick={sellfun}>sell 1 chcolate</button>

         {/* <Comp1 />
         <Comp2 />
         <h1> star</h1>
         <p>moon</p> */}





    </>
    
  );
}

export default App;

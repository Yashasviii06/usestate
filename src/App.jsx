import Comp1, { Comp2 } from "./components/Comp1";


const App=()=>
{
    //js logic code
  return(
    <>
         <h1> hello react App Component</h1>
         <p>this is paragraph from App Component</p>
         <Comp1 />
         <Comp2 />
         <h1> star</h1>
         <p>moon</p>
    </>
    
  );
}

export default App;

import React, {useState} from "react";
import {numbers} from "../../../data.js";
import NumberButton from "./NumberButton.js";
//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {
 
  // STEP 2 - add the imported data to state
  let [numberState] = useState(numbers);
  

  
  return (
    <div>
   
       {numberState.map((number, index) => {return <NumberButton number = {number} key = {index}/>} )}
  
    </div>
  );

};

export default Numbers;
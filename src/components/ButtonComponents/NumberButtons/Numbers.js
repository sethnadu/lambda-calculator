import React, {useState} from "react";
import {numbers} from "../../../data.js";
import NumberButton from "./NumberButton.js";
//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {
 
  // STEP 2 - add the imported data to state
  let [numberState, setNumberState] = useState(numbers);
  
  
  const numberChange = numberState.map(num => { return num});
  
  console.log(numberChange);
  
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      <NumberButton buttonNumber = {numberState.map(num => {return <button>{num}</button>})} />
    </div>
  );

};

export default Numbers;
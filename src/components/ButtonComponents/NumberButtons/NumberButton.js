import React from "react";


const NumberButton = ({number, id}) => {


  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
     { <button value = {id} className ="calc-btn" >{number}</button> }
    </>
  );
};

export default NumberButton;
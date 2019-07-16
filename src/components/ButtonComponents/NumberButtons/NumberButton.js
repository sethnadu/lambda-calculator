import React from "react";


const NumberButton = ({number, id}) => {


  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
     { <button class ="numberButtonsDiv" value = {id} class ="numberButtons" >{number}</button> }
    </>
  );
};

export default NumberButton;
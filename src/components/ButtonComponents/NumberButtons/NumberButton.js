import React from "react";
import Numbers from "./Numbers";

const NumberButton = ({buttonNumber}) => {


  return (
    <div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {buttonNumber}
    </div>
  );
};

export default NumberButton;
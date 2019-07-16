import React from "react";




const OperatorButton = ({value, char, id}) => {
  return (
    <>
       {<button class ="operatorButtons" key ={id} value = {value} className = "">{char}</button>}
    </>
  );
};

export default OperatorButton;
import React from "react";


const SpecialButton = ({item, id}) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button value = {id}>{item}</button>
    </>
  );
};

export default SpecialButton;
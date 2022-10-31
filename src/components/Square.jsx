import React from "react";

const Square = (props) => {
  const { value, onClick } = props;
  return (
    <div className="Square" onClick={onClick}>
      <h5>{value}</h5>
    </div>
  );
};

export default Square;

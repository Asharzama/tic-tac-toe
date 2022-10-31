import React from "react";

const Footer = (props) => {
  const { initial } = props;
  return (
    <div className="Panel">
      <button onClick={initial} >New Game</button>
    </div>
  );
};

export default Footer;

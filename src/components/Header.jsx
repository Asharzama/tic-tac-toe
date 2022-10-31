import React from "react";

const Header = (props) => {
  const { currentPlayer, isWinner, winningPlayer, noWinner } = props;

  const displayHandler = () => {
    if (isWinner) {
      return <div>{winningPlayer === "X" ? "A" : "B"} won</div>;
    } else if (noWinner) {
      return <div>Game is Draw</div>;
    } else {
      return <div>Player {currentPlayer === "X" ? "A" : "B"}'s turn</div>;
    }
  };
  return <div className="Panel Header">{displayHandler()}</div>;
};

export default Header;

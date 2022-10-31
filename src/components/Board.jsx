import React from "react";
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Square from "./Square";
import { checkWinner, isDraw } from "./Helper";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [isWinner, setWinner] = useState();
  const [noWinner, setDraw] = useState();
  const [winningPlayer, setWinningPlayer] = useState();
  const intial = () => {
    let squares = [];
    for (let i = 0; i < 9; i++) {
      squares.push(IntialGrid(i));
    }
    return squares;
  };

  const clickHandler = (index) => {
    if (isWinner) return;
    if (state[index] === null) {
      let board = [...state];
      board[index] = currentPlayer;
      setState(board);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
    if (checkWinner(state, index, currentPlayer)) {
      setWinner(true);
      setWinningPlayer(currentPlayer);
    }
    if (isDraw(state, index, currentPlayer)) {
      setDraw(true);
    }
  };

  const IntialGrid = (index) => {
    return (
      <Square
        key={index}
        onClick={() => clickHandler(index)}
        value={state[index]}
      />
    );
  };

  const intialBoard = () => {
    setState(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(false);
    setDraw(false);
  };

  return (
    <>
      <Header
        currentPlayer={currentPlayer}
        isWinner={isWinner}
        winningPlayer={winningPlayer}
        noWinner={noWinner}
      />
      <div className="Board">{intial()}</div>
      <Footer initial={intialBoard} />
    </>
  );
};

export default Board;

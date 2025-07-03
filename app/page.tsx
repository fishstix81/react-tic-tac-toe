"use client";

import React from "react";

import Board from "./componets/Board";
import Cell from "./componets/Cell";
import Row from "./componets/Row";
import { calculateWinner } from "./helpers/calculateWinner";

import styles from "./page.module.css";

export default function Home() {
  const [squares, setSquares] = React.useState<Array<string | null>>(
    Array(9).fill(null),
  );
  const [currentMove, setCurrentMove] = React.useState<number>(0);
  const whoIsWinner = calculateWinner(squares);
  if (whoIsWinner) {
    alert(whoIsWinner);
  }

  const handleClick = (sel: number) => {
    if (whoIsWinner) {
      return;
    }

    const isSelected = squares[sel] !== null;
    if (isSelected) {
      return;
    }

    const nextSquares = squares.slice();
    const isXTurn = currentMove % 2 === 0;
    const turn = isXTurn ? "X" : "O";
    nextSquares[sel] = turn;
    setCurrentMove(currentMove + 1);
    setSquares(nextSquares);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Tic Tac Toe</h1>
        <Board>
          <Row>
            <Cell squareVal={squares[0]} onCellClick={() => handleClick(0)} />
            <Cell squareVal={squares[1]} onCellClick={() => handleClick(1)} />
            <Cell squareVal={squares[2]} onCellClick={() => handleClick(2)} />
          </Row>
          <Row>
            <Cell squareVal={squares[3]} onCellClick={() => handleClick(3)} />
            <Cell squareVal={squares[4]} onCellClick={() => handleClick(4)} />
            <Cell squareVal={squares[5]} onCellClick={() => handleClick(5)} />
          </Row>
          <Row>
            <Cell squareVal={squares[6]} onCellClick={() => handleClick(6)} />
            <Cell squareVal={squares[7]} onCellClick={() => handleClick(7)} />
            <Cell squareVal={squares[8]} onCellClick={() => handleClick(8)} />
          </Row>
        </Board>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}

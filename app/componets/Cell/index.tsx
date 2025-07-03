import React from "react";

import styles from "./cell.module.css";

type CellProps = {
  onCellClick: () => void;
  squareVal: string | null;
};

const Cell = ({ onCellClick, squareVal }: CellProps): React.ReactElement => {
  return (
    <button className={styles.cell} onClick={onCellClick}>
      {squareVal}
    </button>
  );
};

export default Cell;

import React from "react";

const Board = ({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}): React.ReactElement => {
  return <>{children} </>;
};

export default Board;

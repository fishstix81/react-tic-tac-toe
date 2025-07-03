import React from "react";

import styles from "./row.module.css";

const Row = ({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}): React.ReactElement => {
  return <div className={styles.row}>{children}</div>;
};

export default Row;

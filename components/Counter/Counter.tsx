"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";

interface CounterProps {
  initialCount?: number;
  bgColor?: string;
}

function Counter({ initialCount = 99,bgColor="#fff" }: CounterProps) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };



  // set bacgkround color from prop , keep the rest of the styles
return (
<div className={styles.counter} style={{backgroundColor:bgColor}}>
  <button className={styles.btn}  onClick={decrement}>
    -
  </button>
  <span className={styles.count}>{count}</span>
  <button className={styles.btn} onClick={increment}>
    +
  </button>
</div>
);
}

export default Counter;
import React, { FC, ReactComponentElement } from "react";
import { useState } from "react";
import styles from "./game.module.css";
import Land from "@/components/land/Land";

export default function Game() {
  const [boxes, setBoxes] = useState<ReactNode[]>(new Array(16).fill(""));
  const [balance, setBalance] = useState<number>(100);

  const addComponent = (index: number) => {
    if (balance < 5) {
      alert("Not Enough Money Game Over!");
      return;
    }
    const newBoxes: ReactNode[] = [...boxes];
    newBoxes[index] = <Land setBalance={setBalance} />;
    setBalance(balance - 5);
    setBoxes(newBoxes);
  };

  const collectPlant = (index: number) => {
    const newBoxes: ReactNode[] = [...boxes];
    newBoxes[index] = "";
    setBoxes(newBoxes);
  };

  return (
    <>
      <div className={styles.background}>
        <h2 className={styles.balance}> Balance : {balance}</h2>
        <div className={styles.container}>
          {boxes.map((isFilled, index) => (
            <div
              className={styles.box}
              key={index}
              onClick={() => {
                isFilled === "" ? addComponent(index) : collectPlant(index);
              }}
            >
              {boxes[index]}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

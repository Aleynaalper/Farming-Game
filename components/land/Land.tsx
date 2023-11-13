import React, { Dispatch, SetStateAction } from "react";
import { useState, useEffect } from "react";
import styles from "./Land.module.css";

interface Props {
  setBalance: Dispatch<SetStateAction<number>>;
}

export default function Land({ setBalance }: Props) {
  const plantSteps: string[] = [
    "../../Seeding.png",
    "/../../LittlePlant.png",
    "../../MiddlePlant.png",
    "../../Flower.png",
    "../../DriedPlant.png",
  ];
  const [plantType, setPlantType] = useState<string>(plantSteps[0]);
  const [intervalVal, setIntervalVal] = useState<number>(2000);
  const [plantIndex, setPlantIndex] = useState(1);

  const x = 5;

  useEffect(() => {
    if (plantIndex == 3) {
      setIntervalVal(5000);
    } else if (plantIndex == 5) {
      return;
    }
    const interval = setInterval(() => {
      setPlantIndex((prev) => prev + 1);
      setPlantType(plantSteps[plantIndex]);
    }, intervalVal);
    return () => clearInterval(interval);
  }, [plantIndex]);

  const handleBalance = () => {
    console.log(plantIndex);
    if (plantIndex == 4) {
      setBalance((prev) => prev + 10);
    }
  };

  return (
    <>
      <div className={styles.box} onClick={handleBalance}>
        {plantType && (
          <img className={styles.image} src={plantType} alt="Plant" />
        )}
      </div>
    </>
  );
}

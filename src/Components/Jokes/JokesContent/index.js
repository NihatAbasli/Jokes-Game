import React from "react";
import styles from "./jcontent.module.css";
import { Card } from "../Card";
import { smiles } from "../../../Constant/smiles";

export const JokesContent = ({ data, onAzalt, onArtir }) => {
  console.log(data);

  const handleEmoji = (i) => {
    let emoji;
    if (i <= 2) {
      emoji = smiles.smile1;
    } else if (i < 6 && i >= 3) {
      emoji = smiles.smile2;
    } else if (i < 8 && i >= 6) {
      emoji = smiles.smile3;
    } else if (i <= 9 && i >= 8) {
      emoji = smiles.smile6;
    }

    return emoji;
  };

  return (
    <div className={styles.content}>
      <div className={styles.box}>
        <div className={styles.leftSide}>
          <p className={styles.leftTitle}>Jokes App</p>
          <img
            width={200}
            alt="smile"
            src="https://upload.wikimedia.org/wikipedia/commons/6/66/SmileyFace.png"
          />
        </div>
        <div className={styles.rightSide}>
          {data?.map((item, index) => {
            const emoji = handleEmoji(index);
            return (
              <Card
                id={item.id}
                text={item.joke}
                vote={item.vote}
                emoji={emoji}
                onDecrement={() => onAzalt(index)}
                onIncrement={() => onArtir(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

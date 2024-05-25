import React from "react";
import styles from "./card.module.css";

export const Card = ({
  text,
  emoji = "🤣",
  vote = 0,
  onDecrement,
  onIncrement,
}) => {
  return (
    <div className={styles.Card}>
      <div className={styles.vote}>
        <button onClick={onDecrement}>-</button>
        <span>{vote}</span>
        <button onClick={onIncrement}>+</button>
      </div>
      <div className={styles.text}>
        <p>{text}</p>
      </div>
      <div className={styles.emoji}>{emoji}</div>
    </div>
  );
};

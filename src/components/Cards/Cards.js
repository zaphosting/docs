import React from 'react';
import styles from './Cards.module.css';

const Cards = ({ children }) => {
  return <div className={styles.Cards}>{children}</div>;
};

export default Cards;
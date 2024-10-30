import React, { useState } from 'react';
import styles from './Cards.module.css';

const Cards = ({ children }) => {
  const [ isHidden, setHidden ] = useState(true);
  
  function toggleHiddenState() {
    setHidden(isHidden ? false : true)
  }
  
  return (
    <div className={styles.Core}>
      <div className={isHidden ? styles.Cards : styles.CardsUnhidden}>{children}</div>

      {
        children.length > 10 ? <button className={styles.Button} onClick={toggleHiddenState}>{isHidden ? 'Show More' : 'Show Less'}</button> : null
      }
    </div>
  )
};

export default Cards;
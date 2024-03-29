import React from 'react';
import Link from '@docusaurus/Link';
import styles from './Card.module.css';

const Card = ({ image, title, description, link }) => {
  return (
    <div className={styles.card}>
      <Link to={link} className={styles.cardLink}>
        <div className={styles.imageContainer}>
          <img src={image} alt={title} />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.textContainerTitle}>{title}</p>
          {/* <p className={styles.textContainerDescription}>{description}</p> */}
        </div>
      </Link>
    </div>
  );
};

export default Card;
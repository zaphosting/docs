import React from 'react';
import Link from '@docusaurus/Link';
import styles from './Card.module.css';

const Card = ({ image, title, description, link, type }) => {
  return (
    <div className={styles.card}>
      <Link to={link} autoAddBaseUrl="true" isNavLink="true" className={styles.cardLink}>

        <div className={styles.imageContainer}>
          <img className={type == "product-categories" ? styles.objectContain : styles.objectCover} src={image} alt={title} />
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
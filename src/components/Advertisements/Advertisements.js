import React from 'react';
import styles from './Advertisements.module.css';

const Advertisements = ({ title, description, image, buttonOrderText, buttonOrderValue, buttonExploreText, buttonExploreValue}) => {
  return (
    <div className={styles.AdvertisementsContainer}>
    <div className={styles.imageContainer} onClick={(e) => { e.preventDefault(); window.location.href=buttonOrderValue;}}>
    <img className={styles.image} src={image}></img>
    </div>
    <div className={styles.contentContainer}>
    <p className={styles.title}>{title}</p>
    <p className={styles.description}>{description}</p>
    <button className={styles.btnAdverts} onClick={(e) => { e.preventDefault(); window.location.href=buttonOrderValue;}}>{buttonOrderText}</button>
    <button className={styles.btnAdverts} onClick={(e) => { e.preventDefault(); window.location.href=buttonExploreValue;}}>{buttonExploreText}</button>
    </div>
    </div>
    );
  };
  
  export default Advertisements;
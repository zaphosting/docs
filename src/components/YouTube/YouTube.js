import React from 'react';
import styles from './YouTube.module.css';

const YouTube = ({ videoId, imageSrc, title, description }) => {
  const handleContentClick = () => {
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    window.open(videoUrl, '_blank');
  };

  return (
    <div className={styles.YouTubeContainer} onClick={handleContentClick}>
      <div className={styles.videoContainer}>
        <img
          className={styles.videoImage}
          src={imageSrc}
          alt={title}
        />
        <div className={styles.overlay}>
          <div className={styles.playIcon}></div>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default YouTube;

import React from 'react';
import styles from './YouTube.module.css';

const YouTube = ({ videoId, title, description }) => {
  const handleContentClick = () => {
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    window.open(videoUrl, '_blank');
  };

  return (
    <div className={styles.YouTubeContainer}>
      <div className={styles.videoContainer}>
        <iframe
          className={styles.videoIframe}
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.contentContainer} onClick={handleContentClick}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default YouTube;
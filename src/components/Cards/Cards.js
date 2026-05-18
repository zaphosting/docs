import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import styles from './Cards.module.css';

export const Card = ({ image, title, description, link, type, layout = 'vertical' }) => {
  const isHorizontal = layout === 'horizontal';

  const classNames = [
    styles.card,
    isHorizontal ? styles.horizontal : styles.vertical,
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      <Link to={link} autoAddBaseUrl="true" isNavLink="true" className={styles.cardLink}>
        <div className={styles.imageContainer}>
          <img
            className={type === "product-categories" ? styles.objectContain : styles.objectCover}
            src={image}
            alt={title}
            data-no-zoom
          />
          <div className={styles.imageOverlay} />
        </div>

        <div className={styles.textContainer}>
          <div className={styles.titleRow}>
            <div className={styles.titleGroup}>
              <p className={styles.title}>{title}</p>
              {isHorizontal && description && (
                <p className={styles.description}>{description}</p>
              )}
            </div>
            <div className={styles.arrowWrap}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={styles.arrow}
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

const Cards = ({ children, layout = 'vertical', columns = 3 }) => {
  const items = React.Children.toArray(children);
  const [visibleCount, setVisibleCount] = useState(9);

  const shownItems = items.slice(0, visibleCount);

  const gridClass = [
    styles.grid,
    styles[`cols${columns}`],
  ].join(' ');

  return (
    <div className={styles.wrapper}>
      <div className={gridClass}>
        {shownItems.map((child, i) => (
          <div key={i} className={styles.cell}>
            {React.isValidElement(child)
              ? React.cloneElement(child, { layout })
              : child}
          </div>
        ))}
      </div>

      {items.length > 9 && (
        <div className={styles.footer}>
          <div className={styles.counter}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={styles.counterIcon}>
              <path fillRule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM9 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.75 8a.75.75 0 0 0 0 1.5h.75v1.75a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8.25 8h-1.5Z" clipRule="evenodd" />
            </svg>
            <Translate
              id="cards.counter"
              description="Amount of displayed vs. total card items"
              values={{ shown: shownItems.length, total: items.length }}
            >
              {'{shown} out of {total} contents are displayed'}
            </Translate>
          </div>

          {items.length > visibleCount && (
            <button onClick={() => setVisibleCount(prev => prev + 9)} className={styles.showMoreButton}>
              <Translate id="cards.showMore" description="Button to display additional cards">
                Show more
              </Translate>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={styles.showMoreIcon}>
                <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Cards;

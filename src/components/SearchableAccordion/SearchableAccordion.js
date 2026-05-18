import React, { useState, useMemo, useRef, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import Translate, { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

function AccordionItem({ title, content, isOpen, onToggle }) {
  const contentRef = useRef(null);

  return (
    <div className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
      <button
        type="button"
        className={styles.itemHeader}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className={styles.itemIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.itemIconSvg}>
            <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 .75.75 0 0 1 1.06 1.06ZM10 15a1 1 0 0 1-1-1v-3a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1Zm-1.13-7.44a1.13 1.13 0 1 1 2.26 0 1.13 1.13 0 0 1-2.26 0Z" clipRule="evenodd" />
          </svg>
        </div>
        <span className={styles.itemTitle}>{title}</span>
        <div className={styles.chevronWrap}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={styles.chevron}>
            <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
        </div>
      </button>
      <div
        className={styles.itemBody}
        ref={contentRef}
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight + 'px' : '0px',
        }}
      >
        <div className={styles.itemContent}>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

const SearchableAccordion = ({ items, locale }) => {
  const { i18n } = useDocusaurusContext();
  const currentLocale = locale || i18n.currentLocale;
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(5);
  const [openIndex, setOpenIndex] = useState(null);

  const localizedItems = useMemo(() => {
    return items.map(item => {
      let title, content;

      if (typeof item.title === 'object' && item.title !== null) {
        title = item.title[currentLocale] || item.title['en'] || Object.values(item.title)[0];
      } else {
        title = item.title;
      }

      if (typeof item.content === 'object' && item.content !== null) {
        content = item.content[currentLocale] || item.content['en'] || Object.values(item.content)[0];
      } else {
        content = item.content;
      }

      return { title, content };
    });
  }, [items, currentLocale]);

  const filteredItems = useMemo(
    () =>
      localizedItems.filter(
        item =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.content.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm, localizedItems]
  );

  const shownItems = filteredItems.slice(0, visibleCount);

  const handleToggle = useCallback((index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  }, []);

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 5);
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.searchWrap}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.searchIcon}>
          <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clipRule="evenodd" />
        </svg>
        <input
          type="text"
          placeholder={translate({
            id: 'accordion.search.placeholder',
            message: 'Search...',
            description: 'Placeholder text in the accordion search field'
          })}
          value={searchTerm}
          onChange={e => {
            setSearchTerm(e.target.value);
            setOpenIndex(null);
            setVisibleCount(5);
          }}
          className={styles.searchInput}
        />
        {searchTerm && (
          <button
            type="button"
            className={styles.searchClear}
            onClick={() => { setSearchTerm(''); setOpenIndex(null); setVisibleCount(5); }}
            aria-label="Clear search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={styles.searchClearIcon}>
              <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
            </svg>
          </button>
        )}
      </div>

      <div className={styles.itemList}>
        {shownItems.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>

      {filteredItems.length === 0 && searchTerm && (
        <div className={styles.emptyState}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.emptyIcon}>
            <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clipRule="evenodd" />
          </svg>
          <Translate id="accordion.noResults" description="Message when no FAQ results are found">
            No matching questions found.
          </Translate>
        </div>
      )}

      <div className={styles.footer}>
        <div className={styles.counter}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={styles.counterIcon}>
            <path fillRule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM9 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.75 8a.75.75 0 0 0 0 1.5h.75v1.75a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8.25 8h-1.5Z" clipRule="evenodd" />
          </svg>
          <Translate
            id="accordion.counter"
            description="Amount of displayed vs. filtered accordion items"
            values={{ shown: shownItems.length, total: filteredItems.length }}
          >
            {'{shown} out of {total} contents are displayed'}
          </Translate>
        </div>

        {filteredItems.length > visibleCount && (
          <button onClick={handleShowMore} className={styles.showMoreButton}>
            <Translate
              id="accordion.showMore"
              description="Button to display additional accordion items"
            >
              Show more
            </Translate>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={styles.showMoreIcon}>
              <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchableAccordion;

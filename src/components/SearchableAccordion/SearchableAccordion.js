import React, { useState, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import Details from '@theme/Details';
import Translate, { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

/**
 * Accordion-Komponente mit Suchfunktion für beliebige Inhalte
 * @param {Object[]} items - Array mit Objekten im Format { title, content } oder { title: { en: "...", de: "..." }, content: { en: "...", de: "..." } }
 * @param {string} locale - Optional: Sprache (z.B. 'en', 'de'). Falls nicht angegeben, wird die aktuelle Docusaurus-Sprache verwendet
 */
const SearchableAccordion = ({ items, locale }) => {
  const { i18n } = useDocusaurusContext();
  const currentLocale = locale || i18n.currentLocale;
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(5);

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

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 5);
  };

  return (
    <div className="accordion">
      <input
        type="text"
        placeholder={translate({
          id: 'accordion.search.placeholder',
          message: 'Search...',
          description: 'Placeholder text in the accordion search field'
        })}
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />

      {shownItems.map((item, index) => (
        <Details key={index} summary={item.title} className="alert alert--info">
          <ReactMarkdown>{item.content}</ReactMarkdown>
        </Details>
      ))}

      <div className={styles.counter}>
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
        </button>
      )}
    </div>
  );
};

export default SearchableAccordion;

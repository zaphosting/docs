import React, { useState, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import Details from '@theme/Details';
import Translate, { translate } from '@docusaurus/Translate';
import styles from './styles.module.css';

/**
 * Accordion-Komponente mit Suchfunktion für beliebige Inhalte
 * @param {Object[]} items - Array mit Objekten im Format { title, content }
 */
const SearchableAccordion = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(5);

  const filteredItems = useMemo(
    () =>
      items.filter(
        item =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.content.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm, items]
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

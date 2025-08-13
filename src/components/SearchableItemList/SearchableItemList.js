import React, { useState, useMemo } from 'react';
import Button from '@site/src/components/Button';
import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';

const SearchableItemList = ({ items = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const toggleDescription = (index) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const safeItems = useMemo(() => {
    return items.map((it) => ({
      title: typeof it?.title === 'string' ? it.title : '',
      category:
        typeof it?.category === 'string' && it.category.trim() !== ''
          ? it.category
          : 'Uncategorized',
      link: typeof it?.link === 'string' ? it.link : '',
      description: typeof it?.description === 'string' ? it.description : '',
      tags: Array.isArray(it?.tags) ? it.tags : [],
    }));
  }, [items]);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(safeItems.map((item) => item.category))).sort();
    return ['All', ...cats];
  }, [safeItems]);

  const filteredItems = useMemo(() => {
    const q = searchTerm.toLowerCase();
    return safeItems.filter((item) => {
      const title = item.title.toLowerCase();
      const desc = item.description.toLowerCase();
      const matchesSearch = title.includes(q) || desc.includes(q);
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, safeItems]);

  const shownItems = filteredItems.slice(0, visibleCount);

  const tAll = translate({ id: 'searchableItemList.all', message: 'All' });
  const tUncategorized = translate({
    id: 'searchableItemList.uncategorized',
    message: 'Uncategorized',
  });
  const renderCategoryLabel = (cat) => {
    if (cat === 'All') return tAll;
    if (cat === 'Uncategorized') return tUncategorized;
    return cat;
  };

  return (
    <div className={styles.listContainer}>
      <div className={styles.filterGroup}>
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedCategory(category);
              setVisibleCount(6);
            }}
            className={styles.filterButton}
            aria-pressed={selectedCategory === category}
          >
            {renderCategoryLabel(category)}
          </button>
        ))}
      </div>

      <input
        type="text"
        placeholder={translate({
          id: 'searchableItemList.searchPlaceholder',
          message: 'Search...',
        })}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchField}
      />

      <div className={styles.entryList}>
        {shownItems.map((item, index) => {
          const desc = item.description;
          const isExpanded = !!expandedDescriptions[index];
          const isLong = desc.length > 275;

          return (
            <div key={index} className={styles.entryCard}>
              <div className={styles.entryHeader}>
                <h3 className={styles.entryTitle}>{item.title}</h3>
                {item.tags?.length > 0 && (
                  <div className={styles.badgeGroup}>
                    {item.tags.map((tag, i) => (
                      <span key={i} className={styles.badge}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <p className={styles.entryDescription}>
                {isExpanded || !isLong ? desc : desc.slice(0, 275) + '...'}
              </p>

              {isLong && (
                <button
                  className={styles.entryToggle}
                  onClick={() => toggleDescription(index)}
                >
                  {isExpanded
                    ? translate({ id: 'searchableItemList.showLess', message: 'Show less' })
                    : translate({ id: 'searchableItemList.showMore', message: 'Show more' })}
                </button>
              )}

              {item.link && (
                <Button
                  label={translate({
                    id: 'searchableItemList.openWebsite',
                    message: 'Open Website',
                  })}
                  link={item.link}
                  variant="primary"
                  size="sm"
                  block
                />
              )}
            </div>
          );
        })}
      </div>

      <div className={styles.entryCounter}>
        <Translate
          id="searchableItemList.counter"
          values={{ shown: shownItems.length, total: filteredItems.length }}
        >
          {'{shown} out of {total} entries are displayed'}
        </Translate>
      </div>

      {filteredItems.length > visibleCount && (
        <button
          className="button button--primary button--block"
          onClick={() => setVisibleCount((v) => v + 3)}
        >
          <Translate id="searchableItemList.showMoreBtn">Show more</Translate>
        </button>
      )}
    </div>
  );
};

export default SearchableItemList;

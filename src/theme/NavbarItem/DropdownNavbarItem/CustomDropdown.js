import React, { useState, useRef, useEffect } from 'react';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import { useLocation } from '@docusaurus/router';
import { icons } from './dropdowns';
import styles from './CustomDropdown.module.css';

// ---------------------------------------------------------------------------
// Helper: translate using Docusaurus i18n (code.json)
// Translation-ID: dropdown.<dropdownKey>.<key>
// ---------------------------------------------------------------------------

function t(dropdownKey, key, defaultMessage) {
  return translate({
    id: `dropdown.${dropdownKey}.${key}`,
    message: defaultMessage,
  });
}

// ---------------------------------------------------------------------------
// Desktop: single card
// ---------------------------------------------------------------------------

function Card({ to, href, icon, label, badge, onClick }) {
  const linkProps = href
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : { to };
  return (
    <Link {...linkProps} className={styles.card} onClick={onClick}>
      {icon && <span className={styles.cardIcon}>{icons[icon]}</span>}
      <span className={styles.cardName}>{label}</span>
      {badge && <span className={styles.badge}>{badge}</span>}
    </Link>
  );
}

// ---------------------------------------------------------------------------
// Mobile: section (title + links)
// ---------------------------------------------------------------------------

function MobileSection({ title, items, dropdownKey, closeSidebar }) {
  return (
    <>
      {title && (
        <li className="menu__list-item">
          <span className={`sidebar-title ${styles.mobileSectionLabel}`}>
            {title}
          </span>
        </li>
      )}
      {items.map((item) => {
        const linkProps = item.href
          ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' }
          : { to: item.to };
        return (
          <li className="menu__list-item" key={item.to || item.href}>
            <Link className="menu__link" {...linkProps} onClick={closeSidebar}>
              {t(dropdownKey, item.labelKey, item.label)}
            </Link>
          </li>
        );
      })}
    </>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function CustomDropdown({ config, configKey, label, mobile, onClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);
  const location = useLocation();

  const isActive = config.activePathMatch
    ? location.pathname.includes(config.activePathMatch)
    : false;

  // Close desktop panel on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close desktop panel on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };
  const closeDropdown = () => setIsOpen(false);

  // -------------------------------------------------------------------
  // Mobile
  // -------------------------------------------------------------------
  if (mobile) {
    const closeSidebar = onClick || (() => {});

    // Build mobile sections, merging untitled columns into the previous titled one
    const mobileSections = [];
    if (config.topRow) {
      mobileSections.push({
        id: `topRow-${config.topRow.titleKey}`,
        titleKey: config.topRow.titleKey,
        title: config.topRow.title,
        items: [...config.topRow.items],
      });
    }
    if (config.columns) {
      // If columnsHeader exists, create one section for all column items
      if (config.columnsHeader) {
        const allItems = config.columns.flatMap((col) => col.items);
        mobileSections.push({
          id: `columns-${config.columnsHeader.titleKey}`,
          titleKey: config.columnsHeader.titleKey,
          title: config.columnsHeader.title,
          items: allItems,
        });
      } else {
        config.columns.forEach((col, idx) => {
          if (col.titleKey) {
            mobileSections.push({
              id: `col-${idx}-${col.titleKey}`,
              titleKey: col.titleKey,
              title: col.title,
              items: [...col.items],
            });
          } else {
            // Merge items into the last titled section
            const last = mobileSections[mobileSections.length - 1];
            if (last) {
              last.items.push(...col.items);
            }
          }
        });
      }
    }
    if (config.bottomRow?.items?.length > 0) {
      mobileSections.push({
        id: 'bottomRow',
        titleKey: null,
        title: null,
        items: config.bottomRow.items,
      });
    }

    return (
      <li
        className={`menu__list-item ${
          !mobileExpanded ? 'menu__list-item--collapsed' : ''
        }`}
      >
        <div className="menu__list-item-collapsible">
          <Link
            {...(config.mainLink?.startsWith('http') ? { href: config.mainLink, target: '_blank', rel: 'noopener noreferrer' } : { to: config.mainLink })}
            className={`menu__link ${isActive ? 'menu__link--active' : ''}`}
            onClick={closeSidebar}
          >
            {label}
          </Link>
          <button
            className="clean-btn menu__caret"
            type="button"
            aria-label={`Toggle ${label} menu`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setMobileExpanded((prev) => !prev);
            }}
          />
        </div>

        <ul
          className="menu__list"
          style={{ display: mobileExpanded ? undefined : 'none' }}
        >
          {mobileSections.map((section) => (
            <MobileSection
              key={section.id}
              title={section.titleKey ? t(configKey, section.titleKey, section.title) : null}
              items={section.items}
              dropdownKey={configKey}
              closeSidebar={closeSidebar}
            />
          ))}
        </ul>
      </li>
    );
  }

  // -------------------------------------------------------------------
  // Desktop
  // -------------------------------------------------------------------
  return (
    <div
      ref={containerRef}
      className={styles.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger */}
      <Link
        {...(config.mainLink?.startsWith('http') ? { href: config.mainLink, target: '_blank', rel: 'noopener noreferrer' } : { to: config.mainLink })}
        className={`navbar__item navbar__link ${styles.trigger} ${
          isActive ? 'navbar__link--active' : ''
        }`}
      >
        {label}
        <svg
          className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`}
          viewBox="0 0 12 12"
          width="12"
          height="12"
        >
          <path
            d="M2.5 4.5L6 8l3.5-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>

      {/* Panel */}
      <div className={`${styles.panel} ${isOpen ? styles.panelOpen : ''}`}>
        <div className={styles.panelInner}>
        {/* Top row */}
        {config.topRow && (
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              {config.topRow.icon && (
                <span className={styles.sectionIcon}>
                  {icons[config.topRow.icon]}
                </span>
              )}
              <span className={styles.sectionTitle}>
                {t(configKey, config.topRow.titleKey, config.topRow.title)}
              </span>
            </div>
            {config.topRow.descriptionKey && (
              <span className={styles.sectionDescription}>
                {t(configKey, config.topRow.descriptionKey, config.topRow.description)}
              </span>
            )}
            <div className={styles.gridAuto}>
              {config.topRow.items.map((item) => (
                <Card
                  key={item.to || item.href}
                  to={item.to}
                  href={item.href}
                  icon={item.icon}
                  label={t(configKey, item.labelKey, item.label)}
                  badge={item.badge && (item.badgeKey ? t(configKey, item.badgeKey, item.badge) : item.badge)}
                  onClick={closeDropdown}
                />
              ))}
            </div>
          </div>
        )}

        {/* Columns */}
        {config.columns?.length > 0 && (
          <div className={styles.section}>
            {/* Optional full-width header above columns */}
            {config.columnsHeader && (
              <>
                <div className={styles.sectionHeader}>
                  {config.columnsHeader.icon && (
                    <span className={styles.sectionIcon}>
                      {icons[config.columnsHeader.icon]}
                    </span>
                  )}
                  <span className={styles.sectionTitle}>
                    {t(configKey, config.columnsHeader.titleKey, config.columnsHeader.title)}
                  </span>
                </div>
                {config.columnsHeader.descriptionKey && (
                  <span className={styles.sectionDescription}>
                    {t(configKey, config.columnsHeader.descriptionKey, config.columnsHeader.description)}
                  </span>
                )}
              </>
            )}
            <div
              className={styles.columns}
              style={{
                gridTemplateColumns: `repeat(${config.columns.length}, 1fr)`,
              }}
            >
              {config.columns.map((col, idx) => (
                <div className={config.columnsHeader ? styles.columnPlain : styles.section} key={col.titleKey || idx}>
                  {!config.columnsHeader && (
                    <div className={styles.sectionHeaderArea}>
                      {col.titleKey && (
                        <>
                          <div className={styles.sectionHeader}>
                            {col.icon && (
                              <span className={styles.sectionIcon}>
                                {icons[col.icon]}
                              </span>
                            )}
                            <span className={styles.sectionTitle}>
                              {t(configKey, col.titleKey, col.title)}
                            </span>
                          </div>
                          {col.descriptionKey && (
                            <span className={styles.sectionDescription}>
                              {t(configKey, col.descriptionKey, col.description)}
                            </span>
                          )}
                        </>
                      )}
                    </div>
                  )}
                  <div className={styles.gridOne}>
                    {col.items.map((item) => (
                      <Card
                        key={item.to || item.href}
                        to={item.to}
                        href={item.href}
                        icon={item.icon}
                        label={t(configKey, item.labelKey, item.label)}
                        badge={item.badge && (item.badgeKey ? t(configKey, item.badgeKey, item.badge) : item.badge)}
                        onClick={closeDropdown}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom row */}
        {config.bottomRow?.items?.length > 0 && (
          <div className={styles.bottomRow}>
              {config.bottomRow.items.map((item) => (
                <Card
                  key={item.to || item.href}
                  to={item.to}
                  href={item.href}
                  icon={item.icon}
                  label={t(configKey, item.labelKey, item.label)}
                  badge={item.badge && (item.badgeKey ? t(configKey, item.badgeKey, item.badge) : item.badge)}
                  onClick={closeDropdown}
                />
              ))}
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

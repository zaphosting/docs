import React, { useState, useRef, useEffect } from 'react';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocation } from '@docusaurus/router';
import { useAlternatePageUtils } from '@docusaurus/theme-common/internal';
import styles from './LocaleDropdown.module.css';

// ---------------------------------------------------------------------------
// Locale metadata
// ---------------------------------------------------------------------------

const localeData = {
  en: { name: 'English', flag: '/img/flags/en.svg' },
  de: { name: 'Deutsch', flag: '/img/flags/de.svg' },
  es: { name: 'Español', flag: '/img/flags/es.svg' },
  fr: { name: 'Français', flag: '/img/flags/fr.svg' },
  ar: { name: 'العربية', flag: '/img/flags/ar.svg' },
  pt: { name: 'Português', flag: '/img/flags/pt.svg' },
  th: { name: 'ไทย', flag: '/img/flags/th.svg' },
  pl: { name: 'Polski', flag: '/img/flags/pl.svg' },
  ja: { name: '日本語', flag: '/img/flags/ja.svg' },
  sv: { name: 'Svenska', flag: '/img/flags/sv.svg' },
  it: { name: 'Italiano', flag: '/img/flags/it.svg' },
  nl: { name: 'Nederlands', flag: '/img/flags/nl.svg' },
  zh: { name: '中文', flag: '/img/flags/zh.svg' },
};

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function LocaleDropdownNavbarItemWrapper({ mobile, ...props }) {
  const {
    i18n: { currentLocale, locales },
    siteConfig: { baseUrl },
  } = useDocusaurusContext();

  const alternatePageUtils = useAlternatePageUtils();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);

  // Build locale items
  const localeItems = locales.map((locale) => {
    const data = localeData[locale] || { name: locale, flag: '' };
    const to =
      locale === currentLocale
        ? `${location.pathname}${location.search}${location.hash}`
        : alternatePageUtils.createUrl({ locale, fullyQualified: false });
    return {
      locale,
      name: data.name,
      flag: baseUrl.replace(/\/$/, '') + data.flag,
      to,
      isActive: locale === currentLocale,
    };
  });

  const currentData = localeData[currentLocale] || {
    name: currentLocale,
    flag: '',
  };

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close on Escape
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
    const closeSidebar = props.onClick || (() => {});

    return (
      <li
        className={`menu__list-item ${
          !mobileExpanded ? 'menu__list-item--collapsed' : ''
        }`}
      >
        <div className="menu__list-item-collapsible">
          <button
            type="button"
            className="menu__link"
            style={{ display: 'flex', alignItems: 'center', gap: 6, border: 'none', background: 'none', cursor: 'pointer', width: '100%', textAlign: 'left' }}
            onClick={(e) => {
              e.preventDefault();
              setMobileExpanded((prev) => !prev);
            }}
          >
            <img
              src={baseUrl.replace(/\/$/, '') + currentData.flag}
              alt=""
              aria-hidden="true"
              className={styles.flagSmall}
            />
            {currentData.name}
          </button>
          <button
            className="clean-btn menu__caret"
            type="button"
            aria-label="Toggle language menu"
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
          {localeItems.map((item) => (
            <li className="menu__list-item" key={item.locale}>
              <Link
                className={`menu__link ${item.isActive ? 'menu__link--active' : ''}`}
                to={item.to}
                onClick={closeSidebar}
                style={{ display: 'flex', alignItems: 'center', gap: 8 }}
              >
                <img
                  src={item.flag}
                  alt=""
                  aria-hidden="true"
                  className={styles.flagSmall}
                />
                {item.name}
              </Link>
            </li>
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
      <button
        type="button"
        className={`navbar__item navbar__link ${styles.trigger}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <img
          src={baseUrl.replace(/\/$/, '') + currentData.flag}
          alt=""
          aria-hidden="true"
          className={styles.flagTrigger}
        />
        {currentData.name}
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
      </button>

      {/* Panel */}
      <div className={`${styles.panel} ${isOpen ? styles.panelOpen : ''}`}>
        <div className={styles.panelInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </span>
            <span className={styles.sectionTitle}>
              {translate({ id: 'localeDropdown.title', message: 'Language' })}
            </span>
          </div>
          <span className={styles.sectionDescription}>
            {translate({ id: 'localeDropdown.description', message: 'Select your preferred language.' })}
          </span>
          <div className={styles.grid}>
            {localeItems.map((item) => (
              <a
                key={item.locale}
                href={item.to}
                className={`${styles.card} ${item.isActive ? styles.cardActive : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  closeDropdown();
                  window.location.href = item.to;
                }}
              >
                <img
                  src={item.flag}
                  alt=""
                  aria-hidden="true"
                  className={styles.flag}
                />
                <span className={styles.cardName}>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

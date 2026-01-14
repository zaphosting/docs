import React, { useState, useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { useLocation } from '@docusaurus/router';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import styles from './styles.module.css';

function getPopupId(popup, index) {
  return popup.id || popup.label || `${popup.title.toLowerCase().replace(/\s+/g, '-')}${index !== undefined ? `-${index}` : ''}`;
}

function getDocIdFromPath(pathname) {
  const match = pathname.match(/\/docs\/([^\/]+)/);
  return match ? match[1] : null;
}

function matchesDocumentId(currentDocId, documentIds) {
  if (!currentDocId || !documentIds || documentIds.length === 0) {
    return false;
  }
  
  return documentIds.some(pattern => {
    // Wildcard support: "hytale-*" matches anything starting with "hytale-"
    if (pattern.endsWith('*')) {
      const prefix = pattern.slice(0, -1);
      return currentDocId.startsWith(prefix);
    }
    // Exact match
    return currentDocId === pattern;
  });
}

function getLocalizedPopup(popup, locale, defaultLocale = 'en') {
  // Get localized content from the popup's locales object
  const localeData = popup.locales?.[locale] || popup.locales?.[defaultLocale] || popup.locales?.en;
  
  if (!localeData) {
    // Fallback to old structure if locales object doesn't exist
    if (process.env.NODE_ENV === 'development') {
      console.warn('PopupNotification - No locales object found, using legacy structure');
    }
    return popup;
  }
  
  // Return popup with localized fields
  return {
    ...popup,
    title: localeData.title,
    description: localeData.description,
    buttonLabel: localeData.buttonLabel,
    buttonLink: localeData.buttonLink
  };
}

async function fetchPopupConfig(baseUrl) {
  const cleanBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  const cacheBuster = `?v=${Date.now()}`;
  const url = `${cleanBaseUrl}/data/popup-notification.json${cacheBuster}`;
  
  const res = await fetch(url, {
    cache: 'no-store',
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache'
    }
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch popup config');
  }
  
  return await res.json();
}

function isPopupDismissed(dismissedKey) {
  if (typeof window === 'undefined' || !window.localStorage) {
    return false;
  }
  
  const dismissedValue = localStorage.getItem(dismissedKey);
  if (!dismissedValue) {
    return false;
  }
  
  try {
    const dismissedTimestamp = parseInt(dismissedValue, 10);
    if (isNaN(dismissedTimestamp)) {
      // Ungültiger Wert im LocalStorage, bereinigen
      localStorage.removeItem(dismissedKey);
      return false;
    }
    
    const now = Date.now();
    const twentyFourHours = 24 * 60 * 60 * 1000;
    
    if (now - dismissedTimestamp < twentyFourHours) {
      return true;
    } else {
      localStorage.removeItem(dismissedKey);
      return false;
    }
  } catch (e) {
    return false;
  }
}

function parseDate(dateStr) {
  if (dateStr.includes('T')) {
    return new Date(dateStr);
  }
  
  const dateParts = dateStr.split('-');
  const year = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10) - 1;
  const day = parseInt(dateParts[2], 10);
  
  const date = new Date(Date.UTC(year, month, day, 0, 0, 0, 0));
  date.setUTCHours(date.getUTCHours() - 1);
  return date;
}

function isWithinDateRange(dateRange) {
  if (!dateRange) {
    return true;
  }

  const now = new Date();

  if (dateRange.start) {
    const startDate = parseDate(dateRange.start);
    
    if (now < startDate) {
      if (process.env.NODE_ENV === 'development') {
        console.log('PopupNotification - Before start date:', {
          now: now.toISOString(),
          startDate: startDate.toISOString(),
          startDateStr: dateRange.start
        });
      }
      return false;
    }
  }

  if (dateRange.end) {
    let endDate = parseDate(dateRange.end);
    
    if (!dateRange.end.includes('T')) {
      endDate = new Date(Date.UTC(
        endDate.getUTCFullYear(),
        endDate.getUTCMonth(),
        endDate.getUTCDate(),
        22, 59, 59, 999
      ));
    }
    
    if (now > endDate) {
      if (process.env.NODE_ENV === 'development') {
        console.log('PopupNotification - After end date:', {
          now: now.toISOString(),
          endDate: endDate.toISOString(),
          endDateStr: dateRange.end
        });
      }
      return false;
    }
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('PopupNotification - Date range check passed:', {
      now: now.toISOString(),
      dateRange: dateRange
    });
  }

  return true;
}

function formatDescriptionWithHTML(description) {
  const parts = [];
  const codeRegex = /<code>(.*?)<\/code>/gi;
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = codeRegex.exec(description)) !== null) {
    if (match.index > lastIndex) {
      parts.push(description.substring(lastIndex, match.index));
    }

    parts.push(
      <code key={key++} className={styles.codeWord}>
        {match[1]}
      </code>
    );

    lastIndex = codeRegex.lastIndex;
  }

  if (lastIndex < description.length) {
    parts.push(description.substring(lastIndex));
  }

  if (parts.length === 0) {
    return description;
  }

  return <>{parts}</>;
}

function PopupNotificationWithDoc({ config }) {
  const { siteConfig } = useDocusaurusContext();
  const isBrowser = useIsBrowser();
  const location = useLocation();
  
  if (!isBrowser) {
    return <PopupNotificationBase config={config} frontMatter={null} docId={null} />;
  }
  
  let docData = null;
  try {
    docData = useDoc();
  } catch (error) {
    // useDoc() throws an error if not on a doc page
    if (process.env.NODE_ENV === 'development') {
      console.log('PopupNotification - useDoc() failed:', error.message);
    }
  }
  
  const frontMatter = docData?.frontMatter || null;
  const docId = docData?.metadata?.id || null;
  
  if (process.env.NODE_ENV === 'development') {
    console.log('PopupNotification - docId:', docId, 'pathname:', location.pathname);
  }
  
  return <PopupNotificationBase config={config} frontMatter={frontMatter} docId={docId} />;
}

function PopupNotificationBase({ config, frontMatter, docId: providedDocId }) {
  const { siteConfig, i18n } = useDocusaurusContext();
  const isBrowser = useIsBrowser();
  const location = useLocation();
  const [popupConfigs, setPopupConfigs] = useState(config ? [config] : []);
  const [visiblePopups, setVisiblePopups] = useState(new Set());
  const [dismissedPopups, setDismissedPopups] = useState(new Set());

  const docId = providedDocId || getDocIdFromPath(location.pathname);
  const currentLocale = i18n.currentLocale;

  useEffect(() => {
    if (!isBrowser) return;

    setVisiblePopups(new Set());
    setDismissedPopups(new Set());

    const docPopupConfig = frontMatter?.popup;
    
    let activeConfigs = [];
    
    if (config) {
      activeConfigs = [config];
    } else if (docPopupConfig && docPopupConfig.enabled) {
      activeConfigs = [docPopupConfig];
    } else {
      const baseUrl = siteConfig.baseUrl || '/';
      const defaultLocale = siteConfig.i18n?.defaultLocale || 'en';
      
      fetchPopupConfig(baseUrl)
        .then((data) => {
          const currentDocId = docId || getDocIdFromPath(location.pathname);
          const popups = Array.isArray(data) ? data : [data];
          
          if (process.env.NODE_ENV === 'development') {
            console.log('PopupNotification - Config loaded:', popups);
            console.log('PopupNotification - Current docId:', currentDocId);
            console.log('PopupNotification - Current locale:', currentLocale);
            console.log('PopupNotification - Pathname:', location.pathname);
          }
          
          const matchingPopups = [];
          
          for (let i = 0; i < popups.length; i++) {
            const popup = popups[i];
            if (!popup.enabled) {
              continue;
            }
            
            if (popup.documentIds && popup.documentIds.length > 0) {
              if (!matchesDocumentId(currentDocId, popup.documentIds)) {
                continue;
              }
            } else {
              continue;
            }
            
            if (!isWithinDateRange(popup.dateRange)) {
              continue;
            }
            
            // Localize the popup before adding it
            const localizedPopup = getLocalizedPopup(popup, currentLocale, defaultLocale);
            matchingPopups.push(localizedPopup);
          }
          
          if (matchingPopups.length === 0) {
            if (process.env.NODE_ENV === 'development') {
              console.log('PopupNotification - No matching popups found for current page');
            }
            setPopupConfigs([]);
            return;
          }
          
          if (process.env.NODE_ENV === 'development') {
            console.log('PopupNotification - Matching popups found:', matchingPopups.length, matchingPopups);
          }
          
          setPopupConfigs(matchingPopups);
          
          const newVisiblePopups = new Set();
          const newDismissedPopups = new Set();
          
          matchingPopups.forEach((popup, index) => {
            const popupId = getPopupId(popup, index);
            const dismissedKey = `popup-notification-dismissed-${popupId}`;
            
            const wasDismissed = isPopupDismissed(dismissedKey);
            
            if (wasDismissed) {
              newDismissedPopups.add(popupId);
            } else {
              setTimeout(() => {
                setVisiblePopups(prev => new Set(prev).add(popupId));
              }, 1000 + (index * 500));
            }
          });
          
          setDismissedPopups(newDismissedPopups);
        })
        .catch((err) => {
          console.error('Failed to load popup config:', err);
        });
      return;
    }
    
    if (activeConfigs.length > 0) {
      const matchingConfigs = [];
      const defaultLocale = siteConfig.i18n?.defaultLocale || 'en';
      
      for (let i = 0; i < activeConfigs.length; i++) {
        const activeConfig = activeConfigs[i];
        if (activeConfig.documentIds && activeConfig.documentIds.length > 0) {
          if (!matchesDocumentId(docId, activeConfig.documentIds)) {
            continue;
          }
        } else {
          continue;
        }
        
        if (!isWithinDateRange(activeConfig.dateRange)) {
          continue;
        }
        
        // Localize the config before adding it
        const localizedConfig = getLocalizedPopup(activeConfig, currentLocale, defaultLocale);
        matchingConfigs.push(localizedConfig);
      }
      
      if (matchingConfigs.length === 0) {
        setPopupConfigs([]);
        return;
      }
      
      setPopupConfigs(matchingConfigs);
      
      const newVisiblePopups = new Set();
      const newDismissedPopups = new Set();
      
      matchingConfigs.forEach((popup, index) => {
        const popupId = getPopupId(popup, index);
        const dismissedKey = `popup-notification-dismissed-${popupId}`;
        
        const wasDismissed = isPopupDismissed(dismissedKey);
        
        if (wasDismissed) {
          newDismissedPopups.add(popupId);
        } else {
          setTimeout(() => {
            setVisiblePopups(prev => new Set(prev).add(popupId));
          }, 1000 + (index * 500));
        }
      });
      
      setDismissedPopups(newDismissedPopups);
    }
  }, [config, isBrowser, siteConfig.baseUrl, frontMatter, location.pathname, docId, currentLocale]);

  useEffect(() => {
    if (!isBrowser) return;
    if (config || frontMatter?.popup) return;

    const pollInterval = setInterval(() => {
      const baseUrl = siteConfig.baseUrl || '/';
      const defaultLocale = siteConfig.i18n?.defaultLocale || 'en';
      
      fetchPopupConfig(baseUrl)
        .then((data) => {
          const popups = Array.isArray(data) ? data : [data];
          const currentDocId = docId || getDocIdFromPath(location.pathname);
          
          const matchingPopups = [];
          for (let i = 0; i < popups.length; i++) {
            const popup = popups[i];
            if (!popup.enabled) continue;
            if (popup.documentIds && popup.documentIds.length > 0) {
              if (!matchesDocumentId(currentDocId, popup.documentIds)) continue;
            } else {
              continue;
            }
            if (!isWithinDateRange(popup.dateRange)) continue;
            
            // Localize the popup before adding it
            const localizedPopup = getLocalizedPopup(popup, currentLocale, defaultLocale);
            matchingPopups.push(localizedPopup);
          }
          
          const currentConfigsStr = JSON.stringify(popupConfigs);
          const newConfigsStr = JSON.stringify(matchingPopups);
          if (currentConfigsStr !== newConfigsStr) {
            if (process.env.NODE_ENV === 'development') {
              console.log('PopupNotification - Config updated, reloading popups');
            }
            setVisiblePopups(new Set());
            setDismissedPopups(new Set());
            setPopupConfigs(matchingPopups);
            
            const newVisiblePopups = new Set();
            const newDismissedPopups = new Set();
            
            matchingPopups.forEach((popup, index) => {
              const popupId = getPopupId(popup, index);
              const dismissedKey = `popup-notification-dismissed-${popupId}`;
              const wasDismissed = isPopupDismissed(dismissedKey);
              
              if (wasDismissed) {
                newDismissedPopups.add(popupId);
              } else {
                setTimeout(() => {
                  setVisiblePopups(prev => new Set(prev).add(popupId));
                }, 500 + (index * 500));
              }
            });
            
            setDismissedPopups(newDismissedPopups);
          }
        })
        .catch((err) => {
        });
    }, 3000);

    return () => {
      clearInterval(pollInterval);
    };
  }, [isBrowser, siteConfig.baseUrl, location.pathname, docId, config, frontMatter, popupConfigs, currentLocale]);

  const handleDismiss = (popup, popupId) => {
    setVisiblePopups(prev => {
      const next = new Set(prev);
      next.delete(popupId);
      return next;
    });
    setDismissedPopups(prev => new Set(prev).add(popupId));
    if (isBrowser) {
      const dismissedKey = `popup-notification-dismissed-${popupId}`;
      const timestamp = Date.now();
      localStorage.setItem(dismissedKey, timestamp.toString());
    }
  };

  const handleButtonClick = (buttonLink) => {
    if (buttonLink) {
      window.open(buttonLink, '_blank', 'noopener,noreferrer');
    }
  };

  const visiblePopupConfigs = popupConfigs.filter((popup, index) => {
    const popupId = getPopupId(popup, index);
    return popup.enabled && 
           visiblePopups.has(popupId) && 
           !dismissedPopups.has(popupId);
  });

  if (visiblePopupConfigs.length === 0) {
    return null;
  }

  return (
    <div className={styles.popupsWrapper}>
      {visiblePopupConfigs.map((popup, index) => {
        const popupId = getPopupId(popup, index);
        return (
          <div 
            key={popupId} 
            className={styles.popupContainer}
          >
            <div className={styles.popupBox}>
              <button
                className={styles.closeButton}
                onClick={() => handleDismiss(popup, popupId)}
                aria-label="Close popup"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={styles.closeIcon}
                >
                  <path
                    d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
                  />
                </svg>
              </button>
              <h3 className={styles.popupTitle}>{popup.title}</h3>
              {popup.imageUrl && (
                <img 
                  src={popup.imageUrl} 
                  alt={popup.title}
                  className={styles.popupImage}
                />
              )}
              <p className={styles.popupDescription}>
                {formatDescriptionWithHTML(popup.description)}
              </p>
              <button
                className={styles.popupButton}
                onClick={() => handleButtonClick(popup.buttonLink)}
                aria-label={popup.buttonLabel}
              >
                <span className={styles.buttonText}>{popup.buttonLabel}</span>
                {popup.showExternalLinkIcon !== false && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={styles.externalLinkIcon}
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 100 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

class PopupErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    if (process.env.NODE_ENV === 'development') {
      console.log('PopupNotification - Error caught:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default function PopupNotification({ config }) {
  const location = useLocation();
  const isBrowser = useIsBrowser();
  
  if (!isBrowser) {
    return <PopupNotificationBase config={config} frontMatter={null} docId={null} />;
  }
  
  const isDocPage = location.pathname.includes('/docs/') && 
                    !location.pathname.endsWith('/docs/') &&
                    location.pathname !== '/docs' &&
                    location.pathname !== '/docs/welcome';
  
  if (isDocPage) {
    return (
      <PopupErrorBoundary fallback={<PopupNotificationBase config={config} />}>
        <PopupNotificationWithDoc config={config} />
      </PopupErrorBoundary>
    );
  }
  
  return <PopupNotificationBase config={config} />;
}

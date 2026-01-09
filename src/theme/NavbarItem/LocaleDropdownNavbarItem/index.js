import React, { useEffect } from 'react';
import LocaleDropdownNavbarItem from '@theme-original/NavbarItem/LocaleDropdownNavbarItem';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useIsBrowser from '@docusaurus/useIsBrowser';

const flagPaths = {
  en: '/img/flags/en.svg',
  de: '/img/flags/de.svg',
  es: '/img/flags/es.svg',
  fr: '/img/flags/fr.svg',
  ar: '/img/flags/ar.svg',
  pt: '/img/flags/pt.svg',
  th: '/img/flags/th.svg',
  pl: '/img/flags/pl.svg',
  ja: '/img/flags/ja.svg',
  sv: '/img/flags/sv.svg',
  it: '/img/flags/it.svg',
  nl: '/img/flags/nl.svg',
  zh: '/img/flags/zh.svg',
};

export default function LocaleDropdownNavbarItemWrapper(props) {
  const { siteConfig } = useDocusaurusContext();
  const isBrowser = useIsBrowser();
  const baseUrl = siteConfig.baseUrl || '/';

  useEffect(() => {
    if (!isBrowser || typeof document === 'undefined') {
      return;
    }

    const addFlags = () => {
      try {
        // Globe-Icons mit iconLanguage_nlXk Klasse ausblenden (Desktop + Mobile)
        document.querySelectorAll('.iconLanguage_nlXk').forEach((icon) => {
          icon.style.display = 'none';
        });

        // Desktop: .navbar__item .dropdown__menu
        // Mobile: Nur die Sprachauswahl-Links (haben locale im href wie /de/, /fr/, etc.)
        const dropdownMenus = document.querySelectorAll('.navbar__item .dropdown__menu');
        if (dropdownMenus.length === 0) {
          return;
        }

        dropdownMenus.forEach((dropdownMenu) => {

        // Globe-Icon verstecken
        const globeIcons = dropdownMenu.querySelectorAll('svg[viewBox="0 0 24 24"]');
        globeIcons.forEach((icon) => {
          if (!icon.querySelector('img[src*="/flags/"]')) {
            icon.style.display = 'none';
          }
        });

        // Links im Dropdown-Menü bearbeiten
        const dropdownLinks = dropdownMenu.querySelectorAll('a[href*="/"]');
        
        dropdownLinks.forEach((link) => {
          if (link.querySelector('img[src*="/flags/"]')) {
            return;
          }

          const href = link.getAttribute('href') || '';
          let locale = null;
          const match = href.match(/\/([a-z]{2})(?:\/|$)/);
          
          if (match) {
            locale = match[1];
          } else {
            // Fallback für Standard-Sprache (en)
            if (link.classList.contains('dropdown__link--active') || 
                (href.includes('/docs/') && !href.match(/\/(de|es|fr|ar|pt|th|pl|ja|sv|it|nl|zh)\//))) {
              locale = 'en';
            } else {
              return;
            }
          }
          
          if (!flagPaths[locale]) {
            return;
          }

          const flagPath = baseUrl.replace(/\/$/, '') + flagPaths[locale];
          const flagImg = document.createElement('img');
          flagImg.src = flagPath;
          flagImg.alt = '';
          flagImg.setAttribute('aria-hidden', 'true');
          flagImg.style.cssText = `width: 20px; height: 15px; margin-right: 6px; display: inline-block; vertical-align: middle; object-fit: cover; border-radius: 2px; pointer-events: none;`;

          let firstElement = link.firstChild;
          while (firstElement && firstElement.nodeType === Node.TEXT_NODE) {
            firstElement = firstElement.nextSibling;
          }
          
          if (firstElement) {
            link.insertBefore(flagImg, firstElement);
          } else if (link.firstChild) {
            link.insertBefore(flagImg, link.firstChild);
          } else {
            link.appendChild(flagImg);
          }
        });

        }); // Ende dropdownMenus.forEach

        // Mobile: Locale-Links in der Sidebar behandeln
        const mobileSidebar = document.querySelector('.navbar-sidebar');
        if (mobileSidebar) {
          // Finde alle Links und filtere nach bekannten Sprachnamen
          const localeMap = {
            'English': 'en', 'Deutsch': 'de', 'Español': 'es', 'Français': 'fr',
            'العربية': 'ar', 'Português': 'pt', 'ไทย': 'th', 'Polski': 'pl',
            '日本語': 'ja', 'Svenska': 'sv', 'Italiano': 'it', 'Nederlands': 'nl',
          };
          const languageNames = Object.keys(localeMap);
          
          const allLinks = mobileSidebar.querySelectorAll('a[href], .menu__link');
          allLinks.forEach((link) => {
            if (link.querySelector('img[src*="/flags/"]')) return;
            
            const text = link.textContent?.trim() || '';
            const locale = localeMap[text];
            
            if (!locale || !flagPaths[locale]) return;
            
            const flagPath = baseUrl.replace(/\/$/, '') + flagPaths[locale];
            const flagImg = document.createElement('img');
            flagImg.src = flagPath;
            flagImg.alt = '';
            flagImg.setAttribute('aria-hidden', 'true');
            flagImg.style.cssText = `width: 20px; height: 15px; margin-right: 6px; margin-left: 0 !important; flex-shrink: 0; object-fit: cover; border-radius: 2px;`;
            
            // Globe-Icon verstecken falls vorhanden
            const globeIcon = link.querySelector('svg');
            if (globeIcon) globeIcon.style.display = 'none';
            
            // Link-Inhalt ersetzen mit Flagge + Text
            link.innerHTML = '';
            link.appendChild(flagImg);
            
            const textSpan = document.createElement('span');
            textSpan.textContent = text;
            link.appendChild(textSpan);
          });
        }

        // Aktiven Button behandeln (Desktop)
        const navbarItem = document.querySelector('.navbar__item.dropdown');
        if (navbarItem) {
          const activeButton = navbarItem.querySelector('.navbar__link:not(.dropdown__link)');
          if (activeButton && !activeButton.querySelector('img[src*="/flags/"]')) {
            const href = activeButton.getAttribute('href') || '';
            let locale = null;
            
            const match = href.match(/\/([a-z]{2})(?:\/|$)/);
            if (match) {
              locale = match[1];
            } else {
              const text = activeButton.textContent?.trim() || '';
              const localeMap = {
                'English': 'en',
                'Deutsch': 'de',
                'Español': 'es',
                'Français': 'fr',
                'العربية': 'ar',
                'Português': 'pt',
                'ไทย': 'th',
                'Polski': 'pl',
                '日本語': 'ja',
                'Svenska': 'sv',
                'Italiano': 'it',
                'Nederlands': 'nl',
              };
              locale = localeMap[text];
            }

            if (locale && flagPaths[locale]) {
              const flagPath = baseUrl.replace(/\/$/, '') + flagPaths[locale];
              const flagImg = document.createElement('img');
              flagImg.src = flagPath;
              flagImg.alt = '';
              flagImg.setAttribute('aria-hidden', 'true');
              flagImg.style.cssText = `width: 18px; height: 13.5px; margin-right: 4px; display: inline-block; vertical-align: middle; object-fit: cover; border-radius: 2px; pointer-events: none;`;

              const globeIcon = activeButton.querySelector('svg[viewBox="0 0 24 24"]');
              if (globeIcon && !globeIcon.querySelector('img[src*="/flags/"]')) {
                globeIcon.style.display = 'none';
              }

              let firstElement = activeButton.firstChild;
              while (firstElement && firstElement.nodeType === Node.TEXT_NODE) {
                firstElement = firstElement.nextSibling;
              }
              
              if (firstElement) {
                activeButton.insertBefore(flagImg, firstElement);
              } else if (activeButton.firstChild) {
                activeButton.insertBefore(flagImg, activeButton.firstChild);
              } else {
                activeButton.appendChild(flagImg);
              }
            }
          }
        }
      } catch (error) {
        // Fehler ignorieren
      }
    };

    const timeoutId = setTimeout(addFlags, 200);

    const observer = new MutationObserver(() => {
      setTimeout(addFlags, 50);
    });
    
    // Desktop navbar beobachten
    const navbar = document.querySelector('.navbar__items');
    if (navbar) {
      observer.observe(navbar, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['href', 'class'],
      });
    }

    // Mobile sidebar beobachten
    const observeBody = new MutationObserver(() => {
      const sidebar = document.querySelector('.navbar-sidebar');
      if (sidebar) {
        setTimeout(addFlags, 50);
      }
    });
    observeBody.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
      observeBody.disconnect();
    };
  }, [isBrowser, baseUrl]);

  return <LocaleDropdownNavbarItem {...props} />;
}

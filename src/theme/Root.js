import React, { useEffect } from 'react';
import mediumZoom from 'medium-zoom';
import { useLocation } from '@docusaurus/router';
import { VoucherProvider } from '../utilities/contexts/VoucherContext';
import PopupNotification from '../components/PopupNotification';

export default function Root({ children }) {
  const location = useLocation();

  useEffect(() => {
    const applyMediumZoom = () => {
      mediumZoom('article img:not(.card_xqyZ img)');
    };

    const intervalId = setInterval(() => {
      if (document.readyState === 'complete') {
        applyMediumZoom();
        clearInterval(intervalId);
      }
    }, 100); 

    window.addEventListener('docusaurus.onRouteDidUpdate', applyMediumZoom);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('docusaurus.onRouteDidUpdate', applyMediumZoom);
    };
  }, [location.pathname]);

  return (
    <VoucherProvider>
      {children}
      <PopupNotification />
    </VoucherProvider>
  );
}
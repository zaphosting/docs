import React from 'react';
import Footer from '@theme-original/Footer';
import Translate from '@docusaurus/Translate';

export default function FooterWrapper(props) {
  return (
    <>
      <Footer {...props} />
      // FooterWrapper.js
      <div className="zap-cookie-footer">
        <a
          href="#cookie-settings"
          data-cc="c-settings"
          className="zap-cookie-link"
        >
          <Translate id="footer.cookieSettings">Cookie settings</Translate>
        </a>
      </div>

    </>
  );
}

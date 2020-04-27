/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
        docUrl(doc, language) {
                const baseUrl = this.props.config.baseUrl;
                const docsUrl = this.props.config.docsUrl;
                const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <div>
          <h5>Rent a Server</h5>
            <a href="https://zap-hosting.com/en/rent-a-virtual-server/">Rent a VPS</a>
            <a href="https://zap-hosting.com/en/rent-a-root-server/">Rent a rootserver</a>
            <a href="https://zap-hosting.com/en/rent-a-gameserver/">Rent a gameserver</a>
            <a href="https://zap-hosting.com/en/rent-a-teamspeak-3-server/">Rent a TS3 server</a>
            <a href="https://zap-hosting.com/en/rent-a-discord-musicbot/">Rent a Discord Musicbot</a>
            <a href="https://zap-hosting.com/en/domain-check/">Rent a domain</a>
            <a href="https://zap-hosting.com/en/webhosting-rent-a-webspace/">Rent a webspace</a>
          </div>
          <div>
            <h5>Social</h5>
            <a href="https://twitter.com/zaphosting">Twitter</a>
            <a href="https://www.instagram.com/zaphosting/">Instagram</a>
            <a href="https://zap-hosting.com/en/blog/">Blog</a>
            <a href="https://zap-hosting.com/en/jobs/">Jobs</a>
            <a href="https://zap-hosting.com/en/gutscheinportal/">Voucher Codes</a>
            <a href="https://zap-hosting.com/en/partner/">Our partners</a>
            <a href="https://zap-hosting.com/en/affiliate/">Earn money</a>
          </div>
          <div>
            <h5>Support</h5>
            <a href="https://zap-hosting.com/en/changelog/">Changelog</a>
            <a href="https://zap-hosting.com/en/customer/support/">Ticketsupport</a>
            <a href="https://zap-hosting.com/en/interruption/">Interruptions</a>
            <a href="http://smoky.zap-hosting.com/smokeping/">Smokeping</a>
          </div>
          <div>
          <h5>Legal</h5>
          <a href="https://zap-hosting.com/en/terms/" target="new">Terms</a>
          <a href="https://zap-hosting.com/en/imprint/" target="new">Imprint</a>
          <a href="https://zap-hosting.com/en/privacy-policy/" target="new">Privacy Policy</a>
          <a href="https://zap-hosting.com/en/security/" target="new">Security</a>
          </div>
        </section>
        <a href={this.props.config.baseUrl} className="copyright-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
              />
            )}
          </a>
        <section className="copyright">All content is property of ZAP-Hosting GmbH & Co. KG</section>
      </footer>
    );
  }
}

module.exports = Footer;
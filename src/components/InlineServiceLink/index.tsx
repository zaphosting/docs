import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';
import map from '../../utilities/serviceMapper';
import { VoucherContext } from '../../utilities/contexts/VoucherContext';
import { useContext } from 'react';
import { useDoc } from '@docusaurus/plugin-content-docs/client';

export default function InlineServiceLink({ serviceKey }: { serviceKey?: string }): JSX.Element | null {
  const { frontMatter } = useDoc();
  const { loading, getVoucherForService } = useContext(VoucherContext);

  let resolvedKey = serviceKey;
  if (!resolvedKey && frontMatter.services && Array.isArray(frontMatter.services) && frontMatter.services.length > 0) {
    resolvedKey = frontMatter.services[0];
  }

  if (!resolvedKey) return null;

  const serviceInfo = map(resolvedKey);
  if (!serviceInfo) return null;

  const voucher = getVoucherForService ? getVoucherForService(resolvedKey) : null;
  const hasVoucher = voucher && voucher.value !== '0' && voucher.code;

  const orderUrl = hasVoucher
    ? `${serviceInfo.url}${serviceInfo.url.includes('?') ? '&' : '?'}voucher=${voucher.code}`
    : serviceInfo.url;

  const hasPrice = !!serviceInfo.price;

  if (loading) return null;

  return (
    <a
      href={orderUrl}
      className={styles.banner}
      target="_blank"
      rel="noopener noreferrer"
      title={translate({
        id: 'inlineservicelink.cta.title',
        message: 'Order now',
      })}
    >
      <div className={styles.infoSide}>
        <div className={styles.iconWrap}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={styles.iconSvg}>
            <path d="M1.75 1.002a.75.75 0 1 0 0 1.5h1.835l1.24 5.113A3.752 3.752 0 0 0 2 11.25c0 .414.336.75.75.75h10.5a.75.75 0 0 0 0-1.5H3.628A2.25 2.25 0 0 1 5.75 9h6.5a.75.75 0 0 0 .73-.578l.846-3.595a.75.75 0 0 0-.578-.906 44.118 44.118 0 0 0-7.996-.91l-.348-1.436a.75.75 0 0 0-.73-.573H1.75ZM5 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
          </svg>
        </div>
        <span className={styles.title}>{serviceInfo.title}</span>
        {hasPrice &&
          <span className={styles.priceBadge}>
            {serviceInfo.price}
          </span>
        }
      </div>

      <div className={styles.ctaLink}>
        <span className={styles.orderText}>
          <Translate id="inlineservicelink.cta">
            Order now
          </Translate>
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={styles.orderArrow}>
          <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
        </svg>
      </div>
    </a>
  );
}

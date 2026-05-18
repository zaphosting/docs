import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';
import map from '../../utilities/serviceMapper';
import VoucherButton from '../VoucherButton';
import { VoucherContext } from '../../utilities/contexts/VoucherContext';
import { useContext, useState, useRef, useEffect } from 'react';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function CouponPanel({ discountGroups, serviceInfoMap, marketingSite }) {
  // Build flat list: [{service, voucher}, ...]
  const allProducts = discountGroups.flatMap(group =>
    group.serviceKeys
      .map(key => serviceInfoMap[key])
      .filter(Boolean)
      .map(service => ({ service, voucher: group.voucher }))
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const selected = allProducts[selectedIndex] || allProducts[0];
  const hasMultiple = allProducts.length > 1;

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  if (!selected) return null;

  return (
    <>
      <span className={styles.couponLabel}>
        <Translate id="inlinevoucher.your-voucher">
          YOUR CODE
        </Translate>
      </span>
      <p className={styles.couponDescription}>
        <Translate id="inlinevoucher.coupon-description">
          Copy the code and apply it during checkout or use the order button below.
        </Translate>
      </p>

      {/* Product selector – only when multiple products are linked */}
      {hasMultiple && (
        <div className={styles.productSelect} ref={dropdownRef}>
          <button
            type="button"
            className={styles.selectTrigger}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span className={styles.triggerBadge}>
              {selected.voucher.value}{selected.voucher.type}
            </span>
            <span className={styles.triggerName}>{selected.service.title}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={styles.triggerArrow}>
              <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"/>
            </svg>
          </button>
          {dropdownOpen && (
            <div className={styles.selectMenu}>
              {allProducts.map((item, j) => (
                <button
                  key={j}
                  type="button"
                  className={`${styles.selectOption} ${j === selectedIndex ? styles.selectOptionActive : ''}`}
                  onClick={() => { setSelectedIndex(j); setDropdownOpen(false); }}
                >
                  <span className={styles.optionBadge}>
                    {item.voucher.value}{item.voucher.type}
                  </span>
                  <span className={styles.optionName}>{item.service.title}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      <div className={styles.comboAction}>
        <VoucherButton code={selected.voucher.code} small={true} />
        <a href={`${selected.service.url}${selected.service.url.includes('?') ? '&' : '?'}voucher=${selected.voucher.code}`}
           className={styles.comboOrder}
           target="_blank"
           rel="noopener noreferrer"
           title={translate({
             id: 'voucherbox.cta',
             message: 'Rent a server',
           })}
        >
          <span className={styles.comboOrderText}>
            <Translate id="inlinevoucher.cta">
              Order now
            </Translate>
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={styles.comboOrderIcon}>
            <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"/>
          </svg>
        </a>
      </div>

      <p className={styles.autoApplyNote}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={styles.autoApplyIcon}>
          <path fillRule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM9 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.75 8a.75.75 0 0 0 0 1.5h.75v1.75a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8.25 8h-1.5Z" clipRule="evenodd"/>
        </svg>
        <Translate id="inlinevoucher.auto-apply">
          By using the ORDER NOW button, the voucher of the selected product is automatically applied.
        </Translate>
      </p>
    </>
  );
}

export default function InlineVoucher({ showProducts = true }): JSX.Element {
  const { siteConfig = {} } = useDocusaurusContext();
  const { frontMatter } = useDoc();

  const { loading, vouchers, found, getVoucherForServices, groupServicesByVoucher } = useContext(VoucherContext);

  let services = null;

  if (
    frontMatter.hasOwnProperty('services')
    && Array.isArray(frontMatter.services)
    && frontMatter.services.length > 0
  ) {
    services = frontMatter.services;
  }

  const voucher = getVoucherForServices ? getVoucherForServices(services || []) : null;
  const discountGroups = groupServicesByVoucher ? groupServicesByVoucher(services || []) : [];

  const serviceInfoMap: Record<string, any> = {};
  let hasUnknownService = false;
  if (services) {
    for (const key of services) {
      const info = map(key);
      if (info) {
        serviceInfoMap[key] = info;
      } else {
        hasUnknownService = true;
      }
    }
  }

  if (hasUnknownService) return null;

  const primaryVoucher = discountGroups.length > 0 ? discountGroups[0].voucher : voucher;
  const canDisplayProducts = showProducts === true && discountGroups.length > 0;
  const hasAnyVoucher = primaryVoucher && primaryVoucher.value !== '0' && primaryVoucher.code;

  return (
    <>
      {loading === true ? (
        <div className={styles.loader}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" style={{
            width: "15px",
            height: "15px",
          }} className="spinner">
            <path fillRule="evenodd"
                  d="M13.836 2.477a.75.75 0 0 1 .75.75v3.182a.75.75 0 0 1-.75.75h-3.182a.75.75 0 0 1 0-1.5h1.37l-.84-.841a4.5 4.5 0 0 0-7.08.932.75.75 0 0 1-1.3-.75 6 6 0 0 1 9.44-1.242l.842.84V3.227a.75.75 0 0 1 .75-.75Zm-.911 7.5A.75.75 0 0 1 13.199 11a6 6 0 0 1-9.44 1.241l-.84-.84v1.371a.75.75 0 0 1-1.5 0V9.591a.75.75 0 0 1 .75-.75H5.35a.75.75 0 0 1 0 1.5H3.98l.841.841a4.5 4.5 0 0 0 7.08-.932.75.75 0 0 1 1.025-.273Z"
                  clipRule="evenodd"/>
          </svg>
        </div>
      ) : (
        <>
          {found === true && hasAnyVoucher &&
            <>
              {/* Wiggle background top */}
              <div className={styles.wiggleBg + ' wiggle-bg'} style={{
                'height': '4.5rem',
                'margin': '0 1rem',
                'position': 'relative',
              }}>
                <div className={styles.backgroundFader}></div>
              </div>

              <div className="relative">
                <div className={styles.sibblingCard}></div>
                <div className={styles.sibblingCard}></div>
                <div className={styles.sibblingCard}></div>
                <div className={styles.sibblingCard}></div>

                <div className={styles.box}>
                  {/* Left side: info */}
                  <div className={styles.infoSide}>
                    {/* Header */}
                    <div className={styles.header}>
                      <div className={styles.headerTop}>
                        <div className={styles.headerIcon}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.headerSvg}>
                            <path fillRule="evenodd" d="M5.5 3A2.5 2.5 0 0 0 3 5.5v2.879a2.5 2.5 0 0 0 .732 1.767l6.5 6.5a2.5 2.5 0 0 0 3.536 0l2.878-2.878a2.5 2.5 0 0 0 0-3.536l-6.5-6.5A2.5 2.5 0 0 0 8.38 3H5.5ZM6 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className={styles.title}>
                           <Translate id="inlinevoucher.title.generic">
                            Hosting Discount 🏷️
                          </Translate>
                        </p>
                      </div>
                      <p className={styles.description}>
                        <Translate id="inlinevoucher.description.with-products">
                          Take the opportunity and start your own project today! Use the discount code for the products listed in this guide and save. 😉
                        </Translate>
                      </p>
                      <p className={styles.descriptionSub}>
                        <Translate id="inlinevoucher.description.rental-note">
                          This discount code can be used for the following products on a rental basis:
                        </Translate>
                      </p>
                    </div>

                    {/* Products (flat list, no grouping) */}
                    {canDisplayProducts === true &&
                      <div className={styles.products}>
                        <div className={styles.serviceList}>
                          {discountGroups.flatMap((group) =>
                            group.serviceKeys
                              .map(key => serviceInfoMap[key])
                              .filter(Boolean)
                          ).map((serviceDetails, index) => (
                            <a href={serviceDetails.url} target="_blank" rel="noopener noreferrer"
                               key={index} className={styles.service}>
                              <div className={styles.iconContainer}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                     className={styles.serviceIcon}>
                                  <path d="M1.75 1.002a.75.75 0 1 0 0 1.5h1.835l1.24 5.113A3.752 3.752 0 0 0 2 11.25c0 .414.336.75.75.75h10.5a.75.75 0 0 0 0-1.5H3.628A2.25 2.25 0 0 1 5.75 9h6.5a.75.75 0 0 0 .73-.578l.846-3.595a.75.75 0 0 0-.578-.906 44.118 44.118 0 0 0-7.996-.91l-.348-1.436a.75.75 0 0 0-.73-.573H1.75ZM5 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/>
                                </svg>
                              </div>
                              <div className={styles.labelGroup}>
                                <span className={styles.label}>{serviceDetails.title}</span>
                                {serviceDetails.price && serviceDetails.price !== 'from 0.00€' &&
                                  <span className={styles.price}>{serviceDetails.price}</span>
                                }
                              </div>
                              <div className={styles.arrowContainer}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={styles.arrowIcon}>
                                  <path fillRule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    }

                    {canDisplayProducts === false &&
                      <div className={styles.reasonList}>
                        <div className={styles.reasonItem}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.reasonIcon}>
                            <path fillRule="evenodd" d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                          </svg>
                          <span><Translate id="inlinevoucher.list-reasons.first">DDoS-Protection</Translate></span>
                        </div>
                        <div className={styles.reasonItem}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.reasonIcon}>
                            <path fillRule="evenodd" d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                          </svg>
                          <span><Translate id="inlinevoucher.list-reasons.second">Online within minutes</Translate></span>
                        </div>
                        <div className={styles.reasonItem}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.reasonIcon}>
                            <path fillRule="evenodd" d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                          </svg>
                          <span><Translate id="inlinevoucher.list-reasons.third">Custom webinterface</Translate></span>
                        </div>
                      </div>
                    }
                  </div>

                  {/* Coupon tear line (vertical) */}
                  <div className={styles.tearLine}>
                    <div className={styles.tearDots}></div>
                  </div>

                  {/* Right side: coupon code area */}
                  <div className={styles.couponSide}>
                    <CouponPanel
                      discountGroups={discountGroups}
                      serviceInfoMap={serviceInfoMap}
                      marketingSite={siteConfig.customFields.marketingSite}
                    />
                  </div>
                </div>
              </div>

              {/* Wiggle background bottom */}
              <div className={styles.wiggleBg + ' wiggle-bg'} style={{
                'height': '4.5rem',
                'margin': '0 1rem',
                'position': 'relative',
              }}>
                <div className={styles.backgroundFader} style={{
                  'transform': 'rotate(180deg)',
                }}></div>
              </div>
            </>
          }
        </>
      )}
    </>
  )
}

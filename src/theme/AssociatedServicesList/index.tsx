import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';
import { mapList } from '../../utilities/serviceMapper';

export default function AssociatedServicesList({ services }): JSX.Element {
  const serviceInfoList = mapList(services);

  return (
    <>
      {serviceInfoList.length > 0 &&
        <div className={[styles.box, styles.verticalSpace].join(' ')}>
          <div className={styles.headerBanner}>
            <div className={styles.headerIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.headerSvg}>
                <path fillRule="evenodd" d="M6 5v1H4.667a1.75 1.75 0 0 0-1.743 1.598l-.826 9.5A1.75 1.75 0 0 0 3.84 19H16.16a1.75 1.75 0 0 0 1.743-1.902l-.826-9.5A1.75 1.75 0 0 0 15.333 6H14V5a4 4 0 0 0-8 0Zm4-2.5A2.5 2.5 0 0 0 7.5 5v1h5V5A2.5 2.5 0 0 0 10 2.5ZM7.5 10a2.5 2.5 0 0 0 5 0V8.75a.75.75 0 0 1 1.5 0V10a4 4 0 0 1-8 0V8.75a.75.75 0 0 1 1.5 0V10Z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className={styles.note}>
                <Translate id="servicelist.introduction">
                  The ideal products for this guide
                </Translate>
              </p>
              <p className={styles.fineprint}>
                <Translate id="servicelist.note">
                  Get started right away — order the matching product and follow this guide step by step.
                </Translate>
              </p>
            </div>
          </div>
          <div className={styles.list}>
            {serviceInfoList.map((serviceDetails, index) => (
              <a href={serviceDetails.url} target="_blank" rel="noopener noreferrer" key={index}
                 className={styles.service}>
                <div className={styles.iconContainer}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                       className={styles.icon}>
                    <path
                      d="M1.75 1.002a.75.75 0 1 0 0 1.5h1.835l1.24 5.113A3.752 3.752 0 0 0 2 11.25c0 .414.336.75.75.75h10.5a.75.75 0 0 0 0-1.5H3.628A2.25 2.25 0 0 1 5.75 9h6.5a.75.75 0 0 0 .73-.578l.846-3.595a.75.75 0 0 0-.578-.906 44.118 44.118 0 0 0-7.996-.91l-.348-1.436a.75.75 0 0 0-.73-.573H1.75ZM5 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/>
                  </svg>
                </div>
                <div className={styles.labelGroup}>
                  <span className={styles.label}>
                    {serviceDetails.title}
                  </span>
                  {serviceDetails.price &&
                    <span className={styles.price}>
                      {serviceDetails.price}
                    </span>
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
    </>
  );
}

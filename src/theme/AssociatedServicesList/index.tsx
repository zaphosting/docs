import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';
import { mapList } from '../../utilities/serviceMapper';

export default function AssociatedServicesList({ services }): JSX.Element {
  const serviceInfoList = mapList(services);

  return (
    <>
      {serviceInfoList.length > 0 &&
        <div className={[styles.box, styles.verticalSpace].join(' ')}>
          <p className={styles.note}>
            <Translate id="servicelist.introduction">
                This guide was created with the following products:
            </Translate>
          </p>
          <p className={styles.fineprint}>
            <Translate id="servicelist.note">
              (Details may vary with products from different providers but the main concepts remain the same)
            </Translate>
          </p>
          <div className={[styles.list, styles.mtsmall].join(' ')}>
            {serviceInfoList.map((serviceDetails, index) => (
              <a href={serviceDetails.url} target="_blank" key={index}
                 className={styles.service}>
                <div
                  className={styles.iconContainer}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                       className={styles.icon}>
                    <path
                      d="M1.75 1.002a.75.75 0 1 0 0 1.5h1.835l1.24 5.113A3.752 3.752 0 0 0 2 11.25c0 .414.336.75.75.75h10.5a.75.75 0 0 0 0-1.5H3.628A2.25 2.25 0 0 1 5.75 9h6.5a.75.75 0 0 0 .73-.578l.846-3.595a.75.75 0 0 0-.578-.906 44.118 44.118 0 0 0-7.996-.91l-.348-1.436a.75.75 0 0 0-.73-.573H1.75ZM5 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/>
                  </svg>
                </div>
                <span
                  className={styles.label}>
                  {serviceDetails.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      }
    </>
  );
}

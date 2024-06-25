import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';
import { mapList } from '../../utilities/serviceMapper';
import VoucherButton from '../VoucherButton';
import { VoucherContext } from '../../utilities/contexts/VoucherContext';
import { useContext } from 'react';
import { useDoc } from '@docusaurus/theme-common/internal';

export default function InlineVoucher({ showProducts = true }): JSX.Element {
  const { frontMatter } = useDoc();

  const { loading, voucher, found } = useContext(VoucherContext);

  let services = null;
  let serviceInfoList = [];

  if (
    frontMatter.hasOwnProperty('services')
    && Array.isArray(frontMatter.services)
    && frontMatter.services.length > 0
  ) {
    services = frontMatter.services;
    serviceInfoList = mapList(services);
  }

  const canDisplayProducts = showProducts === true && serviceInfoList.length > 0;

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
          {found === true &&
            <>
              <div className={styles.wiggleBg + ' wiggle-bg'} style={{
                'height': '7rem',
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
                  <div className={styles.informationArea}>
                    <span className={styles.title}>
                        <Translate id="inlinevoucher.title" values={{
                          voucherType: voucher.type,
                          voucherValue: voucher.value,
                        }}>
                            {'{voucherValue} {voucherType} Hosting Voucher 🏷️'}
                        </Translate>
                    </span>
                    {canDisplayProducts === true &&
                      <>
                        <p className={[styles.description, styles.mtsmall].join(' ')}>
                          <Translate id="inlinevoucher.description.with-products">
                            Ready to go with all products used in the guide 😉
                          </Translate>
                        </p>
                        <p className={[styles.descriptionSmall, styles.mtbig].join(' ')}>
                          <Translate id="inlinevoucher.list-title.with-products">
                            Therefore also applicable for:
                          </Translate>
                        </p>
                        <div className={[styles.detailList, styles.mtmedium].join(' ')}>
                          {serviceInfoList.map((serviceDetails, index) => (
                            <a href={serviceDetails.url} target="_blank" key={index} className={styles.item}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                     className={styles.icon}>
                                  <path fillRule="evenodd"
                                          d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                                          clipRule="evenodd"/>
                              </svg>
                              <span className={styles.text}>
                                {serviceDetails.title}
                              </span>
                            </a>
                          ))}
                        </div>
                      </>
                    }
                    {canDisplayProducts === false &&
                      <>
                        <p className={[styles.description, styles.mtsmall].join(' ')}>
                          <Translate id="inlinevoucher.description.without-products">
                            Ready for your next awesome project 😉
                          </Translate>
                        </p>
                        <p className={[styles.descriptionSmall, styles.mtbig].join(' ')}>
                          <Translate id="inlinevoucher.list-title.without-products">
                            Why you should give us a try?
                          </Translate>
                        </p>
                        <div className={[styles.detailList, styles.mtmedium].join(' ')}>
                          <div className={styles.item}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                   className={styles.icon}>
                                <path fillRule="evenodd"
                                        d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                                        clipRule="evenodd"/>
                            </svg>
                            <span className={styles.text}>
                              <Translate id="inlinevoucher.list-reasons.first">
                                DDoS-Protection
                              </Translate>
                            </span>
                          </div>
                          <div className={styles.item}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                   className={styles.icon}>
                                <path fillRule="evenodd"
                                        d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                                        clipRule="evenodd"/>
                            </svg>
                            <span className={styles.text}>
                              <Translate id="inlinevoucher.list-reasons.second">
                                Online within minutes
                              </Translate>
                            </span>
                          </div>
                          <div className={styles.item}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                   className={styles.icon}>
                                <path fillRule="evenodd"
                                        d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                                        clipRule="evenodd"/>
                            </svg>
                            <span className={styles.text}>
                              <Translate id="inlinevoucher.list-reasons.third">
                                Custom webinterface
                              </Translate>
                            </span>
                          </div>
                        </div>
                      </>
                    }
                  </div>
                  <div className={styles.voucherArea}>
                    <div className="relative flex w-full">
                      <svg className={styles.cardDecoration} style={{
                        position: 'absolute',
                        bottom: '-1.25rem',
                        left: '-1.75rem',
                        width: '1rem',
                        transform: 'rotate(-45deg)',
                      }} viewBox="0 0 88 190"
                           fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M43.3244 7.19516C47.5026 10.6392 51.6341 14.106 55.7657 17.5954C58.2866 19.7479 60.5975 22.1271 63.5386 23.8491C64.3322 24.3249 65.546 24.3703 65.9194 25.3219V25.2992C66.7598 25.8204 67.7168 26.2056 68.417 26.8627C71.078 29.3325 74.1825 31.553 76.4467 34.2267C76.5401 34.34 76.8435 34.2947 76.9836 34.4306C77.6838 35.0877 80.0414 37.5575 81.722 38.985C85.5968 42.2705 89.3315 45.6919 91.9458 50.2915C92.3426 51.0166 99.5553 59.5589 95.9139 63.2748C92.1325 67.1494 83.0758 61.1903 82.1888 60.1253C80.0647 57.5196 78.4308 54.3701 75.3263 52.8293C70.7746 50.5635 67.6934 46.7568 63.912 43.7206C60.5041 40.9789 57.4696 37.852 54.0384 35.133C50.8172 32.5953 46.9657 30.692 43.9546 27.905C41.3637 25.5032 39.683 22.1724 37.3955 19.4534C36.8587 18.8189 35.4581 18.8416 34.8279 18.1618C34.3144 17.5954 33.404 16.7344 33.1706 15.896C33.0773 15.5335 32.9839 15.1256 32.6337 15.0577C30.9531 14.7178 23.1802 5.88094 27.6152 1.39457C31.9102 -3.02383 39.7064 4.20425 43.3244 7.19516Z"/>
                          <path
                              d="M40.0772 87.0864C44.1154 88.1287 48.1535 89.2163 52.1684 90.3265C54.6426 91.0063 57.0001 92.0033 59.6378 92.1392C60.3614 92.1845 61.2717 91.6634 61.8086 92.2978C62.5789 92.3658 63.3959 92.2525 64.0961 92.5018C66.7338 93.4081 69.6749 93.8839 72.0791 95.1528C72.1725 95.1981 72.3825 95.0168 72.5226 95.0848C73.2228 95.3341 75.6504 96.3764 77.2843 96.8295C81.0657 97.8945 84.7771 99.0954 87.9516 101.86C88.4418 102.29 96.1213 106.346 94.4407 111.195C92.6901 116.248 84.3103 115.274 83.3533 114.775C81.0657 113.529 78.9883 111.558 76.2573 111.648C72.2425 111.784 68.9279 109.926 65.2632 109.042C61.972 108.249 58.8675 106.935 55.5763 106.187C52.4718 105.485 49.1105 105.598 46.1228 104.579C43.5552 103.695 41.3843 101.61 38.9568 100.319C38.3732 100.024 37.3462 100.681 36.6926 100.387C36.1557 100.138 35.2454 99.7978 34.8486 99.2087C34.6852 98.9594 34.4985 98.6422 34.2183 98.7328C32.8645 99.2087 24.6715 95.1755 26.7723 89.3069C28.803 83.529 36.5759 86.1801 40.0772 87.0864Z"/>
                          <path
                              d="M16.0785 169.819C21.8673 168.573 27.6561 167.395 33.4683 166.217C37.0396 165.492 40.6576 165.107 44.1122 163.815C45.0459 163.452 45.9095 162.546 46.9833 162.818H46.9599C47.9636 162.455 48.944 161.957 49.9711 161.776C53.8925 161.164 57.9073 160.008 61.7588 159.827C61.8988 159.827 62.0622 159.555 62.2956 159.51C63.346 159.351 67.0807 158.966 69.4383 158.49C74.9003 157.403 80.3857 156.474 86.1512 157.153C87.0615 157.267 99.3394 156.678 100.203 161.73C101.113 166.987 89.8859 170.59 88.3453 170.635C84.6573 170.771 80.8058 170.182 77.3746 171.7C72.356 173.921 66.9874 174.102 61.7821 175.257C57.1137 176.3 52.3519 176.844 47.6835 177.931C43.3186 178.951 39.0937 180.854 34.6587 181.557C30.8306 182.168 26.7691 181.511 22.871 181.692C21.9607 181.738 21.027 182.848 20.0466 182.939C19.2296 183.007 17.8525 183.211 16.9655 182.893C16.592 182.757 16.1718 182.576 15.8684 182.825C14.4445 183.958 1.5364 184.819 0.509357 178.679C-0.447665 172.742 11.0599 170.907 16.0785 169.819Z"/>
                      </svg>
                      <svg className={styles.cardDecoration} style={{
                        position: 'absolute',
                        right: '-1.25rem',
                        top: '-.75rem',
                        width: '1rem',
                        transform: 'rotate(-12deg)',
                      }} viewBox="0 0 88 190"
                           fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M11.4101 14.8736C15.7751 13.4688 20.1867 12.1093 24.575 10.7724C27.2827 9.95672 30.0604 9.45823 32.6046 8.07606C33.3049 7.69087 33.8418 6.76184 34.7054 6.98843H34.6821C35.429 6.60323 36.1293 6.05945 36.9229 5.87819C39.9107 5.15312 42.9218 3.88422 45.9096 3.58966C46.0263 3.567 46.1196 3.31776 46.283 3.27244C47.0767 3.09118 49.9711 2.5927 51.7451 2.0489C55.8766 0.802686 60.0548 -0.284915 64.6765 0.213571C65.4001 0.281547 74.947 -0.670124 76.3008 4.26942C77.7014 9.43555 69.3683 13.3328 68.1778 13.4235C65.3068 13.6727 62.2023 13.2195 59.728 14.8283C56.0867 17.1848 51.9085 17.5246 47.987 18.8388C44.4624 20.0171 40.7977 20.6968 37.2964 21.9204C34.0052 23.076 30.9474 25.0699 27.5628 25.9083C24.645 26.6333 21.3771 26.1122 18.3427 26.4067C17.6191 26.4747 17.0589 27.6076 16.2886 27.7209C15.6583 27.8116 14.6079 28.0608 13.861 27.7889C13.5342 27.6756 13.2074 27.517 12.9973 27.7663C12.0403 28.9218 2.00326 30.1907 0.416004 24.1635C-1.17125 18.2723 7.6287 16.0972 11.4101 14.8736Z"/>
                          <path
                              d="M25.7628 81.5368C29.6609 81.3782 33.5357 81.2649 37.4338 81.1743C39.8147 81.129 42.1956 81.4009 44.5998 80.7665C45.2534 80.5852 45.9303 79.8374 46.5839 80.3133C47.2841 80.1547 47.9844 79.8148 48.6613 79.8601C51.2756 79.9734 54.0066 79.5882 56.5042 80.1094C56.5976 80.132 56.7376 79.9054 56.8777 79.9054C57.578 79.9508 60.0289 80.2453 61.6161 80.2227C65.2808 80.1547 68.9222 80.2453 72.5168 81.9674C73.077 82.2393 81.0367 83.8933 80.8966 89.0368C80.7565 94.3615 73.0304 95.8343 72.05 95.6304C69.6691 95.0866 67.2649 93.7951 64.8607 94.6788C61.336 95.9476 57.8581 95.1319 54.3568 95.3358C51.2056 95.5171 48.0778 95.1546 44.9499 95.3812C42.0088 95.5851 39.0211 96.6727 36.08 96.5594C33.5357 96.4461 31.0381 95.0639 28.4938 94.5428C27.8869 94.4068 27.1633 95.3585 26.5098 95.2452C25.9729 95.1546 25.0625 95.1093 24.549 94.6561C24.3156 94.4522 24.0822 94.2029 23.8488 94.3842C22.775 95.2226 14.3719 93.7271 14.582 87.496C14.722 81.3782 22.3782 81.6728 25.7628 81.5368Z"/>
                          <path
                              d="M23.3431 158.421C28.0815 159.689 32.8199 161.004 37.535 162.34C40.4294 163.156 43.2071 164.312 46.2883 164.561C47.1286 164.629 48.1556 164.153 48.8092 164.833H48.7859C49.6729 164.924 50.6066 164.878 51.4469 165.15C54.5514 166.215 57.9826 166.849 60.8304 168.254C60.9471 168.3 61.1805 168.141 61.3439 168.209C62.1609 168.504 65.0319 169.682 66.9693 170.226C71.4043 171.494 75.7692 172.922 79.6207 175.89C80.2276 176.343 89.3309 180.875 87.6503 185.724C85.8763 190.777 76.1427 189.372 75.0223 188.783C72.2913 187.401 69.7937 185.293 66.6425 185.225C61.9974 185.158 58.0527 183.096 53.7811 182.008C49.9296 181.034 46.265 179.538 42.4135 178.609C38.7955 177.726 34.874 177.68 31.3494 176.502C28.3149 175.482 25.7006 173.239 22.8062 171.789C22.1293 171.449 20.9622 172.061 20.1919 171.744C19.5617 171.472 18.488 171.087 17.9978 170.452C17.7877 170.18 17.5776 169.863 17.2275 169.954C15.6869 170.384 5.97664 165.853 8.07742 159.961C10.0848 154.229 19.2349 157.333 23.3431 158.421Z"/>
                      </svg>
                      <div className={styles.voucherSibblingCard}></div>
                      <div className={styles.voucherSibblingCard}></div>
                      <div className={styles.voucherCard}>
                        <span className={styles.voucherLabel}>
                          <Translate id="inlinevoucher.your-voucher">
                            YOUR voucher
                          </Translate>
                        </span>
                        <div className={styles.mbhuge}>
                          <VoucherButton code={voucher.code} small={true}></VoucherButton>
                        </div>
                        <div className={styles.cutLine}></div>
                        <a href="#" className={styles.footer} target="_blank">
                          <span
                            className={styles.text}>
                            <Translate id="voucher.redeem">
                              Redeem
                            </Translate>
                          </span>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                               fill="currentColor"
                               className={styles.icon}>
                              <path fillRule="evenodd"
                                    d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z"
                                    clipRule="evenodd"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              <div className={styles.wiggleBg + ' wiggle-bg'} style={{
                'height': '7rem',
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

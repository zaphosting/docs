import { useState } from 'react';
import styles from './styles.module.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Translate from '@docusaurus/Translate';

export default function VoucherButton({ code, small = false }) {
  const [
    voucherWasJustCopied,
    setVoucherWasJustCopied,
  ] = useState(false);

  function codeCopyFeedback(text, result) {
    if (result === false) {
      return;
    }

    setVoucherWasJustCopied(true);

    setTimeout(() => {
      setVoucherWasJustCopied(false);
    }, 1000);
  }

  return (
    <>
      <CopyToClipboard text={code} onCopy={codeCopyFeedback}>
        <button type="button" className={[styles.voucherButton].join(' ') + (small ? ' ' + styles.small : '') } title={code}>
          <span className={styles.voucherCode}>
            {voucherWasJustCopied === false ? (
              code
            ) : (
              <span>
                <Translate id="voucherbutton.success">
                  YEEEAH!
                </Translate>
              </span>
            )}
          </span>
            <div className={styles.copyBox}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                   className={styles.icon}>
                <path
                      d="M5.5 3.5A1.5 1.5 0 0 1 7 2h2.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 1 .439 1.061V9.5A1.5 1.5 0 0 1 12 11V8.621a3 3 0 0 0-.879-2.121L9 4.379A3 3 0 0 0 6.879 3.5H5.5Z"/>
                <path
                      d="M4 5a1.5 1.5 0 0 0-1.5 1.5v6A1.5 1.5 0 0 0 4 14h5a1.5 1.5 0 0 0 1.5-1.5V8.621a1.5 1.5 0 0 0-.44-1.06L7.94 5.439A1.5 1.5 0 0 0 6.878 5H4Z"/>
              </svg>
            </div>
        </button>
      </CopyToClipboard>
    </>
  );
}

import React from 'react';
import Desktop from '@theme-original/DocItem/TOC/Desktop';
import type DesktopType from '@theme/DocItem/TOC/Desktop';
import type {WrapperProps} from '@docusaurus/types';
import VoucherBox from '../../../VoucherBox';
import styles from './styles.module.css';

type Props = WrapperProps<typeof DesktopType>;

export default function DesktopWrapper(props: Props): JSX.Element {
  return (
    <div className={styles.container}>
      <Desktop {...props} />
      <div className={styles.mtbig}>
        <VoucherBox />
      </div>
    </div>
  );
}

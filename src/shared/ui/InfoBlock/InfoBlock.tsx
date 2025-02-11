import { FC } from 'react';

import styles from './InfoBlock.module.scss';
import { IProps } from './InfoBlock.types';
import { Typography } from '../Typography';

export const InfoBlock: FC<IProps> = ({ label, value }) => {
  return (
    <div className={styles.info_block}>
      <Typography className={styles.label}>{label}</Typography>
      <Typography className={styles.value}>{value}</Typography>
    </div>
  );
};

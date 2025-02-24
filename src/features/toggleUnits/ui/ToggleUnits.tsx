import { FC } from 'react';

import styles from './ToggleUnits.module.scss';
import { IProps } from './ToggleUnits.types';

export const ToggleUnits: FC<IProps> = ({ unit, onToggle, firstValue, secondValue }) => {
  const getClassPart = (u: string) => (u === unit ? `active_${u}` : 'part');

  return (
    <div className={styles.container}>
      {/* <div className={styles.deg}>{`°`}</div> */}
      <button className={styles.toggle} onClick={onToggle}>
        <div className={styles[getClassPart(firstValue)]}>{firstValue}</div>
        <div className={styles[getClassPart(secondValue)]}>{secondValue}</div>
      </button>
    </div>
  );
};

import { FC } from 'react';

import styles from './ToggleUnits.module.scss';
import { IProps } from './ToggleUnits.types';

export const ToggleUnits: FC<IProps> = ({ unit, onToggle }) => {
  const getClassPart = (u: string) => (u === unit ? `active_${u}` : 'part');

  return (
    <div className={styles.container}>
      <div className={styles.deg}>{`°`}</div>
      <button className={styles.toggle} onClick={onToggle}>
        <div className={styles[getClassPart('C')]}>C</div>
        <div className={styles[getClassPart('F')]}>F</div>
      </button>
    </div>
  );
};

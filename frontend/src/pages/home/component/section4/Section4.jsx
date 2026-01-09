import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Section4.module.scss';

const Section4 = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.title}>{t('section4Title')}</h2>
        </div>

        <div className={styles.right}>
          <p className={styles.desc}>{t('section4Desc')}</p>
          <p className={styles.process}>{t('section4Process')}</p>
        </div>
      </div>
    </section>
  );
};

export default Section4;
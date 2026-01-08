import React, { useEffect } from 'react';
import styles from './Section1.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getProductThunk } from '../../../../redux/reducers/productSlice';
import { useTranslation } from 'react-i18next';

const Section1 = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product.product);
  const loading = useSelector((state) => state.product.loading);

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getProductThunk());
  }, [dispatch]);

  const firstImage = data && data.length > 0 ? data[0].image : '/fallback-machine.png';
  const secondImage = data && data.length > 1 ? data[1].image : firstImage;

  return (
    <section className={styles.mains}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <img 
            src={firstImage} 
            alt="DPF Cleaning Machine" 
            className={styles.mainImage} 
          />
          
          <div className={styles.textOverlay}>
            <p className={styles.subtitle}>
              {t('subtitle')}
            </p>
            <h1 className={styles.title}>
              {t('titlePart1')} 
              <span className={styles.highlight}>{t('titleHighlight')}</span>
              {t('titlePart2') && ' ' + t('titlePart2')}
            </h1>
            <p className={styles.description}>
              {t('description')}
              <span className={styles.secondLine}>
                {t('descriptionSecondLine')}
              </span>
            </p>
          </div>
        </div>

        <div className={styles.rightSide}>
          <img 
            src={secondImage} 
            alt="DPF Cleaner Side View" 
            className={styles.sideImage} 
          />
        </div>
      </div>
    </section>
  );
};

export default Section1;
import React, { useEffect } from 'react';
import styles from './Section1.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getProductThunk } from '../../../../redux/reducers/productSlice';
import { useTranslation } from 'react-i18next';

const Section1 = () => {
  const dispatch = useDispatch();
  const { products: data, loading } = useSelector((state) => state.product);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getProductThunk());
  }, [dispatch]);

  if (loading) return null;

  if (!data || data.length === 0) return null;

  // Placeholder images in case data is missing
  const getImgUrl = (img) => img?.startsWith("http") || img?.startsWith("data:") ? img : `${import.meta.env.VITE_API_URL || "https://carbonfix.az"}${img}`;
  const secondImage = data[1] ? getImgUrl(data[1].image) : "https://via.placeholder.com/800?text=Image+1";
  const thirdImage = data[2] ? getImgUrl(data[2].image) : "https://via.placeholder.com/600?text=Image+2";

  return (
    <section className={styles.mains}>
      <div className={styles.container}>

        <div className={styles.leftSide}>
          <img
            src={secondImage}
            alt="DPF Cleaning Machine"
            className={styles.mainImage}
          />
          <div className={styles.textOverlay}>
            <p className={styles.subtitle}>{t('subtitle')}</p>
            <h1 className={styles.title}>
              {t('titlePart1')}{' '}
              <span className={styles.highlight}>{t('titleHighlight')}</span>{' '}
              {t('titlePart2')}
            </h1>
            <p className={styles.description}>
              {t('description')}
            </p>
          </div>
        </div>

        <div className={styles.rightSide}>
          <img
            src={thirdImage}
            alt="DPF Cleaner Side View"
            className={styles.sideImage}
          />
        </div>

      </div>
    </section>
  );
};

export default Section1;

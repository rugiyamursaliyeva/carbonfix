import React, { useEffect } from 'react';
import styles from './Section1.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getProductThunk } from '../../../../redux/reducers/productSlice';
import { useTranslation } from 'react-i18next';

const Section1 = () => {
  const dispatch = useDispatch();

  const { product: data, loading } = useSelector((state) => state.product);

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getProductThunk());
  }, [dispatch]);

  // Loading zamanı heç nə göstərmirik
  if (loading) return null;

  // Backend-dən minimum 2 şəkil gəlməlidir
  if (!data || data.length < 2) return null;

  // Şəkillər birbaşa backend-dən gələn http URL-lərdir
  const firstImage = data[0].image;
  const secondImage = data[1].image;

  return (
    <section className={styles.mains}>
      <div className={styles.container}>

        {/* LEFT SIDE */}
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
              {t('titlePart1')}{' '}
              <span className={styles.highlight}>
                {t('titleHighlight')}
              </span>{' '}
              {t('titlePart2')}
            </h1>

            <p className={styles.description}>
              {t('description')}
              <span className={styles.secondLine}>
                {t('descriptionSecondLine')}
              </span>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
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

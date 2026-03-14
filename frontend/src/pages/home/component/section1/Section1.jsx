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



  return (
    <section className={styles.mains}>
      <div className={styles.container}>
        {data.map((product) => (
          <div key={product._id} className={styles.productItem} style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
            <div className={styles.leftSide}>
              <img
                src={product.image}
                alt={product.title}
                className={styles.mainImage}
              />
              <div className={styles.textOverlay}>
                <h1 className={styles.title}>
                  {product.title}
                </h1>
                <p className={styles.description}>
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section1;

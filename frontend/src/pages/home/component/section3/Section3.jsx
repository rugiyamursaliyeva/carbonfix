import React, { useEffect } from 'react'
import styles from '../section3/Section3.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getProductThunk } from '../../../../redux/reducers/productSlice'
import { useTranslation } from 'react-i18next'

const Section3 = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const data = useSelector(state => state.product.products) || []
  const loading = useSelector(state => state.product.loading)
  const error = useSelector(state => state.product.error)

  useEffect(() => {
    dispatch(getProductThunk())
  }, [dispatch])

  if (loading) return null;
  if (!data || data.length === 0) return null;

  return (
    <section className={styles.main}>
      <div className={styles.group}>
        <div className={styles.cards}>
          {data.map((item, index) => {
            return (
              <div className={styles.card} key={index}>
                <div className={styles.iconWrapper}>
                  <img
                    src={item.image}
                    alt={item.title || "Section 3 Image"}
                    className={styles.icon}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.desc}>{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}

export default Section3

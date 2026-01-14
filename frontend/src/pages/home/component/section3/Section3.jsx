import React, { useEffect } from 'react'
import styles from '../section3/Section3.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getProductThunk } from '../../../../redux/reducers/productSlice'
import { useTranslation } from 'react-i18next'

const Section3 = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
      
  const data = useSelector(state => state.product.product)
  const loading = useSelector(state => state.product.loading)
  const error = useSelector(state => state.product.error)

  useEffect(() => {
      dispatch(getProductThunk())
  }, [dispatch])

  // i18n-dən kartların məlumatlarını əldə edirik
  const cardsData = [
    {
      key: 'soot',
      title: t('cards.sootTitle'),
      desc: t('cards.sootDesc')
    },
    {
      key: 'oil',
      title: t('cards.oilTitle'),
      desc: t('cards.oilDesc')
    },
    {
      key: 'block',
      title: t('cards.blockTitle'),
      desc: t('cards.blockDesc')
    }
  ]

  if (loading) return null
  if (!data || data.length < 6) return null // backend-dən minimum 6 şəkil olmalı

  return (
    <section className={styles.main}>
      <div className={styles.group}>
         <div className={styles.cards}>
             {data.slice(3, 6).map((item, index) => {
               const cardInfo = cardsData[index] || cardsData[0]
               return(
                   <div className={styles.card} key={index}>
                       <div className={styles.iconWrapper}>
                         <img
                           src={`http://localhost:5000${item.image}`} // TAM URL əlavə edildi
                           alt=""
                           className={styles.icon}
                         />
                       </div>
                       <h3 className={styles.title}>{cardInfo.title}</h3>
                       <p className={styles.desc}>{cardInfo.desc}</p>
                   </div>
               )
           })}             
          </div>
      </div>
    </section>
  )
}

export default Section3

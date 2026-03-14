import React, { useEffect } from "react";
import styles from "./Section7.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProductThunk } from "../../../../redux/reducers/productSlice";
import { useTranslation } from "react-i18next";

const Section7 = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { products: data = [], loading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductThunk());
  }, [dispatch]);

  if (loading) return null;
  if (!data || data.length === 0) return null;

  // Seall products by title to find appropriate images (e.g. background and icons)
  const backgroundProduct = data.find(p => p.title.toLowerCase().includes("back")) || data[0];
  const vehicleProduct = data.find(p => p.title.toLowerCase().includes("icon")) || data[data.length - 1];

  const backgroundImage = backgroundProduct.image;
  const vehicleIcons = vehicleProduct.image;

  return (
    <section
      className={styles.section7}
      style={{
        backgroundImage: `
          linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 45%, rgba(0,0,0,0.25) 100%),
          url(${backgroundImage})
        `
      }}
    >
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.subtitle}>
            {t("section7.subtitle")}
          </p>
          <h2 className={styles.title}>
            {t("section7.title")}
          </h2>
          <p className={styles.text}>
            {t("section7.textPart1")} <br /><br />
            {t("section7.textPart2")}
          </p>
        </div>

        <div className={styles.right}>
          <h4>{t("section7.applicableTo")}</h4>
          <div className={styles.block}>
            <span>{t("section7.allTypesOfFuels")}</span>
            <p>{t("section7.fuelsList")}</p>
          </div>
          <div className={styles.block}>
            <span>{t("section7.allTypesOfVehicles")}</span>
            <div className={styles.icons}>
              <img src={vehicleIcons} alt={t("section7.vehiclesAlt")} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
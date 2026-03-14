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

  // Use the first image if multiple are not available
  const getImgUrl = (img) => img?.startsWith("http") || img?.startsWith("data:") ? img : `${import.meta.env.VITE_API_URL || "https://carbonfix.az"}${img}`;
  const backgroundImage = data[1] ? getImgUrl(data[1].image) : getImgUrl(data[0].image);
  const vehicleIcons = data[data.length - 1] ? getImgUrl(data[data.length - 1].image) : getImgUrl(data[0].image);

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
import React from "react";
import styles from "../section2/Section2.module.scss";
import { useTranslation } from "react-i18next";

const Section2 = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.main}>
      <div className={styles.text}>
        <div className={styles.head}>
          <p>{t("section2Title")}</p>
        </div>

        <div className={styles.desciption}>
          <p>{t("section2Desc")}</p>
          <span>{t("section2Span")}</span>
        </div>
      </div>
    </section>
  );
};

export default Section2;

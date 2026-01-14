import React from "react";
import styles from "../section5/Section5.module.scss";
import { useTranslation } from "react-i18next";

const Section5 = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.main}>
      <div className={styles.grid}>
        <div className={styles.card}>
          <span>01</span>
          <p>{t("section5.cards.c1")}</p>
        </div>

        <div className={styles.card}>
          <span>02</span>
          <p>{t("section5.cards.c2")}</p>
        </div>

        <div className={styles.card}>
          <span>03</span>
          <p>{t("section5.cards.c3")}</p>
        </div>

        <div className={styles.card}>
          <span>04</span>
          <p>{t("section5.cards.c4")}</p>
        </div>
      </div>
    </section>
  );
};

export default Section5;

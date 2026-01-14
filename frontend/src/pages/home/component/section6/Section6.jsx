import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Section6.module.scss";

const Section6 = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(null);

  // FAQ suallarını massiv kimi yığırıq (mainQuestion ayrıca göstəriləcək)
  const faqItems = [
    { key: "q1", question: t("faq.q1"), answer: t("faq.a1") },
    { key: "q2", question: t("faq.q2"), answer: t("faq.a2") },
    { key: "q3", question: t("faq.q3"), answer: t("faq.a3") },
    { key: "q4", question: t("faq.q4"), answer: t("faq.a4") },
    { key: "q5", question: t("faq.q5"), answer: t("faq.a5") },
    { key: "q6", question: t("faq.q6"), answer: t("faq.a6") },
    { key: "q7", question: t("faq.q7"), answer: t("faq.a7") },
    { key: "q8", question: t("faq.q8"), answer: t("faq.a8") },
  ];

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.left}>
          {/* Əsas sual böyük və diqqət çəkən şəkildə */}
          <h2 className={styles.mainQuestion}>{t("faq.mainQuestion")}</h2>
        </div>

        <div className={styles.right}>
          {faqItems.map((item, index) => (
            <div
              key={item.key}
              className={`${styles.item} ${open === index ? styles.active : ""}`}
              onClick={() => setOpen(open === index ? null : index)}
            >
              <div className={styles.question}>
                <span>{item.question}</span>
                <span className={styles.arrow}>⌄</span>
              </div>
              <div className={styles.answer}>
                <p style={{ whiteSpace: "pre-line" }}>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section6;
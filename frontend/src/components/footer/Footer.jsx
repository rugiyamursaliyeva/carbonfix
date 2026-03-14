// frontend/src/components/footer/Footer.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import styles from "./Footer.module.scss";

// Social media icons
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { getProductThunk } from "../../redux/reducers/productSlice";

const Footer = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { products: data = [], loading } = useSelector((state) => state.product);

  const BASE_URL = import.meta.env.VITE_API_URL || "https://carbonfix.az";
  const getImgUrl = (img) => img?.startsWith("http") || img?.startsWith("data:") ? img : `${BASE_URL}${img}`;

  const logoImage = data && data.length > 0 && data[0]?.image
    ? getImgUrl(data[0].image)
    : "https://via.placeholder.com/200x80?text=CARBONFIX";

  const backgroundImage = data && data.length > 1 && data[1]?.image
    ? getImgUrl(data[1].image)
    : (data && data.length > 0 ? getImgUrl(data[0].image) : "https://via.placeholder.com/1920x1080?text=Footer+Background");

  return (
    <footer className={styles.footer}>
      <div className={styles.background} style={{ backgroundImage: `url(${backgroundImage})` }} />
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Logo + Description */}
          <div className={styles.logoSection}>
            <img
              src={logoImage}
              alt={t("footer.logoAlt")}
              className={styles.logoImg}
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/200x80?text=Logo+Error";
              }}
            />
          </div>

          {/* Contact */}
          <div className={styles.section}>
            <h3 className={styles.title}>{t("footer.contactTitle")}</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <p className={styles.label}>{t("footer.phoneLabel")}</p>
                <a className={styles.link} href={`tel:${t("footer.phoneNumber").replace(/\s/g, "")}`}>
                  {t("footer.phoneNumber")}
                </a>
              </div>
              <div className={styles.contactItem}>
                <p className={styles.label}>{t("footer.emailLabel")}</p>
                <a className={styles.link} href={`mailto:${t("footer.email")}`}>
                  {t("footer.email")}
                </a>
              </div>
              <div className={styles.contactItem}>
                <p className={styles.label}>{t("footer.addressLabel")}</p>
                <p className={styles.text}>{t("footer.address")}</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className={styles.section}>
            <h3 className={styles.title}>{t("footer.followUsTitle")}</h3>
            <p className={styles.socialText}>
              {t("footer.followUsText")}
            </p>
            <div className={styles.socialIcons}>
              <a
                className={styles.iconLink}
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("footer.facebookAria")}
              >
                <FaFacebookF />
              </a>
              <a
                className={styles.iconLink}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("footer.instagramAria")}
              >
                <FaInstagram />
              </a>
              <a
                className={styles.iconLink}
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("footer.tiktokAria")}
              >
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} {t("footer.copyrightCompany")}. {t("footer.copyrightText")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
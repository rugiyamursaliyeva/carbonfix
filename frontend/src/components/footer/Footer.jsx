// Footer.jsx
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

  const data = useSelector((state) => state.product.product);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);

  const [logoImage, setLogoImage] = useState("/images/default-footer-logo.jpg");
  const [backgroundImage, setBackgroundImage] = useState("/images/default-footer-bg.jpg");

  const BASE_URL = "http://localhost:5000";

  useEffect(() => {
    dispatch(getProductThunk());
  }, [dispatch]);

  useEffect(() => {
    if (data && data.length > 0) {
      setLogoImage(data[0]?.image ? `${BASE_URL}${data[0].image}` : "/images/default-footer-logo.jpg");
      setBackgroundImage(data[1]?.image ? `${BASE_URL}${data[1].image}` : "/images/default-footer-bg.jpg");
    }
  }, [data]);

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
                e.target.src = "/images/default-footer-logo.jpg";
              }}
            />
            {/* <p className={styles.description}>
              {t("footer.description")}
            </p> */}
          </div>

          {/* Contact */}
          <div className={styles.section}>
            <h3 className={styles.title}>{t("footer.contactTitle")}</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <p className={styles.label}>{t("footer.phoneLabel")}</p>
                <a className={styles.link} href="tel:+994501234567">
                  {t("footer.phoneNumber")}
                </a>
              </div>
              <div className={styles.contactItem}>
                <p className={styles.label}>{t("footer.emailLabel")}</p>
                <a className={styles.link} href="mailto:info@dpfcenter.az">
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
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("footer.facebookAria")}
              >
                <FaFacebookF />
              </a>
              <a
                className={styles.iconLink}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("footer.instagramAria")}
              >
                <FaInstagram />
              </a>
              <a
                className={styles.iconLink}
                href="#"
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
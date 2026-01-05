import React, { useState } from "react";
import styles from "../header/Header.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa"; // Hər iki ikon

const Header = () => {
  const { t, i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const languages = [
    { code: "az", label: "AZ" },
    { code: "tr", label: "TR" },
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" },
  ];

  const currentLang =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <section className={styles.header}>
      <div className={styles.head}>
        {/* Logo */}
        <div className={styles.logo}>
          <span>CARBONFIX</span>
        </div>

        {/* Desktop Naviqasiya */}
        <div className={styles.navs}>
          <Link to="/">{t("home")}</Link>
          <Link to="/about-us">{t("about")}</Link>
          <Link to="/contact">{t("contact")}</Link>
        </div>

        {/* Desktop Dil Dropdown */}
        <div className={styles.langs}>
          <button
            className={styles.langButton}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {currentLang.label}
            <MdKeyboardArrowDown
              className={`${styles.arrow} ${dropdownOpen ? styles.rotated : ""}`}
            />
          </button>

          {dropdownOpen && (
            <div className={styles.dropdown}>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={lang.code === i18n.language ? styles.active : ""}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Mobil Toggle (☰ ↔ ×) */}
        <button className={styles.mobileToggle} onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobil Menü */}
      <div
        className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.active : ""}`}
      >
        <div className={styles.mobileNavs}>
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>
            {t("home")}
          </Link>
          <Link to="/about-us" onClick={() => setMobileMenuOpen(false)}>
            {t("about")}
          </Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
            {t("contact")}
          </Link>
        </div>

        <div className={styles.mobileLangs}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                changeLanguage(lang.code);
                setMobileMenuOpen(false);
              }}
              className={lang.code === i18n.language ? styles.active : ""}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Header;
import React, { useEffect, useState } from "react";
import styles from "../header/Header.module.scss";
import { useTranslation } from "react-i18next";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import axios from "axios";
import { useSelector } from "react-redux";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { products: data = [] } = useSelector((state) => state.product);
  const logo = data.length > 0 ? data[0].image : null;

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
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <section className={styles.header}>
      <div className={styles.head}>
        {/* Logo */}
        <div className={styles.logo}>
          {logo ? (
            <img
              src={logo}
              alt="Carbon Fix Logo"
              className={styles.logoImg}
            />
          ) : (
            <h1 style={{ color: '#fbbf24', fontSize: '1.5rem', fontWeight: 'bold' }}>CARBON FIX DPF</h1>
          )}
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

        {/* Mobil Toggle */}
        <button className={styles.mobileToggle} onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobil Menü */}
      <div
        className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.active : ""}`}
      >
        <div className={styles.mobileLangs}>
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
      </div>
    </section>
  );
};

export default Header;

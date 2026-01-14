import React, { useEffect, useState } from "react";
import styles from "../header/Header.module.scss";
import { useTranslation } from "react-i18next";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import axios from "axios";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logo, setLogo] = useState(null);

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

  // Backend-dən ilk şəkli götür
  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const res = await axios.get("http://localhost:5000/product");
        if (res.data.length > 0) {
          setLogo(res.data[0].image); // birinci şəkil
        }
      } catch (error) {
        console.error("Logo image load error:", error);
      }
    };
    fetchLogo();
  }, []);

  return (
    <section className={styles.header}>
      <div className={styles.head}>
        {/* Logo */}
        <div className={styles.logo}>
          {logo ? (
            <img
              src={`http://localhost:5000${logo}`}
              alt="Logo"
              className={styles.logoImg}
            />
          ) : (
            <span>Loading...</span>
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

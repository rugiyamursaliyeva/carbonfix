// src/components/WhatsAppFloatButton.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from '../whatsAppButton/WhatsAppFloatButton.module.scss';  // yolunu yoxla

const WhatsAppFloatButton = () => {
  const phoneNumber = '994552003900';   // + işarəsi olmadan yaz (wa.me belə istəyir)

  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      className={styles.whatsappFloat}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ilə əlaqə saxlayın"
    >
      <FaWhatsapp className={styles.icon} />
      {/* <span className={styles.tooltip}>Bizə yazın</span> */}
    </a>
  );
};

export default WhatsAppFloatButton;
import React from 'react';
import styles from './Footer.module.css';

type FooterProperty = {
  currency: string;
};

const Footer: React.FC<FooterProperty> = ({ currency }) => {
  return <footer className={styles.footer}>Russian {currency}</footer>;
};
export default Footer;

import React from 'react';
import styles from './Footer.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Footer: React.FC = () => {
  const selectedCurrency = useSelector((state: RootState) => state.currencies.selectedCurrency);
  return <footer className={styles.footer}>Russian {selectedCurrency?.toLocaleLowerCase()}</footer>;
};
export default Footer;

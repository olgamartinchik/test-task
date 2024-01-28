import React from 'react';
import style from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <h1 className={style.title}>CAT</h1>
      <p className={style.subtitle}>currencies academic terms</p>
    </header>
  );
};
export default Header;

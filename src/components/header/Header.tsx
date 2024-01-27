import React from 'react';
import style from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <p>CAT</p>
      <p>currencies academic terms</p>
    </header>
  );
};
export default Header;

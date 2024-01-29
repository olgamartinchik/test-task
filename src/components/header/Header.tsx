import React from 'react';
import style from './Header.module.css';
import clsx from 'clsx';

interface HeaderProps {
  isDropdownOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ isDropdownOpen }) => {
  return (
    <header className={style.header}>
      <h1 className={clsx(style.title, !isDropdownOpen && style.shadow)}>
        CAT
      </h1>
      <p className={clsx(style.subtitle, !isDropdownOpen && style.shadow)}>
        currencies academic terms
      </p>
    </header>
  );
};
export default Header;

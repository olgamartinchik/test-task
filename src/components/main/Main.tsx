import React, { useState } from 'react';
import Header from '../header/Header';
import style from './Main.module.css';
import CurrencySelect from '../select/CurrencySelect';

const Main: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <main className={style.main} data-testid="main-component">
      <div className={style.mainContainer}>
        <Header isDropdownOpen={isDropdownOpen} />
        <CurrencySelect
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          data-testid="currency-select"
        />
      </div>
      <div className={style.imgContainer}>
        <img src="assets/img/Kitten.png" alt="Kitten" className={style.image} />
      </div>
    </main>
  );
};
export default Main;

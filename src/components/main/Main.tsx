import React from 'react';
import Header from '../header/Header';
import style from './Main.module.css';
import CurrencySelect from '../select/CurrencySelect';

const Main: React.FC = () => {
  return (
    <main className={style.main}>
      <div className={style.mainContainer}>
        <Header />
        <CurrencySelect />
      </div>
      <div className={style.imgContainer}>
        <img
          src='/assets/img/Kitten.png'
          alt='Kitten'
          className={style.image}
        />
      </div>
    </main>
  );
};
export default Main;

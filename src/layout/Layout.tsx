import React from 'react';
import style from './Layout.module.css';
import Footer from '../components/footer/Footer';
import Main from '../components/main/Main';

const Layout: React.FC = () => {
  return (
    <div className={style.layout}>
      <Main />
      <Footer currency='rub' />
    </div>
  );
};
export default Layout;

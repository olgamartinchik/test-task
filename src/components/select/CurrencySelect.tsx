import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrency } from '../../store/currencies/currenciesSlice';
import { useGetCurrenciesQuery } from '../../store/currencies/currenciesApi';
import { RootState } from '../../store/store';
import style from './CurrencySelect.module.css';

const CurrencySelect: React.FC = () => {
  const dispatch = useDispatch();
  const {
    data: currenciesResponse,
    isLoading,
    isError,
  } = useGetCurrenciesQuery();
  const selectedCurrency = useSelector(
    (state: RootState) => state.currencies.selectedCurrency
  );

  const currencies = currenciesResponse?.data || [];
  const [inputValue, setInputValue] = useState(selectedCurrency || '');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (!selectedCurrency && currencies.length !== 0) {
      dispatch(selectCurrency(currencies[0].id));
      setInputValue(currencies[0].id);
    }
  }, [currencies, dispatch, selectedCurrency]);

  const handleChevronClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (value: string) => {
    setInputValue(value);
    setIsDropdownOpen(false);
    dispatch(selectCurrency(value));
  };

  return (
    <div className={style.container}>
      <input type='text' value={inputValue} readOnly className={style.input} />
      <div onClick={handleChevronClick} className={style.imgContainer}>
        <img
          src='../../assets/img/chevron-down.svg'
          alt=''
          className={style.img}
        />
      </div>
      {isDropdownOpen && (
        <div className={style.currencyContainer}>
          {currencies.map((currency) => (
            <div
              key={currency.id}
              onClick={() => handleOptionClick(currency.id)}
              className={style.currency}
            >
              {currency.id}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencySelect;

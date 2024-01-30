import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrency } from '../../store/currencies/currenciesSlice';
import { useGetCurrenciesQuery } from '../../store/currencies/currenciesApi';
import { RootState } from '../../store/store';
import style from './CurrencySelect.module.css';

interface CurrencySelectProps {
  isDropdownOpen: boolean;
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const CurrencySelect: React.FC<CurrencySelectProps> = ({ isDropdownOpen, setIsDropdownOpen }) => {
  const dispatch = useDispatch();
  const { data: currenciesResponse, isLoading } = useGetCurrenciesQuery();
  const selectedCurrency = useSelector((state: RootState) => state.currencies.selectedCurrency);

  const [inputValue, setInputValue] = useState(selectedCurrency || '');

  const currencies = useMemo(() => currenciesResponse?.data || [], [currenciesResponse]);

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
    <>
      {isLoading && <p>Loading...</p>}
      <div className={style.container}>
        <input className={style.input} type="text" value={inputValue} readOnly />
        <div className={style.imgContainer} onClick={handleChevronClick} data-testid="arrow-btn">
          <img src="assets/img/chevron-down.svg" alt="" className={style.img} />
        </div>
        {isDropdownOpen && (
          <div className={style.currencyContainer} data-testid="currency-container">
            {currencies.map((currency) => (
              <div
                className={style.currency}
                key={currency.id}
                onClick={() => handleOptionClick(currency.id)}
                data-testid="currency"
              >
                {currency.id}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CurrencySelect;

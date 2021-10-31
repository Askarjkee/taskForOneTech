import { Container } from '../../styles/container';
import { ExchangeWrapper } from './styles';
import { exchangeAPI } from '../../api/api';
import { useState, useEffect } from 'react';
import { calculateToKzt, addPercent, calculateResult } from '../../commons/ExchangeCalc';
import { getCurrentDate } from '../../commons/Date';
import { KztSvg, UsdSvg, GbpSvg, RubSvg, EurSvg } from './styles';
import refreshIcon from '../../assets/img/exchange/refresh.png';


const btns = {
    rub: 'RUB',
    gbp: 'GBP',
    eur: 'EUR',
    usd: 'USD',
    kzt: 'KZT'   
}

const initialValue = {
    exchange: {
        EUR: 0,
        GBP: 0,
        KZT: 0,
        RUB: 0,
        USD: 0
    },
    inputValue: 100,
    from: 'USD',
    to: 'KZT',
    result: 0,
}
export const Exchange = () => {
    const [currentDate, setCurrentDate] = useState(null);
    const [exchangeValueInKZT, setExchangeValueInKZT] = useState(initialValue.exchange);
    const [inputValue, setInputValue] = useState(initialValue.inputValue);
    const [calculateFrom, setCalculateFrom] = useState(initialValue.from);
    const [calculateTo, setCalculateTo] = useState(initialValue.to);
    const [result, setResult] = useState(initialValue.result);
    
    useEffect(() => {
        exchangeAPI.getExchange()
            .then(data => setExchangeValueInKZT(calculateToKzt(data)))
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        setCurrentDate(getCurrentDate('.'));
    }, [])

    // useEffect(() => {
    //     setResult(calculateResult(calculateFrom, calculateTo, exchangeValueInKZT, inputValue))
    // }, [inputValue, calculateFrom, calculateTo, exchangeValueInKZT])

    const onSubmit = (calculateFrom, calculateTo, exchangeValueInKZT, inputValue) => {
        setResult(calculateResult(calculateFrom, calculateTo, exchangeValueInKZT, inputValue))
    }

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleClick = (value) => {
        setCalculateFrom(value)
    }

    const handleClickResult = (value) => {
        setCalculateTo(value)
    }
    
    return (
        <ExchangeWrapper>
            <Container>
                <div className="exchange">
                    <div className="exchange__title">
                        Курсы безналичной конвертации валют
                    </div>
                    <div className="exchange__subtitle">
                        Курс актуален на {currentDate}
                    </div>
                    <div className="flex-container">
                        <table className="exchange__table">
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td className="exchange__table__title">Покупка</td>
                                    <td className="exchange__table__title">Продажа</td>
                                </tr>
                                <tr>
                                    <td className="exchange__table__name"><UsdSvg/>USD</td>
                                    <td className="exchange__table__buy">{exchangeValueInKZT.USD}</td>
                                    <td className="exchange__table__sell">{addPercent(exchangeValueInKZT.USD)}</td>
                                </tr>
                                <tr>
                                    <td className="exchange__table__name"><EurSvg/>EUR</td>
                                    <td className="exchange__table__buy">{exchangeValueInKZT.EUR}</td>
                                    <td className="exchange__table__sell">{addPercent(exchangeValueInKZT.EUR)}</td>
                                </tr>
                                <tr>
                                    <td className="exchange__table__name"><RubSvg/>RUB</td>
                                    <td className="exchange__table__buy">{exchangeValueInKZT.RUB}</td>
                                    <td className="exchange__table__sell">{addPercent(exchangeValueInKZT.RUB)}</td>
                                </tr>
                                <tr>
                                    <td className="exchange__table__name"><GbpSvg/>GBP</td>
                                    <td className="exchange__table__buy">{exchangeValueInKZT.GBP}</td>
                                    <td className="exchange__table__sell">{addPercent(exchangeValueInKZT.GBP)}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="exchange__calc">
                            <div className="exchange__calc__title">
                                Конвертация валюты
                            </div>
                            <div className="exchange__calc__input">
                                <input type="number" onChange={handleChange} value={inputValue}/>
                                <button className={calculateFrom === btns.usd ? "active" : null} onClick={() => handleClick(btns.usd)}>
                                    <UsdSvg/>
                                </button>
                                <button className={calculateFrom === btns.eur ? "active" : null} onClick={() => handleClick(btns.eur)}>
                                    <EurSvg/>
                                </button>
                                <button className={calculateFrom === btns.rub ? "active" : null} onClick={() => handleClick(btns.rub)}>
                                    <RubSvg/>
                                </button>
                                <button className={calculateFrom === btns.gbp ? "active" : null} onClick={() => handleClick(btns.gbp)}>
                                    <GbpSvg/>
                                </button>
                                <button className={calculateFrom === btns.kzt ? "active" : null} onClick={() => handleClick(btns.kzt)}>
                                    <KztSvg />
                                </button>
                            </div>
                            <div className="exchange__calc__input">
                                <input disabled value={`${result}`}/>
                                <button className={calculateTo === btns.usd ? "active" : null} onClick={() => handleClickResult(btns.usd)}>
                                    <UsdSvg/>
                                </button>
                                <button className={calculateTo === btns.eur ? "active" : null} onClick={() => handleClickResult(btns.eur)}>
                                    <EurSvg/>
                                </button>
                                <button className={calculateTo === btns.rub ? "active" : null} onClick={() => handleClickResult(btns.rub)}>
                                    <RubSvg/>
                                </button>
                                <button className={calculateTo === btns.gbp ? "active" : null} onClick={() => handleClickResult(btns.gbp)}>
                                    <GbpSvg/>
                                </button>
                                <button className={calculateTo === btns.kzt ? "active" : null} onClick={() => handleClickResult(btns.kzt)}>
                                    <KztSvg/>
                                </button>
                                <button onClick={() => onSubmit(calculateFrom, calculateTo, exchangeValueInKZT, inputValue)} className="exchange__calc__input__submit">
                                    <img src={refreshIcon} alt="refresh" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </ExchangeWrapper>
    )
}
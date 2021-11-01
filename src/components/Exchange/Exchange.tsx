import { useState, useEffect } from 'react';

import { Container } from '../../styles/container';
import { getCurrentDate } from '../../commons/Date';
import { CurrenciesRate } from './CurrenciesRate';
import { calculateToKzt, calculateResult } from '../../commons/ExchangeCalc';
import { exchangeAPI } from '../../api/api';
import { Title, Subtitle, FlexContainer, ExchangeCalc, ExchangeCalcTitle, ExchangeCalcItems, Btn, BtnSubmit, ExchangeWrapper } from './styles';
import { btns, content, initialValue } from './mock';

import refreshIcon from '../../assets/img/exchange/refresh.png';


export const Exchange = () => {
    const [currentDate, setCurrentDate] = useState('');
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


    const onSubmit = (calculateFrom: string, calculateTo: string, inputValue: number): void => {
        setResult(calculateResult(calculateFrom, calculateTo, exchangeValueInKZT, inputValue))
    }

    const handleChange = (event: any): void => {
        setInputValue(event.target.value)
    }

    const handleClick = (value: string): void => {
        setCalculateFrom(value)
    }

    const handleClickResult = (value: string): void => {
        setCalculateTo(value)
    }

    return (
        <ExchangeWrapper>
            <Container>
                <Title>
                    {content.title}
                </Title>
                <Subtitle>
                    {content.subtitle} {currentDate}
                </Subtitle>
                <FlexContainer>
                    <CurrenciesRate exchangeValueInKZT={exchangeValueInKZT}/>
                    <ExchangeCalc>
                        <ExchangeCalcTitle>
                            {content.calcTitle}
                        </ExchangeCalcTitle>
                        <ExchangeCalcItems>
                            <input type="number" onChange={handleChange} value={inputValue} />
                            {
                                btns.map(item => {
                                    return (
                                        <Btn 
                                        key={item.id} 
                                        active={calculateFrom === item.name} 
                                        onClick={() => handleClick(item.name)}>
                                            <img src={item.svg} alt="icon" />
                                        </Btn>
                                    )
                                })
                            }
                        </ExchangeCalcItems>
                        <ExchangeCalcItems>
                            <input disabled value={`${result}`} />
                            {
                                btns.map(item => {
                                    return <Btn 
                                            key={item.id} 
                                            active={calculateTo === item.name} 
                                            onClick={() => handleClickResult(item.name)}>
                                                <img src={item.svg} alt="icon" />
                                           </Btn>
                                })
                            }
                            <BtnSubmit onClick={() => onSubmit(calculateFrom, calculateTo, inputValue)}>
                                <img src={refreshIcon} alt="refresh" />
                            </BtnSubmit>
                        </ExchangeCalcItems>
                    </ExchangeCalc>
                </FlexContainer>
            </Container>
        </ExchangeWrapper>
    )
}
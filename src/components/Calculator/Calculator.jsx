import { useEffect, useState } from 'react';
import {
    CalcWrapper,
    CalcTitle,
    CalcInput,
    CalcValue,
    CalcAllowedValue,
    CalcSwitch,
    LeftCalcBlock,
    RightCalcBlock,
    CalcSubtitle,
    CalcResult,
    CalcPercent,
    CalcBtn,
    FlexContainer,
    Line,
    StyledSpan,
    CalcDescr,
    SwitchWrapper
} from './styles';


export const Calculator = () => {
    const [sum, setSum] = useState(1000000);
    const [time, setTime] = useState(24);
    const [checked, setChecked] = useState(false);
    const [result, setResult] = useState(100);
    const [percent, setPercent] = useState(17);

    const prettify = (num) => {
        const n = num.toString();
        return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, `$1 `);
    }

    const handleSliderSumChange = (event, newValue) => {
        setSum(newValue);
    };

    const handleSliderTimeChange = (event, newValue) => {
        setTime(newValue)
    }

    const handleSwitchChange = (event) => {
        setChecked(event.target.checked);
    };

    useEffect(() => {
        if (checked) {
            setPercent(10)
        } else {
            setPercent(17)
        }
    }, [checked])

    useEffect(() => {
        const percentForCalc = (sum * percent) / 100;
        const result = (sum + percentForCalc) / time;
        setResult(Math.ceil(result));
    }, [sum, time, percent])

    return (
        <CalcWrapper>
            <LeftCalcBlock>
                <CalcTitle>Сколько вам нужно?</CalcTitle>
                <CalcInput value={sum}
                           onChange={handleSliderSumChange}
                           min={10000}
                           step={10000}
                           max={10000000}/>
                <CalcValue>{prettify(sum)}</CalcValue>
                <FlexContainer>
                    <CalcAllowedValue>10 000 ₸</CalcAllowedValue>
                    <CalcAllowedValue>10 000 000 ₸</CalcAllowedValue>
                </FlexContainer>
                <CalcTitle>Срок кредитования</CalcTitle>
                <CalcInput value={time}
                           onChange={handleSliderTimeChange}
                           min={6}
                           step={1}
                           max={60}/>
                <CalcValue>{time} месяцев</CalcValue>
                <FlexContainer>
                    <CalcAllowedValue>6 месяцев</CalcAllowedValue>
                    <CalcAllowedValue>5 лет</CalcAllowedValue>
                </FlexContainer>
                <SwitchWrapper>
                    <CalcSwitch checked={checked} onChange={handleSwitchChange} />
                    <StyledSpan>Я получаю зарплату по карте ForteBank</StyledSpan>
                </SwitchWrapper>
                <CalcDescr>Для точного расчета необходимо оставить заявку</CalcDescr>
            </LeftCalcBlock>
            <Line />
            <RightCalcBlock>
                <CalcSubtitle>Ежемесячный платеж</CalcSubtitle>
                <CalcResult>{prettify(result)}</CalcResult>
                <CalcSubtitle>Ставка вознаграждения</CalcSubtitle>
                <CalcPercent>{percent} %</CalcPercent>
                <CalcBtn>Оформить кредит</CalcBtn>
            </RightCalcBlock>
        </CalcWrapper>
    )
}
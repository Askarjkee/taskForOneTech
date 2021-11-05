import { useEffect, useState, ChangeEvent } from 'react';
import { prettify } from '../../commons/prettify';
import { initialState } from './mock';
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
    SwitchWrapper,
    TimeValue,
    MobileLine
} from './styles';



export const Calculator = () => {
    const [sum, setSum] = useState(initialState.sum);
    const [time, setTime] = useState(initialState.time);
    const [checked, setChecked] = useState(initialState.checked);
    const [result, setResult] = useState(initialState.result);
    const [percent, setPercent] = useState(initialState.percent);


    const handleSliderSumChange = (event: Event, newValue: number | number[]): void => {
        setSum(+newValue);
    };

    const handleSliderTimeChange = (event: Event, newValue: number | number[]): void => {
        setTime(+newValue)
    }

    const handleSwitchChange = (event: ChangeEvent<HTMLInputElement>): void => {
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
                <CalcValue>{prettify(sum)} ₸</CalcValue>
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
                <TimeValue>{time} месяцев </TimeValue>
                <FlexContainer>
                    <CalcAllowedValue>6 месяцев</CalcAllowedValue>
                    <CalcAllowedValue>5 лет</CalcAllowedValue>
                </FlexContainer>
                <MobileLine/>
                <SwitchWrapper>
                    <CalcSwitch checked={checked} onChange={handleSwitchChange} />
                    <StyledSpan>Я получаю зарплату по карте ForteBank</StyledSpan>
                </SwitchWrapper>
                <CalcDescr>Для точного расчета необходимо оставить заявку</CalcDescr>
            </LeftCalcBlock>
            <Line />
            <RightCalcBlock>
                <CalcSubtitle>Ежемесячный платеж</CalcSubtitle>
                <CalcResult>{prettify(result)} ₸</CalcResult>
                <CalcSubtitle>Ставка вознаграждения</CalcSubtitle>
                <CalcPercent>{percent} %</CalcPercent>
                <CalcBtn>Оформить кредит</CalcBtn>
            </RightCalcBlock>
        </CalcWrapper>
    )
}
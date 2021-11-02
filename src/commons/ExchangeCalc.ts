import { filterObjType, calculateStringType, notFilteredObjType } from './types';


export const filterObj = (obj: notFilteredObjType ): filterObjType => {
    const { USD, EUR, GBP, RUB, KZT } = obj;

    return {
        USD,
        EUR,
        GBP,
        RUB,
        KZT
    }
}

export const calculateToKzt = (obj: notFilteredObjType): filterObjType => {
    let data: filterObjType = filterObj(obj);

    let calculatedData: filterObjType = Object.fromEntries(
        Object.entries(data).map(([key, value]: any) => [key, Math.ceil(1 / value)])
    );
    
    return calculatedData;
}

export const addPercent = (value: number, percent: number = 2): number => {
    const res = (value * percent) / 100;
    return value + res;
}

export const calculateResult = (from : calculateStringType, to : calculateStringType, current: filterObjType, inputValue: number): number => {
    const valueFrom = current[from];
    const valueTo = current[to];
    const result = (valueFrom * inputValue) / valueTo;
    return Math.ceil(result);
}




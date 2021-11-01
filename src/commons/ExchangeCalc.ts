
type FilterObjType = {
    USD: number,
    EUR: number,
    GBP: number,
    RUB: number,
    KZT: number
}

export const FilterObj = (obj: any): FilterObjType => {
    const { USD, EUR, GBP, RUB } = obj;
    const KZT = USD;
    return {
        USD,
        EUR,
        GBP,
        RUB,
        KZT
    }
}

export const calculateToKzt = (obj: any): FilterObjType => {
    let data = FilterObj(obj);
    let result: FilterObjType | any = {}
    for (let key in data) {
        result[key] = Math.ceil(1 / obj[key]);
    }
    
    return result;
}

export const addPercent = (value: number, percent: number = 2): number => {
    const res = (value * percent) / 100;
    return value + res;
}

export const calculateResult = (from : string, to : string, current: any, inputValue: number): number => {
    const fromObj = current[from];
    const toObj = current[to];
    const result = (fromObj * inputValue) / toObj;
    return Math.ceil(result);
}




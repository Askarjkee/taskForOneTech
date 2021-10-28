export const FilterObj = (obj) => {
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

export const calculateToKzt = (obj) => {
    let data = FilterObj(obj);
    let result = {}
    for (let key in data) {
        result[key] = Math.ceil(1 / obj[key]);
    }
    return result;
}

export const addPercent = (value, percent = 2) => {
    const res = (value * percent) / 100;
    return value + res;
}

export const calculateResult = (from, to, current, inputValue) => {
    const fromObj = current[from];
    const toObj = current[to];
    const result = (fromObj * inputValue) / toObj;
    return Math.ceil((result) * 100 ) / 100;
}




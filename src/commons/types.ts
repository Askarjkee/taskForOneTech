export type inputEventType = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;
export type blurEventType = React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>;

export type filterObjType = {
    USD: number,
    EUR: number,
    GBP: number,
    RUB: number,
    KZT: number
} 

export type calculateStringType = 'USD' | 'EUR' | 'GBP' | 'RUB' | 'KZT';


export type notFilteredObjType = {
    [key: string]: number  
}

export type useInputType = {
    value: string,
    onChange: (e: inputEventType) => void,
    onBlur: (e: blurEventType) => void,
    isDirty: boolean,
    isError: boolean
}
export type useValidationType = {
    isError: boolean
}
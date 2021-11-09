
import { useState, useEffect } from "react"
import { inputEventType, blurEventType, useInputType, useValidationType} from "./types";


export const useInput = (initialValue: string): useInputType => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setIsDirty] = useState(false);
    const { isError } = useValidation(value);

    const onChange = (e: inputEventType): void => {
        setValue(e.target.value)
    }

    const onBlur = (e: blurEventType): void => {
        setIsDirty(true)
    }

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        isError
    }
}

const useValidation = (value: string): useValidationType => {
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (value) {
            const regex = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{2,}$/;
            regex.test(value) ? setIsError(false) : setIsError(true)
        }

    }, [value])

    return {
        isError
    }
}


export const isValidNumber = (value: string): boolean => {
    if (value.length > 10 && !isNaN(+value)) {
        return false
    } else {
        return true
    }
}

export const isValidValue = (value: string | number ): boolean => {
    if (isNaN(+value) || +value > 7000000 || +value < 100000) {
        return true
    }
    else {
        return false
    }
}

export const isValidIin = (value: string): boolean => {
    if (isNaN(+value) || value.length !== 12) {
        return true
    } else {
        return false
    }
}


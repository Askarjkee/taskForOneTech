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


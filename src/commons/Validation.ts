import { useState, useEffect } from "react"

type inputEvent = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;
type blurEvent = React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>;
type UseInput = {
    value: string,
    onChange: (e: inputEvent) => void,
    onBlur: (e: blurEvent) => void,
    isDirty: boolean,
    isError: boolean
}
type UseValidation = {
    isError: boolean
}

export const useInput = (initialValue: string): UseInput => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setIsDirty] = useState(false);
    const { isError } = useValidation(value);

    const onChange = (e: inputEvent): void => {
        setValue(e.target.value)
    }

    const onBlur = (e: blurEvent): void => {
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

const useValidation = (value: string): UseValidation => {
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


import { useState, useEffect } from "react"


export const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setIsDirty] = useState(false);
    const { isError } = useValidation(value);

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onBlur = () => {
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

const useValidation = (value) => {
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


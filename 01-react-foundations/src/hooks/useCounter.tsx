import {useState} from "react";

interface Options {
    initialValue?: number;
}

export const useCounter = ({initialValue = 0}: Options) => {

    const [count, setCount] = useState<number>(initialValue);

    const increaseBy = (value: number): void => {
        const newValue = count + value;

        if (newValue < 0) return;

        setCount(newValue);
    }

    return {
        // Properties
        count,

        // Methods
        increaseBy,
    };
}
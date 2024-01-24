import { useEffect, useState } from "react";
import { Product, onChangeArgs } from "../interfaces/interfaces";

interface useProductProps {
    product: Product,
    onChange?: (args: onChangeArgs) => void
    value?: number,
}

export const useProduct = ({ onChange, product, value = 0 }: useProductProps) => {

    const [counter, setCounter] = useState(value);

    const increaseBy = (value: number) => {

        const newCounter = Math.max(counter + value, 0) // Calculate the new counter
        setCounter(newCounter);

        onChange && onChange({ count: newCounter, product }); // execute the function onChange it is not undefined
    }

    useEffect(() => {
        setCounter(value); // call SetCounter
    }, [value]) // each time the value is changed


    return {
        counter,
        increaseBy
    }
}
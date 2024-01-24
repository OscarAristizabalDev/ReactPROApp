import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs } from "../interfaces/interfaces";

interface useProductProps {
    product: Product,
    onChange?: (args: onChangeArgs) => void
    value?: number,
}

export const useProduct = ({ onChange, product, value = 0 }: useProductProps) => {

    const [counter, setCounter] = useState(value);

    // You can use useRef to store a value that persists across renders but doesn't trigger a re-render when updated. 
    const isControlled = useRef(!!onChange); // !!onchange using two !! we wiil recive if the onchange method exist

    const increaseBy = (value: number) => {

        // If isControlled.current is true
        if (isControlled.current) {
            return onChange!({ count: value, product })  // execute the function onChange it is not undefined
        }

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
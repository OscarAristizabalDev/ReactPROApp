import { createContext } from "react"

import { useProduct } from "../hooks/useProduct"

import { ProductCardProps, ProductContextProps } from "../interfaces/interfaces";


import styles from "../styles/styles.module.css"

// Contexto que se comporte con todos los componentes hijos
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style, onChange, value }: ProductCardProps) => {

    const { counter, increaseBy } = useProduct({ onChange, product, value });

    return (
        <Provider value={{ counter, increaseBy, product }}>

            <div
                className={`${styles.productCard} ${className}`}
                style={style}
            >
                {children}
            </div>
        </Provider>
    )
}

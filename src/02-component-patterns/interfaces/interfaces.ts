import { CSSProperties, ReactElement } from "react"

export interface ProductCardProps {
    children?: ReactElement | ReactElement[],
    className?: string,
    product: Product,
    style?: CSSProperties, // allow to work with CSSProperties
    onChange?: (args: onChangeArgs) => void, // function to call when the amount of products have chosen
    value?: number // 
}

export interface Product {
    id: string,
    image?: string,
    title: string,
}

export interface ProductTitleProps {
    className?: string,
    style?: CSSProperties, // allow to work with CSSProperties
    title?: string,
}

export interface ProductImageProps {
    className?: string,
    img?: string,
    style?: CSSProperties // allow to work with CSSProperties
}

export interface ProductButtonsProps {
    className?: string,
    style?: CSSProperties // allow to work with CSSProperties
}

export interface ProductContextProps {
    counter: number,
    product: Product
    increaseBy: (value: number) => void,
}

// Interface utilizado para el componente padre, se definen los componentes hijos
export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Buttons: (Props: ProductButtonsProps) => JSX.Element
    Image: (Props: ProductImageProps) => JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element,
}

export interface onChangeArgs {
    product: Product, 
    count: number
}

export interface ProductInCart extends Product {
    count: number
}
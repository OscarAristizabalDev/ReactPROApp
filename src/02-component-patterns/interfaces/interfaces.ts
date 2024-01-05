import { ReactElement } from "react"

export interface ProductCardProps {
    product: Product,
    children?: ReactElement | ReactElement[]
}

export interface Product {
    id: string,
    title: string,
    image?: string
}

export interface ProductContextProps {
    counter: number,
    increaseBy: (value: number) => void,
    product: Product
}

// Interface utilizado para el componente padre, se definen los componentes hijos
export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Title: ({ title }: { title?: string }) => JSX.Element,
    Image: ({ img }: { img?: string }) => JSX.Element,
    Buttons: () => JSX.Element
}
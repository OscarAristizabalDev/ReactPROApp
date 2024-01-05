import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductCardHOCProps } from "../interfaces/interfaces";

import { ProductButtons, ProductImage, ProductTitle } from ".";


export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";
export { ProductButtons } from "./ProductButtons";

// se agregan atributos a ProductCard
export const ProductCard  : ProductCardHOCProps = Object.assign(ProductCardHOC,{
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})
import { useContext } from "react";

import { ProductContext } from "./ProductCard";

import { ProductImageProps } from "../interfaces/interfaces";

import styles from "../styles/styles.module.css"
import noImage from "../assets/no-image.jpg"

export const ProductImage = ({ img, className, style }: ProductImageProps) => {

    const { product } = useContext(ProductContext);
    let imgToShow: string;

    if (img) {
        imgToShow = img;
    }
    else if (product.image) {
        imgToShow = product.image;
    } else {
        imgToShow = noImage;
    }


    return (
        <img
            className={`${styles.productImg} ${className}`}
            style={style}
            src={imgToShow} alt="Product Image"
        />
    )
}
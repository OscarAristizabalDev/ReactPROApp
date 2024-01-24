import { useState } from "react";

import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {

    // the state has array of object of the type ProductInCard, every product would have a Key
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>();

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {

        //setShoppingCart changes the shoppingCart's State
        //oldShoppingCart has the current state values
        setShoppingCart(oldShoppingCart => {

            if (count == 0 && oldShoppingCart) {
                const { [product.id]: toDelete, ...otherProducts } = oldShoppingCart; // with destructuring array, the product with count 0 is taking 
                // and the other products are taking in ...demasProducto

                // Return only ...demasProductos
                return { ...otherProducts };
            }
            // The next is the correct way to modified shoppingCart
            return {
                ...oldShoppingCart, // using spread operator will take all oldShoppingCart properties
                [product.id]: { ...product, count }    // using spread operator will take the new product properties, and the count propierty
                // is add to the product        
            }
        })
    }

    return {
        shoppingCart,
        onProductCountChange
    }

}
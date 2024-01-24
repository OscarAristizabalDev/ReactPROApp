import { useState } from "react";

import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {

    // the state has array of object of the type ProductInCard, every product would have a Key
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>();

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {

        //setShoppingCart changes the shoppingCart's State
        //oldShoppingCart has the current state values
        setShoppingCart(oldShoppingCart => {

            // If oldShoppingCart is not undefined then take the oldShoppingCart[product.id] if exist, else the producto will be ...product , count: 0
            const productInCart: ProductInCart = oldShoppingCart && oldShoppingCart![product.id] || { ...product, count: 0 };

            // If productInCard.count is greater than zero is because the product is chosen
            if (productInCart && Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count;

                // The next is the correct way to modified shoppingCart
                return {
                    ...oldShoppingCart, // using spread operator will take all oldShoppingCart properties
                    [product.id]: productInCart
                }
            }

            // else, delete the product
            if (oldShoppingCart) {
                // delete the product
                const { [product.id]: toDelete, ...otherProducts } = oldShoppingCart; // with destructuring array, the product with count 0 is taking 
                // and the other products are taking in ...demasProducto

                // Return only ...demasProductos
                return { ...otherProducts };
            }

            // if (count == 0 && oldShoppingCart) {
            //     const { [product.id]: toDelete, ...otherProducts } = oldShoppingCart; // with destructuring array, the product with count 0 is taking 
            //     // and the other products are taking in ...demasProducto

            //     // Return only ...demasProductos
            //     return { ...otherProducts };
            // }
            // // The next is the correct way to modified shoppingCart
            // return {
            //     ...oldShoppingCart, // using spread operator will take all oldShoppingCart properties
            //     [product.id]: { ...product, count }    // using spread operator will take the new product properties, and the count propierty
            //     // is add to the product        
            // }
        })
    }

    return {
        shoppingCart,
        onProductCountChange
    }

}
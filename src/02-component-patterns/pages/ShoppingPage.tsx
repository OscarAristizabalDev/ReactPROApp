import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { useShoppingCart } from "../hooks/useShoppingCart";
import { productos } from "../data/products";

import '../styles/custom-styles.css'


export const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange } = useShoppingCart();

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap"
            }}>

                {
                    productos.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            className="bg-dark text-white"
                            onChange={(e) => onProductCountChange(e)}
                            value={shoppingCart ? shoppingCart![product.id]?.count : 0} // if ShoppingCart is not undefined take the count value
                        >
                            <ProductImage className="custom-image" />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))
                }

            </div>

            <div className="shopping-card">
                {
                    // Object entries is a JavaScript Method return an array of a given object's own enumerable string-keyed property key-value pairs.
                    // shoppingCart has the object's
                    shoppingCart && Object.entries(shoppingCart || {}).map(([key, product]) => (
                        <ProductCard
                            key={key}
                            product={product}
                            className="bg-dark text-white"
                            style={{ width: '100px' }}
                            onChange={(e) => onProductCountChange(e)}
                            value={product.count}
                        >
                            <ProductImage className="custom-image" />
                            <ProductButtons
                                className="custom-buttons"
                                style={{
                                    display: 'flex',
                                    justifyContent: "center"
                                }}
                            />
                        </ProductCard>
                    ))
                }
            </div>

            <div>
                <code>
                    {
                        JSON.stringify(shoppingCart)
                    }
                </code>
            </div>
        </div>
    )
}

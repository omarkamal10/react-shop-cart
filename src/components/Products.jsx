import React from 'react'

export default function Products({products}) {
    return (
        <div>
            <ul className="products">
                {products.map((product) => (
                    <li>
                        <div className="product">
                            <a href="#">
                                <img src={product.image} alt={product.title}/>
                                <p>{product.title}</p>
                            </a>
                            <div className="product-price">
                                <div>${product.price}</div>  
                                <div><button className="button primary">Add to Cart</button></div>  
                            </div>

                        </div>

                    </li>
                ))}
            </ul>
        </div>
    )
}

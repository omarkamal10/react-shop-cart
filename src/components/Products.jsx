import { model } from 'mongoose'
import React, { useState } from 'react'
import {Fade, Zoom} from 'react-awesome-reveal'
import Modal from "react-modal"
export default function Products({products, addToCart}) {
    const [modal,setModal] = useState({product:null})

    const openModal = (product) => {
        setModal({product})
    }

    const closeModal = () => {
        setModal({product:null})
    }

    const {product} = modal;

    return (
        <div>
            <Fade>
            <ul className="products">
                {products.map((product) => (
                    <li>
                        <div className="product">
                            <a href="#" onClick={() => openModal(product)}>
                                <img src={product.image} alt={product.title}/>
                                <p>{product.title}</p>
                            </a>
                            <div className="product-price">
                                <div>${product.price}</div>  
                                <div><button onClick={()=> addToCart(product)} className="button primary">Add to Cart</button></div>  
                            </div>

                        </div>

                    </li>
                ))}
            </ul>
            </Fade>
            {product && 
            <Modal isOpen={true} onRequestClose={closeModal}>
                <Zoom>
                    <button className="close-modal" onClick={closeModal}>x</button>
                    <div className="product-details">
                        <img src={product.image} alt={product.title} />
                        <div className="product-details-description">
                            <p><strong>{product.title}</strong></p>
                            <p>{product.description}</p>
                            <p>Available Sizes:{" "} 
                            {product.availableSizes.map((size) => (
                                <span>{" "} <button className="button">{size}</button></span>
                            ))}</p>
                            <div className="product-price">
                                <div>${product.price}</div>
                                <button className="button primary" 
                                onClick={() => {
                                    addToCart(product)
                                    closeModal()
                                }}>Add to Cart</button>
                            </div>
                        </div>
                    </div>

                </Zoom>
            </Modal>}
        </div>
    )
}

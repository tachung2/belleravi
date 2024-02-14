import React from 'react';
import './ProductItem.css'

function ProductItem({title, image, description}) {
    return (
        <div className="product_box">
            <img src={image} alt={title} className="product_image" />
            <h3 className="product_name">{title}</h3>
            <p className="product_description">{description}</p>
        </div>
    )
}
export default ProductItem;
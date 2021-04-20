import React from 'react';

const productData = {
    1: {
        name: '2박 3일',
        description: '은하수'
    },
    2: {
        name: '3박 4일',
        description: '밤하늘'
    }
};

function Product({ match }) {
    const { productid } = match.params;
    const product = productData[productid];
    
    if (!product) {
        return <div>존재하지 않는 상품 입니다. </div>
    }

    return (
        <div>
            <h3>
            {productid} ({product.name})
            </h3>
            <p>{product.description}</p>
        </div>
    )
}

export default Product;
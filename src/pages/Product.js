import React, { useState, useEffect } from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import ProductItem from '../component/ProductItem';

function Product() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // GET 요청을 보낼 API 주소
        const apiUrl = 'https://belleravi.co.kr/api/productlist';

        // fetch를 사용하여 GET 요청 보내기
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // 응답 데이터를 상태에 저장
                setProducts(data);
            })
            .catch(error => console.error('Error fetching product list:', error));
    }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때만 실행

    return (
        <div className="pro_section">
            <div className="hero">
                <img src="img/hero.png" alt="hero" className="hero_img" />
            </div>
            <div className="pro_title">벨라비 크루 제품</div>
            <p>벨라비에서 제공하는 제품들입니다</p>
            <div className="product_container">
                {products.map(product => (
                    <Link to={`/Product/${product.id}`} key={product.id}>
                        <ProductItem
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            image={product.imgPath}
                            description={product.description}
                        />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Product;

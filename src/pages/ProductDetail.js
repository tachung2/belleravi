import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css'

function NewsDetail() {
    const [productDetail, setProductDetail] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        // GET 요청을 보낼 API 주소
        const apiUrl = `https://belleravi.co.kr/api/product/${id}`;
        
        // fetch를 사용하여 GET 요청 보내기
        fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
            // 응답 데이터를 상태에 저장
            setProductDetail(data);

            
          })
          .catch(error => console.error('Error fetching news detail:', error));
    }, [id]); // newsId가 변경될 때마다 실행


    return (
        <div className="productDetail">
            <div className="productDetail_container">
                <div className="productDetail_box">
                    <h1>{productDetail.title}</h1>
                    <div className="productDetail_description">{productDetail.description}</div>
                    <img src={productDetail.imgPath} alt="img" />
                    <div className="productsDetail_content" dangerouslySetInnerHTML={{ __html: productDetail.content }}></div>
                </div>
            </div>
        </div>
    )
}

export default NewsDetail;

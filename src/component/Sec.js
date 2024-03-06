import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './Sec.css';


function Sec() {
    const [newsData, setNewsData] = useState([]);
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        // GET 요청을 보낼 API 주소
        const apiUrl = 'https://belleravi.co.kr/api/newslist';
    
        // fetch를 사용하여 GET 요청 보내기
        fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
            // 응답 데이터에서 imgPath를 추출하여 상태에 저장
            setNewsData(data);
          })
          .catch(error => console.error('Error fetching news list:', error));
      }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때만 실행

      useEffect(() => {
        // GET 요청을 보낼 API 주소
        const apiUrl = 'https://belleravi.co.kr/api/productlist';
    
        // fetch를 사용하여 GET 요청 보내기
        fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
            // 응답 데이터에서 imgPath를 추출하여 상태에 저장
            setProductData(data);
          })
          .catch(error => console.error('Error fetching news list:', error));
      }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때만 실행

    return (
        <div className='sec'>
            <h1>뉴스</h1>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
            >
                {newsData.map((news) => (
                    <SwiperSlide key={news.id}>
                        <img src={news.imgPath} alt={`img`} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <h1>상품</h1>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
            >
                {productData.map((product) => (
                    <SwiperSlide key={product.id}>
                        <img src={product.imgPath} alt={`img`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
export default Sec;

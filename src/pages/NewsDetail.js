import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './NewsDetail.css'

function formatDateString(dateString) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
  }

function NewsDetail() {
    const [newsDetail, setNewsDetail] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        // GET 요청을 보낼 API 주소
        const apiUrl = `https://port-0-belleravihomeapi-1gksli2alpurg9zr.sel4.cloudtype.app/api/news/${id}`;
        
        // fetch를 사용하여 GET 요청 보내기
        fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
            // 응답 데이터를 상태에 저장
            setNewsDetail(data);

            
          })
          .catch(error => console.error('Error fetching news detail:', error));
    }, [id]); // newsId가 변경될 때마다 실행

    const formattedDate = formatDateString(newsDetail.date);

    return (
        <div className="newsDetail">
            <div className="newsDetail_container">
                <div className="newsDetail_box">
                    <h1>{newsDetail.title}</h1>
                    <div className="newsDetail_tag">{newsDetail.tag}</div>
                    <img src={newsDetail.imgPath} alt="img" />
                    <p>{formattedDate}</p>
                    <div className="newsDetail_content">{newsDetail.content}</div>
                </div>
            </div>
        </div>
    )
}

export default NewsDetail;
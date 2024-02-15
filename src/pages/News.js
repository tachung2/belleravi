import React, { useState, useEffect } from 'react';
import NewsItem from '../component/NewsItem';
import { Link } from 'react-router-dom';
import './News.css';


function News() {
    const [activeFilter, setActiveFilter] = useState('전체');
    const [newsData, setNewsData] = useState([]);

    const handleFilterClick = (filterName) => {
        setActiveFilter(filterName);
    }

    useEffect(() => {
      // GET 요청을 보낼 API 주소
      const apiUrl = 'https:/belleravi.co.kr/api/newslist';

      // fetch를 사용하여 GET 요청 보내기
      fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
              // 응답 데이터를 상태에 저장
              setNewsData(data);
          })
          .catch(error => console.error('Error fetching product list:', error));
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때만 실행

  const filteredNewsData = activeFilter === '전체' ? newsData : newsData.filter(news => news.tag === activeFilter);
    
    return (
        <div className="noticeboard">
            <div className="notice_container">
              <div className="recent_news">RECENT NEWS</div>
              <div className="filter_container">
                  {['전체', '공지', '소식', '이벤트'].map((filterName) => (
                      <div 
                          key={filterName} 
                          className={`filter_box ${activeFilter === filterName ? 'active' : ''}`}
                          onClick={() => handleFilterClick(filterName)}
                      >
                          {filterName}
                      </div>
                  ))}
              </div>
              <div className="news_container">
                  {filteredNewsData.map((news) => (
                    <Link to={`/news/${news.id}`} key={news.id}>
                      <NewsItem key={news.id} {...news}/>
                    </Link>
                  ))}
              </div>
            </div>
        </div>
    )

}

export default News;

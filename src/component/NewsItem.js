import React from 'react';
import './NewsItem.css';

const NewsItem = ({ imgPath, tag, title, date }) => {
    const formattedDate = new Intl.DateTimeFormat('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date(date));

    return (
        <div className="news-item">
            <div className="news-image">
                <img src={imgPath} alt={title} />
            </div>
            <div className="news-info">
                <span className="news-tag">{tag}</span>
                <h3>{title}</h3>
                <span className="news-date">{formattedDate}</span>
            </div>
        </div>
    )
}

export default NewsItem;
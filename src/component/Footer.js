import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'

function Footer() {
    return (
        <footer>
            <div className="social_text">Crew Social media</div>
            <div className="link_icon">
                {/* 유튜브 아이콘 */}
                <a href="https://www.youtube.com/@belleravl" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                {/* 인스타그램 아이콘 */}
                <a href="https://cafe.naver.com/belleravi" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faMugSaucer} size="2x" />
                </a>
            </div>
            <div className="crew_title">BELLERAVI</div>
            <span><em>ⓒ Copyright 2024</em></span>
            <span>All rights reserved. Powered by <strong>tachung</strong></span>
        </footer>
    )
}

export default Footer;
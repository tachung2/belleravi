import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './Header.css'

function useScrollToTop() {
    const location = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]); // location이 변경될 때마다 스크롤을 맨 위로 이동
}
  

function Header() {
    useScrollToTop();
    const location = useLocation();
    const [isSticky, setIsSticky] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // 사이드바 토글 상태
    const [logoImage, setLogoImage] = useState('img/belleravi2.png');
    const [buttonClicked, setButtonClicked] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const shouldBeSticky = window.scrollY > 0;
            setIsSticky(shouldBeSticky);

            // 스크롤 위치에 따라 로고 이미지 변경
            const newLogoImage = shouldBeSticky ? process.env.PUBLIC_URL + '/img/belleravi.png' : process.env.PUBLIC_URL + '/img/belleravi2.png';
            
            setLogoImage(newLogoImage);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    

    useEffect(() => {
        // 사이드바가 열릴 때 body 스크롤을 비활성화
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }

        // 컴포넌트가 언마운트되거나 사이드바가 닫힐 때 스크롤 복원
        return () => {
            document.body.style.overflow = 'visible';
        };
    }, [isMobileMenuOpen]); // 의존성 배열에 isMobileMenuOpen을 추가

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen); // 토글 상태 업데이트
        setButtonClicked(!buttonClicked);
    }
    const buttonClass = buttonClicked ? 'menu-toggle clicked' : 'menu-toggle';
    const logoClass = buttonClicked ? 'logo overlay' : 'logo';

    return (
        <>
            {isMobileMenuOpen && <div className="overlay" onClick={toggleMobileMenu}></div>}
            <header className={isSticky ? 'sticky' : ''}>
                <button className={buttonClass} onClick={toggleMobileMenu}>{buttonClicked ? 'X' : '☰'}</button>
                <NavLink to="/"><img className={logoClass} alt="logo" src={logoImage}></img></NavLink>
                <ul className={`navLinks ${isMobileMenuOpen ? 'open' : ''}`}>
                    <li><NavLink to="/About" className={({ isActive }) => isActive ? 'activeLink' : ''}>ABOUT</NavLink></li>
                    <li><NavLink to="/News" className={({ isActive }) => isActive ? 'activeLink' : ''}>NEWS</NavLink></li>
                    <li><NavLink to="/Member" className={({ isActive }) => isActive ? 'activeLink' : ''}>MEMBER</NavLink></li>
                    <li><NavLink to="/Product" className={({ isActive }) => isActive ? 'activeLink' : ''}>PRODUCT</NavLink></li>
                </ul>
            </header>
        </>
    )
}

export default Header;
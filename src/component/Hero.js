import React,{ useState, useEffect } from 'react';
import './Hero.css';



function Hero() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedImages, setLoadedImages] = useState(0);
    const totalImages = 16; // 총 이미지 개수

    const handleImageLoad = () => {
        setLoadedImages(prev => prev + 1);
    };

    useEffect(() => {
        if (loadedImages >= totalImages) {
            setIsLoading(false);
        }
    }, [loadedImages, totalImages]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section>
            {isLoading && <div className="loading-indicator"><div className="spinner"></div> {/* 로딩 스피너 추가 */}</div>}
            <img loading="lazy" src="img/background.jpg" onLoad={handleImageLoad} alt="background" id="background" style={{ transform: `translateY(${offsetY * -0.25}px)` }}></img>
            <img loading="lazy" src="img/cloud.png" onLoad={handleImageLoad} alt="cloud" id="cloud" style={{ transform: `translateY(${offsetY * -0.25}px)` }}></img>
            <img loading="lazy" src="img/moon.png" onLoad={handleImageLoad} alt="moon" id="moon" style={{ transform: `translateY(${offsetY * -0.1}px)` }}></img>
            <img loading="lazy" src="img/mountain1.png" onLoad={handleImageLoad} alt="mountain1" id="mountain1" style={{ transform: `translateY(${offsetY * 0.5}px)` }}></img>
            <img loading="lazy" src="img/cloud2.png" onLoad={handleImageLoad} alt="cloud2" id="cloud2" style={{ transform: `translateY(${offsetY * 0.45}px)` }}></img>
            <img loading="lazy" src="img/mountain2.png" onLoad={handleImageLoad} alt="mountain2" id="mountain2" style={{ transform: `translateY(${offsetY * 0.8}px)` }}></img>
            <img loading="lazy" src="img/water1.png" onLoad={handleImageLoad} alt="water1" id="water1" style={{ transform: `translateX(${offsetY * -0.1}px) translateY(${offsetY * 0.8}px)` }}></img>
            <img loading="lazy" src="img/castle.png" onLoad={handleImageLoad} alt="castle" id="castle" style={{ transform: `translateY(${offsetY * 0.8}px)` }}></img>
            <img loading="lazy" src="img/mountain3.png" onLoad={handleImageLoad} alt="mountain3" id="mountain3" style={{ transform: `translateY(${offsetY * 0.8}px)` }}></img>
            <img loading="lazy" src="img/water2.png" onLoad={handleImageLoad} alt="water2" id="water2" style={{ transform: `translateY(${offsetY * 0.25}px)` }}></img>
            <img loading="lazy" src="img/water3.png" onLoad={handleImageLoad} alt="water3" id="water3" style={{ transform: `translateY(${offsetY * 0.25}px)` }}></img>
            <img loading="lazy" src="img/water4.png" onLoad={handleImageLoad} alt="water4" id="water4" style={{ transform: `translateY(${offsetY * 0.25}px)` }}></img>
            <img loading="lazy" src="img/water5.png" onLoad={handleImageLoad} alt="water5" id="water5" style={{ transform: `translateY(${offsetY * 0.5}px)` }}></img>
            <img loading="lazy" src="img/lantern.png" onLoad={handleImageLoad} alt="lantern" id="lantern" style={{ transform: `translateY(${offsetY * 0.25}px)` }}></img>
            <img loading="lazy" src="img/water6.png" onLoad={handleImageLoad} alt="water6" id="water6" style={{ transform: `translateX(${offsetY * -0.25}px) translateY(${offsetY * 0.25}px)` }}></img>
            <img loading="lazy" src="img/boat.png" onLoad={handleImageLoad} alt="boat" id="boat"style={{ transform: `translateY(${offsetY * 0.25}px)` }}></img>
            <img loading="lazy" src="img/chain.png" onLoad={handleImageLoad} alt="chain" id="chain" style={{ transform: `translateY(${offsetY * 0.25}px)` }}></img>
            <img loading="lazy" src="img/light.png" onLoad={handleImageLoad} alt="light" id="light" style={{ transform: `translateY(${offsetY * 0.25}px)` }}></img>
            <img loading="lazy" src="img/light2.png" onLoad={handleImageLoad} alt="list2" id="light2" style={{ transform: `translateY(${offsetY * 0.25}px)` }}></img>
            <div className='cover'></div>
        </section>
    )
}
export default Hero;
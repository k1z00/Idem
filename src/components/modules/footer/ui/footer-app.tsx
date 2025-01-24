
import Carousel from './slider';
import '../style/footer.css'
import { useState, useEffect } from 'react';

const Footer: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [but, setBut] = useState(false)

    const num = but ? 6 : 4

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % num);
    }

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + num) % num);
    };



    const checkScreenSizes = () => {
        setIsMobile(window.innerWidth <= 375);
        setBut(window.innerWidth <= 768);

    };

    useEffect(() => {
        checkScreenSizes();
        window.addEventListener('resize', checkScreenSizes);
        return () => window.removeEventListener('resize', checkScreenSizes);
    }, []);

    return (
        <footer className="footer">
            <div className="footer__container container-width">
                <div className="footer_items margin-items">
                    <div className='items_head'>
                        <div className="items_text">
                            <h1>особенности работы</h1>
                            <h3>компании Saffari Estate</h3>
                        </div>
                        {!isMobile && <div className="carousel-controls">
                            <button
                                className="carousel__button prev"
                                onClick={goToPrevSlide}
                            >
                                <img src="image/layer.png" alt="Назад" />
                            </button>
                            <button
                                className="carousel__button next"
                                onClick={goToNextSlide}
                            >
                                <img src="image/layer 1.png" alt="Вперед" />
                            </button>
                        </div>}

                    </div>
                    <div className="carousel-wrapper">
                        <Carousel currentIndex={currentIndex} onNext={goToNextSlide} onPrev={goToPrevSlide} />
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;

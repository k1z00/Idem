import React from 'react';


interface CarouselProps {
    currentIndex: number;
    onNext: () => void;
    onPrev: () => void;
}

const Carousel: React.FC<CarouselProps> = ({ currentIndex }) => {
    const slides = [
        { id: 1, title: 'Большая база', content: 'У нас самая большая база актуальных и эксклюзивных объектов элитной недвижимости', value: "01", src: 'Посмотреть' },
        { id: 2, title: 'надежность', content: 'Мы гарантируем абсолютую безопасность и конфиденциальность по сделкам', value: "02", src: 'Узнать' },
        { id: 3, title: 'опыт', content: 'Наша команда имеет огромный опыт продаж недвижимости в элитном сегменте', value: "03", src: 'Изучить' },
        { id: 4, title: 'Закрытые предложения', content: 'У нас самая большая база актуальных и эксклюзивных объектов элитной недвижимости', value: "04", src: 'Получить' },
        { id: 5, title: 'Большая база', content: 'Мы гарантируем абсолютую безопасность и конфиденциальность по сделкам', value: "05", src: 'Посмотреть' },
        { id: 6, title: 'надежность', content: 'Есть объекты, которые предлагаем только мы', value: "06", src: 'Узнать' },
        { id: 7, title: 'опыт', content: 'Наша команда имеет огромный опыт продаж недвижимости в элитном сегменте', value: "07", src: 'Изучить' },
        { id: 8, title: 'Закрытые предложения', content: 'У нас самая большая база актуальных и эксклюзивных объектов элитной недвижимости', value: "08", src: 'Получить' },
    ];


    return (
        <div className="carousel">
            <div className="carousel__container">
                <div
                    className="carousel__slides"
                    style={{ transform: `translateX(-${currentIndex * 50}%)` }}
                >
                    {slides.map((slide) => (
                        <>
                            <div key={slide.id} className="carousel__slide">
                                <div className="carousel__slide-content">
                                    <h1 className='slide_number'>{slide.value}</h1>
                                    <h3>{slide.title}</h3>
                                    <div className='carousel__slide_bottom'>
                                        <p>{slide.content}</p>
                                        <a href="">{slide.src}</a>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;

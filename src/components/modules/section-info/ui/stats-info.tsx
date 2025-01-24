import data from "../../../../json/data.json";
import { useState, useEffect } from 'react';

const Stats = () => {
    const { stats } = data;
    const [isMobile, setIsMobile] = useState(false);

    const checkScreenSize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const statsToShow = isMobile ? stats.slice(0, -1) : stats;

    return (
        <>
            <div className="glav">
                <div className="section_infos">
                    <div className="info__stats">
                        {statsToShow.map((stat) => (
                            <div className="stat" key={stat.id}>
                                <h4 className="stat__value">{stat.value}</h4>
                                <span className="stat__label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                    <div className="info_text">
                        <span className="text_text">
                            Жилой комплекс из четырех клубных домов класса де-люкс в английском стиле,
                            расположенный в собственном парке площадью 3 га в районе Хамовники. Авторы
                            интерьеров жилого комплекса и дизайн частного парка – дизайнеры мировой величины.
                            Так, общественные зоны оформляет Дэвид Линли, племянник королевы Великобритании
                            и глава компании LINLEY, а настоящий английский парк для жителей
                        </span>
                    </div>
                </div>
                {isMobile && <p className="info_more">Узнать подробнее</p>}
            </div>

        </>
    );
};

export default Stats;

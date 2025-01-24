import ImagesInfo from "./images-info"
import Stats from "./stats-info"
import '../style/info-style.css'




const InfoApp: React.FC = () => {



    return (
        <div className="section__wrapper">
            <section className="section__info container-width">
                <div className="section__content margin-items">
                    <div className="section__title ">
                        <h1 className="title__title">
                            Knightsbridge private park – элитный район Лондона в центре
                        </h1>
                    </div>
                  <Stats />
                </div>
                <div className="section__images">
                    <ImagesInfo />
                </div>
            </section>
        </div>

    )
}

export default InfoApp
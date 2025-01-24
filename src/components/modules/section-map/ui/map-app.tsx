import '../style/style-map.css';
import data from '../../../../json/data.json';
import Map from './map';

interface Label {
    id: number;
    text: string;
    value: number;
}

const MapApp: React.FC = () => {

    const { label } = data;

    const LabelLi: Label[] = label;

    return (
        <section className="section__map container-width">
            <div className="map__container margin-items">
                <div className="map__items">
                    <div className="map__items_side">
                        <h1 className="side_title">на карте</h1>
                        <div className='side_ul'>
                            {LabelLi.map((item) => (
                                <div className="side_li" key={item.id}>
                                    <p className='side_li_text'>{item.text} </p> <p className="side_li_value">{item.value} </p>
                                </div>

                            ))}
                        </div>
                    </div>
                    <div className='item_map'>
                        <Map />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapApp;

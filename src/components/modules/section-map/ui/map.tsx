import React from 'react';
import MapSetting from './map-setting';







const Map: React.FC = () => {

    interface Marker {
        coordinates: [number, number];
        title: string;
        description?: string;
    }

    const markers: Marker[] = [
        {
            coordinates: [54.3141, 48.4032],
            title: "Ульяновск",
            description: "Город на Волге"
        },
        {
            coordinates: [54.3355, 48.4035],
            title: "Близкий объект 1",
            description: "Рядом с Ульяновском"
        },
        {
            coordinates: [54.3045, 48.4028],
            title: "Близкий объект 2",
            description: "Рядом с Ульяновском"
        },
        {
            coordinates: [54.3178, 48.4042],
            title: "Близкий объект 3",
            description: "Рядом с Ульяновском"
        },
        {
            coordinates: [54.3178, 48.4042],
            title: "Близкий объект 3",
            description: "Рядом с Ульяновском"
        },
        {
            coordinates: [54.31, 48.403],
            title: "Близкий объект 3",
            description: "Рядом с Ульяновском"
        }
    ]





    return (

        <MapSetting
            markers={markers}
            center={[54.3141, 48.4032]} // Центр карты (Москва)
            zoom={12} // Уровень масштабирования
        />

    );
};

export default Map;
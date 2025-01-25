import React, { useEffect, useRef } from 'react';

interface Marker {
    coordinates: [number, number];
    hintContent?: string;
    balloonContent?: string;
}

interface YandexMapProps {
    center: [number, number];
    zoom: number;
    markers: Marker[];
}

const MapSetting: React.FC<YandexMapProps> = ({ center, zoom, markers }) => {
    const mapRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!window.ymaps) {
            console.error('Yandex Maps API не загружен');
            return;
        }
        window.ymaps.ready(() => {
            if (!mapRef.current) return;
            const map = new window.ymaps.Map(mapRef.current, {
                center: center,
                zoom: zoom,
            });
            markers.forEach(marker => {
                const placemark = new window.ymaps.Placemark(marker.coordinates, {
                    hintContent: marker.hintContent || '',
                    balloonContent: marker.balloonContent || '',
                });
                map.geoObjects.add(placemark);
            });
        });
    }, [center, zoom, markers]);

    return (
        <div
            ref={mapRef}
            className='map'
        />
    );
};

export default MapSetting;

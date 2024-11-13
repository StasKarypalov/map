import React, { useState, useEffect } from 'react';
import { YMaps, Map } from '@pbe/react-yandex-maps';
import Geolocation from './Geolocation';
import Marker from './Marker';
import Search from './Search';
import RouteMap from './RouteMap';
import MarkerLegend from './MarkerLegend'; // Импортируем новый компонент


const Maps = () => {
    const [geolocation, setGeolocation] = useState(null);
    const [searchedPosition, setSearchedPosition] = useState(null);
    // const [pointA, setPointA] = useState(null);
    // const [pointB, setPointB] = useState(null);

    // const handleAddRoute = (map) => {
    //     if (pointA && pointB) {
    //         if (map.ymaps && map.ymaps.multiRouter) {
    //             const ymaps = map.ymaps;
    
    //             const multiRoute = new ymaps.multiRouter.MultiRoute(
    //                 {
    //                     referencePoints: [pointA, pointB],
    //                     params: {
    //                         routingMode: 'auto'
    //                     }
    //                 },
    //                 {
    //                     boundsAutoApply: true
    //                 }
    //             );
    
    //             map.geoObjects.add(multiRoute);
    //         } else {
    //             console.error('YMaps or multiRouter is not available');
    //         }
    //     }
    // };
    // useEffect(() => {
    //     if (geolocation) {
    //         setPointA({ lat: geolocation.lat, lng: geolocation.lng });
    //     }
    // }, [geolocation]);

    // useEffect(() => {
    //     if (searchedPosition) {
    //         setPointB({ lat: searchedPosition.lat, lng: searchedPosition.lng });
    //     }
    // }, [searchedPosition]);

    return (
        <div>
            <Geolocation setGeolocation={setGeolocation} />
            <Search onSearch={setSearchedPosition} />
            <YMaps>
                <div>
                    <Map defaultState={{ center: [geolocation?.lat, geolocation?.lng] || [55.751574, 37.573856], zoom: 9 }} width={1000} height={700}>
                        {geolocation && <Marker position={[geolocation.lat, geolocation.lng]} hintContent="Мое местоположение" />}
                        {searchedPosition && <Marker position={[searchedPosition.lat, searchedPosition.lng]} hintContent="Место поиска" />}
                        {/* {pointA && pointB && <RouteMap locationA={pointA} locationB={pointB} addRoute={handleAddRoute} />} */}
                    </Map>
                    <MarkerLegend />
                </div>
            </YMaps>
        </div>
    );
}

export default Maps;
import React, { useState } from 'react';
import { YMaps, Map } from '@pbe/react-yandex-maps';
import Geolocation from './Geolocation';
import Marker from './Marker';
import Search from './Search';

const Maps = () => {
    const [geolocation, setGeolocation] = useState(null);
    const [searchedPosition, setSearchedPosition] = useState(null);

    return (
        <div>
            <Geolocation setGeolocation={setGeolocation} />
            <Search onSearch={setSearchedPosition} />
            <YMaps>
                <div>
                    <Map defaultState={{ center: [geolocation?.lat, geolocation?.lng] || [55.751574, 37.573856], zoom: 9, }}width={1000} height={700}>
                        {geolocation && <Marker position={[geolocation.lat, geolocation.lng]} hintContent="Мое местоположение" />}
                        {searchedPosition && <Marker position={[searchedPosition.lat, searchedPosition.lng]} hintContent="Место поиска" />}
                    </Map>
                </div>
            </YMaps>
        </div>
    );
}

export default Maps;
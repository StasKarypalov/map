import React, { useRef } from 'react';
import { YMaps, Map } from '@pbe/react-yandex-maps';

const RouteMap = ({ locationA, locationB, addRoute }) => {
    const map = useRef(null);

    return (
        <div className="RouteMap">
            <YMaps>
                <Map
                    modules={["multiRouter.MultiRoute"]}
                    defaultState={{ center: locationA, zoom: 12 }}
                    instanceRef={map}
                    onLoad={() => addRoute(map.current)}
                />
            </YMaps>
        </div>
    );
};

export default RouteMap;
import React, { useEffect } from 'react';
import { YMaps, Map, GeolocationControl } from '@pbe/react-yandex-maps';

const RouteMap = ({ ymaps, start, end }) => {
    useEffect(() => {
        if (ymaps && start && end) {
            const multiRoute = new ymaps.multiRouter.MultiRoute(
                {
                    referencePoints: [start, end],
                    params: {
                        routingMode: 'auto'
                    }
                },
                {
                    boundsAutoApply: true
                }
            );

            ymaps.modules.require(['MultiRouteCustomView'], function (MultiRouteCustomView) {
                const multiRouteCustomView = new MultiRouteCustomView();
                multiRoute.options.set('routeView', multiRouteCustomView);
            });

            ymaps.modules.require(['multiRouter.MultiRoute']).then(function () {
                ymaps.geocode(start).then((res) => {
                    multiRoute.model.setReferencePoints([res.geoObjects.get(0).geometry.getCoordinates(), end]);
                });
            });
        }
    }, [ymaps, start, end]);

    return null;
};

export default RouteMap;
import React from 'react';
import { Placemark } from '@pbe/react-yandex-maps';

const Marker = ({ position, hintContent }) => {
    return <Placemark geometry={position} properties={{ hintContent }} />;
}

export default Marker;
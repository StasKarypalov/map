import React, { useEffect, useState } from 'react';

const Geolocation = ({ setGeolocation }) => {
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setGeolocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                },
                (error) => {
                    console.error('Error getting user location:', error);
                }
            );
        } else {
            console.log('Geolocation is not supported by this browser.');
        }
    }, [setGeolocation]);

    return null; 
}

export default Geolocation;
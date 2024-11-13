import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        try {
            const response = await fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=2bacd14f-658f-4a53-afa4-0dbaefc0f516&geocode=${searchQuery}&format=json`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();

            const coordinates = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');
            onSearch({ lat: coordinates[1], lng: coordinates[0] });
            setError(null); 
        } catch (error) {
            console.error('Error during search:', error);
            alert('Произошла ошибка при поиске. Пожалуйста, попробуйте еще раз.');
        }
        ///
        {

        }
    };

    return (
        <div>
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Введите название места"
            />
            <button onClick={handleSearch}>Поиск</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Search;
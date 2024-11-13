import React from 'react';

const MarkerLegend = () => {
    return (
        <div style={{ position: 'absolute', top: 10, right: 10, background: 'white', padding: 10, borderRadius: 5 }}>
            <h3>Список Маркеров</h3>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 5 }}>
                <div style={{ width: 20, height: 20, background: 'blue', marginRight: 5, borderRadius: '50%' }}></div>
                <span>Мое местоположение</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: 20, height: 20, background: 'blue', marginRight: 5, borderRadius: '50%' }}></div>
                <span>Место поиска</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: 20, height: 20, background: 'green', marginRight: 5, borderRadius: '50%' }}></div>
                <span>Достопримечательности</span>
            </div>
        </div>
    );
};

export default MarkerLegend;
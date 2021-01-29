import React from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import placeMarkIcon from "../../assets/img/placemark-icon.png";

const megaPlaceMark = {
    geometry: [43.2638634684, 76.9304891347],
    properties: {
        balloonContent: 'Mega Park Алматы'
    }
}

const nurlyPlaceMark = {
    geometry: [43.229772, 76.945943],
    options: {
        iconLayout: 'default#image',
        iconImageHref: placeMarkIcon,
        iconImageSize: [42, 42],
        iconImageOffset: [-3, -42],
    }
}

function Contacts() {
    return (
        <div className="col-md-12 col-lg-10">
            <YMaps>
                <Map defaultState={{center: [43.24, 76.92], zoom: 13}} height="100vh"
                     width="100%">
                    <Placemark {...megaPlaceMark} modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}/>
                    <Placemark {...nurlyPlaceMark} modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}/>
                </Map>
            </YMaps>
        </div>
    );
}

export default Contacts;

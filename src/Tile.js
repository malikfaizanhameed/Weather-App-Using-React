import React from 'react';

function Tile(props) {
    if (!props.data || props.data.cod !== 200) {
        return (
            <h1>Please enter Valid City!</h1>
        )
    } else {
        //destructuring data
        const { main, sys, weather, name } = props.data;
        //setting icon
        const icon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
        const dataName = `${name},${sys.country}`;
        return (
            <div>
                <section className="ajax-section">
                    <div className="container">
                        <ul className="cities"></ul>
                        <li>
                            <h2 className="city-name" data-name={dataName}>
                                <span>{name}</span>
                                <sup>{sys.country}</sup>
                            </h2>
                            <div className="city-temp">{Math.round(main.temp)}<sup>°C</sup></div>
                            <figure>
                                <img className="city-icon" src={icon} alt={
                                    weather[0].description} />
                                <figcaption>{weather[0].description}</figcaption>
                            </figure>
                        </li>
                    </div>
                </section>
            </div>
        )
    }

}

export default Tile;
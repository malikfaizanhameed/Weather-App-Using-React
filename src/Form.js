import React, { Component } from 'react';
import Tile from './Tile'


class Form extends Component {
    constructor() {
        super()
        this.state = {
            cityName: '',
            response: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    async handleClick(e) {
        e.preventDefault();
        console.log(this.state.cityName);
        //API call
        const apiKey = 'f84009647ce2a9db9dcff46b58632a4b';
        try {
            //select city entered
            const inputVal = this.state.cityName;
            //API call
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&units=metric&appid=${apiKey}`;

            //wait for response and convert into JSON format
            const resp = await fetch(url);
            const data = await resp.json();
            // console.log(data);
            this.setState({ response: data });
            // console.log(this.state);



            //reset with success
            // reset(' ');
        } catch {
            console.log('Error agaya!!!');
            //reset with error message
            // reset('Please enter a valid city name!');
        };
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        console.log('Rendered!');
        return (
            <div>
                <section className="top-banner">
                    <div className="container">
                        <form>
                            <input
                                type="text"
                                placeholder="Search for a city"
                                name='cityName'
                                value={this.state.cityName}
                                onChange={this.handleChange}
                            />
                            <button
                                onClick={this.handleClick}
                                type='submit'
                            >   SUBMIT
                            </button>
                            <span className="msg"></span>
                        </form>
                    </div>
                </section>
                <section className="ajax-section">
                    <div className="container">
                        <ul className="cities">
                            <Tile
                                data={this.state.response}
                            />
                        </ul>

                    </div>
                </section>
            </div>
        )
    }
}

export default Form;
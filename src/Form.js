import React, { Component } from 'react';



class Form extends Component {
    constructor() {
        super()
        this.state = {
            cityName: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        console.log('Mounted!');
    }

    componentDidUpdate() {
        console.log('Updated!');
    }

    handleClick() {
        console.log(this.state.cityName);
    }

    handleChange(event) {
        const {name, value} = event.target;
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
                            <button onClick={this.handleClick}>SUBMIT</button>
                            <span className="msg"></span>
                        </form>
                    </div>
                </section>
            </div>
        )
    }
}

export default Form;
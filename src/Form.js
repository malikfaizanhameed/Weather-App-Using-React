import React, { Component } from 'react';



class Form extends Component {
    constructor() {
        super()
        this.state = {
            cityName: ''
        }
    }

    handleClick() {
        console.log('Clicked!')
    }
    render() {
        return (
            <div>
                <section className="top-banner">
                    <div className="container">
                        <form>
                            <input
                                type="text"
                                placeholder="Search for a city"
                                name='cityName'
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
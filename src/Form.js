import React from 'react';

function Form(props) {
    return (
        <div>
            <section className="top-banner">
                <div className="container">
                    <form>
                        <input
                            type="text"
                            placeholder="Search for a city"
                            name='cityName'
                            // value={props.cityName}
                            onChange={(event) => props.onChange(event.target.value)}
                        />
                        <button
                            onClick={props.handleClick}
                            type='submit'
                        >   SUBMIT
                            </button>
                        <span className="msg"></span>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Form;
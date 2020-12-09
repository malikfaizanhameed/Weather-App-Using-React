import { waitForElementToBeRemoved } from '@testing-library/react';
import React from 'react';

function Footer() {
    return (
        <footer className="page-footer">
            <div className="container">
                <small> Made with <span>❤</span> by Malik Faizan Hameed </small>
            </div>
        </footer>
    )

}

export default Footer;
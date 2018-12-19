import React, { Component } from 'react';
import '../css/Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer-container">
                    <span><a className="link" href="https://www.google.com/search?rlz=1C1GCEU_itIT824IT824&ei=Ax8aXLCELMaZsAe6n5KwDg&q=Simone+Bernagozzi&oq=Simone+Bernagozzi&gs_l=psy-ab.3..0i22i30.7788.10811..11123...0.0..0.72.575.11......0....1..gws-wiz.......0j0i71j0i67j0i131j0i13.JaR4oCnTXNE">Simone Bernagozzi</a></span>
                    <span><a className="link" href="https://accounts.google.com">bernasimone97@gmail.com</a></span>
                </div>
            </footer>
        )
    }
}

export default Footer;

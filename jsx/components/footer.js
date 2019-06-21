import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__navigation">
                <ul className="footer__list">
                    <li className="footer__list-item">
                        <a href="#" className="footer__list-item-link">Guidelines</a>
                    </li>
                    <li className="footer__list-item">
                        <a href="#" className="footer__list-item-link">FAQ</a>
                    </li>
                    <li className="footer__list-item">
                        <a href="#" className="footer__list-item-link">Support</a>
                    </li>
                    <li className="footer__list-item">
                        <a href="#" className="footer__list-item-link">API</a>
                    </li>
                    <li className="footer__list-item">
                        <a href="#" className="footer__list-item-link">Security</a>
                    </li>
                    <li className="footer__list-item">
                        <a href="#" className="footer__list-item-link">Lists</a>
                    </li>
                    <li className="footer__list-item">
                        <a href="#" className="footer__list-item-link">Bookmarklet</a>
                    </li>
                    <li className="footer__list-item">
                        <a href="#" className="footer__list-item-link">Legal</a>
                    </li>
                    <li className="footer__list-item">
                        <a href="#" className="footer__list-item-link">Apply to YC</a>
                    </li>
                    <li className="footer__list-item">
                        <a href="#" className="footer__list-item-link">Contact</a>
                    </li>
                </ul>
            </div>

            <div className="footer-items">
                <div className="footer-search">
                    <label htmlFor="search" className="footer-search__label">Search:</label>
                    <input className="footer-search__input" type="text" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
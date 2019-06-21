import React from 'react';

const Header = (props) => {
    return (
        <header className="header">
            <img src="img/y18-logo.gif" class="img-logo" />

            <div className="header__content">
                <div className="header__text">
                    Hacker News
                </div>

                <ul className="header__list">
                    <li className="header__list-item">
                        <a href="#" class="header__list-item-link">new</a>
                    </li>
                    <li className="header__list-item">
                        <a href="#" class="header__list-item-link">past</a>
                    </li>
                    <li className="header__list-item">
                        <a href="#" class="header__list-item-link">comments</a>
                    </li>
                    <li className="header__list-item">
                        <a href="#" class="header__list-item-link">ask</a>
                    </li>
                    <li className="header__list-item">
                        <a href="#" class="header__list-item-link">show</a>
                    </li>
                    <li className="header__list-item">
                        <a href="#" class="header__list-item-link">jobs</a>
                    </li>
                    <li className="header__list-item">
                        <a href="#" class="header__list-item-link">submit</a>
                    </li>
                </ul>
            </div>

            <a class="login__button" href="#">Login</a>
        </header>
    );
}

export default Header;
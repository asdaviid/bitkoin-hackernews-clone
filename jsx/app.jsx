import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import Footer from './components/footer';
import Newslist from './components/newslist';

class App extends Component {
    render() {
        return (
            <div>
                <Header />

                <Newslist />

                <Footer />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('react-app')
);
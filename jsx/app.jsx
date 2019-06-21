import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import Footer from './components/footer';
import Newslist from './components/newslist';

const App = () => {
    return (
        <div>
            <Header />

            <Newslist />

            <Footer />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('react-app')
);
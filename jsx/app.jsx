import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import Header from './components/header';
import Footer from './components/footer';
import Newslist from './components/newslist';

import { ApolloProvider, Query } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';


const httpLink = createHttpLink({
    uri: 'https://www.graphqlhub.com/graphql'
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

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
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('react-app')
);
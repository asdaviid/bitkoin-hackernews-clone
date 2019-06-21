import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import News from './news';

const NEWS_QUERY = gql`
    query NewsQuery($limit: Int) {
        hn {
            topStories(limit: $limit) {
                id
                timeISO
                url
                score
                title
                by {
                    id
                }
                kids {
                    type
                }
            }
        }
    }
`

class Newslist extends Component {
    constructor(props) {
        super(props);
    }

    _getNewsItemsToRender(data) {
        return data.hn.topStories;
    }

    render() {
        return (
            <main className="content">
                <Query query={NEWS_QUERY} variables={{limit: 30}}>
                    {({ loading, error, data }) => {
                        if (loading) return <div className="fetching_notification">fetching latest news</div>
                        if (error) return <div>error</div>

                        return (
                            <div>
                                {this._getNewsItemsToRender(data).map((item, index) => <News key={index + 1} index={index + 1} item={item} />)}

                                <a key={31} className="more-link" href="#">More</a>
                            </div>
                        )
                    }}
                </Query>
            </main>
        );
    }
}

export default Newslist;
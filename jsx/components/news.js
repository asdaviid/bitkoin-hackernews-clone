import React, { Component } from 'react';
import moment from 'moment';

class News extends Component {
    _extractHostName(url) {
        let a = document.createElement('a');
        a.href = url;

        let hostname = a.hostname.startsWith('www') ? a.hostname.substr(4) : a.hostname;

        return hostname;
    }

    render() {
        const { index, item } = this.props;

        return (
            <div key={index} className="hn__news-item">
                <div className="hn__news-item-index">{ index }.</div>
                <div className="hn__news-item-uparrow">
                    <i className="fa fa-caret-up"></i>
                </div>
                <div className="hn__news-item-details">
                    <div className="hn__news-item-title">{ item.title } <span className="hn__news-item-source">({ this._extractHostName(item.url) })</span></div>
                    <div className="hn__news-item-sub">
                        { item.score } points by <span className="hn__news-item-sub--link">{ item.by.id }</span> <span className="hn__news-item-sub--link">{ moment(item.timeISO).fromNow() }</span> | <span className="hn__news-item-sub--link">hide</span> | <span className="hn__news-item-sub--link">{ item.kids.length } { item.kids.length === 1 ? 'comment' : 'comments' }</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;
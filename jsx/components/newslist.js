import React from 'react';

const Newslist = (props) => {
    return (
        <main className="content">
            <div className="hn__news-item">
                <div className="hn__news-item-index">1.</div>
                <div className="hn__news-item-uparrow">
                    <i className="fa fa-caret-up"></i>
                </div>
                <div className="hn__news-item-details">
                    <div className="hn__news-item-title">LinkedIn Exfiltrates Data from the Browser <span className="hn__news-item-source">(prophitt.me)</span></div>
                    <div className="hn__news-item-sub">
                        170 points by <span className="hn__news-item-sub--link">assassinator</span> <span className="hn__news-item-sub--link">50 minutes ago</span> | <span className="hn__news-item-sub--link">hide</span> | <span className="hn__news-item-sub--link">29 comments</span></div>
                </div>
            </div>
            <div className="hn__news-item">
                <div className="hn__news-item-index">22.</div>
                <div className="hn__news-item-uparrow">
                    <i className="fa fa-caret-up"></i>
                </div>
                <div className="hn__news-item-details">
                    <div className="hn__news-item-title">LinkedIn Exfiltrates Data from the Browser <span className="hn__news-item-source">(prophitt.me)</span></div>
                    <div className="hn__news-item-sub">
                        170 points by <span className="hn__news-item-sub--link">assassinator</span> <span className="hn__news-item-sub--link">50 minutes ago</span> | <span className="hn__news-item-sub--link">hide</span> | <span className="hn__news-item-sub--link">29 comments</span>
                    </div>
                </div>
            </div>

            <a className="more-link" href="#">More</a>
        </main>
    )
}

export default Newslist;
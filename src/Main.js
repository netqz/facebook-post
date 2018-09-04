import React, { Component } from "react"

class Main extends Component {
    render () {
        return (
            <div className="facebook-post">
                <div className="post-header">
                    <div className="post-author">
                        <img className="author-image" src="./images/logo.png" />
                        <div className="author-details">
                            <h4>Open Court</h4>
                            <span>9 hrs : <img src="./images/earth-icon.png" /></span>
                        </div>
                    </div>
                </div>
                <div className="post-content">
                    <p>The Milwaukee Bucks are interested in acquiring Hassan Whiteside. It would likely take a deal involving Jabari Parker and Eric Bledsoe to work though.</p>
                    <span>DPeters</span>
                    <img src="./images/profile-picture.jpg" />
                    <div className="post-statistics">
                        <div className="like-statistics">
                            <img src="./images/like-icon.png" />
                            <span>16</span>
                        </div>
                        <span>20 Comments</span>
                    </div>
                </div>
                <div className="action-toolbar">
                    <span className="like-action">
                        <img src="./images/like-icon-big-dim.png" />
                        <span>Like</span>
                    </span>
                    <span className="comment-action">
                        <img src="./images/comment-icon.png" />
                        <span>Comment</span>
                    </span>
                    <span className="share-action">
                        <img src="./images/share-icon.png" />
                        <span>Share</span>
                    </span>
                </div>
                <div className="comments-section">
                    <div className="write-a-comment">
                        <img src="./images/lebron.png" />
                        <form>
                            <input placeholder="Write a comment ..." />
                        </form>
                    </div>
                    <div className="filter-comments">
                        <span>Top comments <img src="./images/arrow-down-icon.png" /></span>
                        <ul>
                            <li>
                                <span><img src="./images/check-icon.png" />Top Comments</span>
                                <br/>The most relevant comments appear at the top.
                            </li>
                            <li>
                                <span><img src="./images/check-icon.png" />Most recent</span>
                                <br/>New comments and those with new replies go to the top.
                            </li>
                        </ul>
                    </div>
                    <div className="submited-commments">
                        <div className="user-comment">
                            <img src="./images/harden.png" />
                            <div className="comment-wrapper">
                                <p className="comment"><span className="username">Rami Bn'Aly</span>looooooooooool jabari parker is better than all heat player!!!</p>
                                <span className="comment-action">Like : <span>9h</span></span>
                            </div>
                            <span className="number-of-likes">
                                <img src="./images/like-icon.png" />
                                <span>45</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main

import React, { Component } from "react"

class Main extends Component {
    constructor () {
        super ()
        this.state = {
            postAuthor: 'Open Court',
            authorImage: './images/logo.png',
            createdBefore: '9',
            postContent: 'The Milwaukee Bucks are interested in acquiring Hassan Whiteside. It would likely take a deal involving Jabari Parker and Eric Bledsoe to work though.',
            unknown: 'DPeters',
            postImage: './images/profile-picture.jpg',
            likeCount: '16',
            commentsCount: '20',
            submittedComments: [
                {
                    username: 'Rami Bn\'Aly',
                    image: './images/harden.png',
                    content: 'looooooooooool jabari parker is better than all heat player!!!',
                    createdBefore: '9',
                    likeCount: '45'
                },
                {
                    username: 'Matt Alkhazali',
                    image: './images/westbrook.png',
                    content: 'If Miami pull this off, and acquire DeAndre Jordan. Then we would know where LeBron will go next year with Wade.',
                    createdBefore: '9',
                    likeCount: ''
                }
            ]
        }
    }
    render () {
        return (
            <div className="facebook-post">
                <div className="post-header">
                    <div className="post-author">
                        <img className="author-image" src={ this.state.authorImage } />
                        <div className="author-details">
                            <h4>{ this.state.postAuthor }</h4>
                            <span>{ this.state.createdBefore } hrs &middot; <img src="./images/earth-icon.png" /></span>
                        </div>
                    </div>
                </div>
                <div className="post-content">
                    <p>{ this.state.postContent }</p>
                    <span>{ this.state.unknown }</span>
                    <img src={ this.state.postImage } />
                    <div className="post-statistics">
                        <div className="like-statistics">
                            <img src="./images/like-icon.png" />
                            <span>{ this.state.likeCount }</span>
                        </div>
                        <span>{ this.state.commentsCount } Comments</span>
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
                        <span>
                            <img src="./images/lebron.png" />
                        </span>
                        <form>
                            <input type="text" placeholder="Write a comment ..." />
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
                    <div className="submitted-commments">
                        { this.state.submittedComments.map((submittedComment, i) => {
                            return  <div key={ submittedComment.username } className="user-comment">
                                <span>
                                    <img src={ submittedComment.image } />
                                </span>
                                <div className="comment-wrapper">
                                    <p className="comment"><span className="username">{ submittedComment.username }</span>{ submittedComment.content }</p>
                                    <span className="comment-action">Like<span> &middot; { submittedComment.createdBefore }h</span></span>
                                </div>
                                {submittedComment.likeCount &&
                                    <span className="number-of-likes">
                                        <img src="./images/like-icon.png" />
                                        <span>{ submittedComment.likeCount }</span>
                                    </span>
                                }
                            </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Main

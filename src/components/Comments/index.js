import {Component} from 'react'
import {v4} from 'uuid'
import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
console.log(initialContainerBackgroundClassNames)

class Comments extends Component {
  state = {userName: '', userComment: '', commentsList: []}

  submitForm = event => {
    event.preventDefault()
    const {userComment, userName} = this.state
    const initialBack = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    console.log(initialBack)

    const newList = {
      id: v4(),
      name: userName,
      comment: userComment,
      initialClassName: initialBack,
      date: new Date(),
      like: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newList],
      userName: '',
      userComment: '',
    }))
  }

  getName = event => {
    this.setState({userName: event.target.value})
  }

  getComment = event => {
    this.setState({userComment: event.target.value})
  }

  toggleList = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (each.id === id) {
          return {...each, like: !each.like}
        }
        return each
      }),
    }))
  }

  delectComment = id => {
    const {commentsList} = this.state

    this.setState({
      commentsList: commentsList.filter(comment => comment.id !== id),
    })
  }

  render() {
    const {userComment, userName, commentsList} = this.state

    const commentlistLength = commentsList.length
    return (
      <>
        <div className="bg-container">
          <div className="card-container">
            <form className="form-container" onSubmit={this.submitForm}>
              <h1 className="heading">Comments</h1>
              <p className="">say something about 4.0 Technologies</p>
              <input
                className="name-input"
                type="text"
                placeholder="Your Name"
                onChange={this.getName}
                value={userName}
              />
              <textarea
                className="comment-input"
                placeholder="Your Comment"
                onChange={this.getComment}
                value={userComment}
                cols="5"
                rows="10"
              />
              <button className="summit-btn" type="submit">
                Add Comment
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="image-url"
            />
          </div>
          <div className="comment-count-container">
            <p className="count-paragraph">{commentlistLength}</p>
            <p className="comment-paragraph">comments</p>
          </div>
          <ul className="ul-container">
            {commentsList.map(each => (
              <CommentItem
                key={each.id}
                commentItemList={each}
                toggleList={this.toggleList}
                deleteCommentList={this.delectComment}
              />
            ))}
          </ul>
        </div>
      </>
    )
  }
}

export default Comments

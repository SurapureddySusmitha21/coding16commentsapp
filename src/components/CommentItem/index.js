import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentItemList, toggleList, deleteCommentList} = props
  const {initialClassName, name, comment, date, like, id} = commentItemList
  const userFirstLetter = name[0]
  const dateOf = formatDistanceToNow(date)
  const nameBack = name ? initialClassName : ''
  const isLiked = like
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const datele = () => {
    deleteCommentList(id)
  }

  const likeButton = () => {
    toggleList(id)
  }

  return (
    <li className="comment-list-container">
      <div className="list-container">
        <div className={nameBack}>
          <p className="first-paragraph">{userFirstLetter}</p>
        </div>
        <div className="container">
          <div className="name-container">
            <p className="name-paragraph">{name}</p>
            <p className="date-paragraph">{dateOf}</p>
          </div>
          <p className="comment-paragraph">{comment}</p>
        </div>{' '}
      </div>
      <div className="image-container">
        <div className="like-container">
          <img src={isLiked} alt="like" />
          <button
            className="like-btn"
            type="button"
            data-testid="delete"
            onClick={likeButton}
          >
            Like
          </button>
        </div>
        <button type="button" className="b" onClick={datele}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default CommentItem

import {
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAIL,
} from "../constants/CommentsConstants";
import axios from "axios";

export const fetchCommentsSuccess = (comments) => {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: comments,
  };
};

export const fetchCommentsFail = (err) => {
  return {
    type: FETCH_COMMENTS_FAIL,
    payload: err,
  };
};

export const fetchCommentsRequest = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((result) => dispatch(fetchCommentsSuccess(result.data)))
      .catch((err) => dispatch(fetchCommentsFail(err.message)));
  };
};

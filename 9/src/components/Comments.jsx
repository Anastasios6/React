import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCommentsRequest } from "../actions/CommentsAction";
export const Comments = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.CommentsReducer.comments);
  const err = useSelector((state) => state.CommentsReducer.error);

  useEffect(() => {
    dispatch(fetchCommentsRequest());
  }, []);
  return (
    <div id="comments">
      <h1>Comments</h1>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <p>
              <span>Name: </span>
              {comment.name}
            </p>
            <p>
              <span>Email:</span>
              {comment.email}
            </p>
            <p>
              <span>Body:</span>
              {comment.body}
            </p>
            <hr />
          </div>
        );
      })}
      {err && <h1>{err}</h1>}
    </div>
  );
};

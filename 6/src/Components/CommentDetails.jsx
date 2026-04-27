import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Navigate } from "react-router-dom";

export const CommentDetails = () => {
  const [details, setDetails] = useState({});
  const [editing, setEditing] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  let { commentId } = useParams();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments/" + commentId)
      .then((res) => setDetails(res.data))
      .catch((err) => alert(err));
  }, []);

  const updateComment = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .patch(
        `https://jsonplaceholder.typicode.com/comments/${commentId}`,
        details,
      )
      .then((res) => {
        console.log(res.data);
        setTimeout(() => {
          if (res.status === 200) {
            setSubmitted(true);
            alert("Updated succesfully");
          }
        }, 2000);
      })
      .catch((err) => {
        setLoading(false);
        alert("Edit failed", err.message);
      });
  };
  if (submitted) {
    return <Navigate to="/comments" />;
  }
  return (
    <div id="commentDetails">
      {!editing ? (
        <>
          <h2>{details.name}</h2>
          <h3>{details.email}</h3>
          <p>{details.body}</p>
          <button
            onClick={() => {
              setEditing(true);
            }}
          >
            edit comment
          </button>
        </>
      ) : (
        <form className="editForm" onSubmit={updateComment}>
          <input
            type="text"
            value={details.name}
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            disabled={loading}
          />
          <input
            type="email"
            value={details.email}
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            disabled={loading}
          />
          <textarea
            value={details.body}
            onChange={(e) => setDetails({ ...details, body: e.target.value })}
            disabled={loading}
          />

          <>
            <button disabled={loading}>
              {loading ? "Updating" : "Save changes"}
            </button>
            {!loading && (
              <button
                onClick={() => {
                  setEditing(false);
                }}
              >
                Cancel
              </button>
            )}
            {loading && (
              <div>
                <h1>Processing update...</h1>
              </div>
            )}
          </>
        </form>
      )}
    </div>
  );
};

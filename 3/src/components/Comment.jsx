import React, { useState } from "react";
import { Input } from "./Input";

export const Comment = ({ value, onChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div id="Comment">
      {isExpanded ? (
        <textarea
          placeholder="Long comment"
          value={value}
          onChange={onChange}
          rows={4}
        ></textarea>
      ) : (
        <Input
          type={"text"}
          placeholder={"Short comment"}
          value={value}
          onChange={onChange}
        />
      )}
      <button
        type="button"
        className="expand"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        expand <i className="fa-solid fa-expand"></i>
      </button>
    </div>
  );
};

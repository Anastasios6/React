import React from "react";

export const Age = (props) => {
  const minors = props.data.filter((user) => user.age < 18);
  const adults = props.data.filter((user) => user.age >= 18);
  return (
    <div className="Age">
      <h1>18 or above</h1>
      <ul>
        {adults.map((user, i) => (
          <li key={i}>
            {user.name} {user.lastName} {user.age} years old
          </li>
        ))}
      </ul>
      <h1>Less than 18 </h1>
      <p>
        {minors.map((user) => (
          <p>
            {user.name} {user.lastName} {user.age} Years old
          </p>
        ))}
      </p>
    </div>
  );
};

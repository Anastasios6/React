import React from "react";

export const Address = (props) => {
  const Skopje = props.data.filter((user) => user.address === "Skopje");
  const notFromSkopje = props.data.filter((user) => user.address !== "Skopje");
  return (
    <div className="address">
      <h1>Skopje</h1>
      <ul>
        {Skopje.map((user, i) => (
          <li key={i}>
            {user.name} {user.lastName} from {user.address}
          </li>
        ))}
      </ul>
      <h1>Not from Skopje</h1>
      <ul>
        {notFromSkopje.map((user, i) => (
          <li key={i}>
            {user.name} {user.lastName} from {user.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

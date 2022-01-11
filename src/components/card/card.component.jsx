import React from "react";
import "./card.styles.css";

const Card = ({ name, id, email }) => {
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${id}?set=set2`} alt={id} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;

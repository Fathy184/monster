import React from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";
const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map(({ id, name, email }) => {
        return <Card name={name} key={id} id={id} email={email} />;
      })}
    </div>
  );
};

export default CardList;

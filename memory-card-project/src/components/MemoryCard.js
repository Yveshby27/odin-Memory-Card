import React, { useState, useEffect } from "react";
import "../styles/Game.css";

const MemoryCard = (props) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    if (props.reset) {
      setClicked(false);
    }
  }, [props.reset]);

  useEffect(() => {
    if (clicked) {
      props.incrementCurrentScore();

      if (props.currentScore >= props.bestScore) {
        props.incrementBestScore();
      }
    } else {
      props.resetCurrentScore();
    }

    props.shuffleCards();
  }, [clicked]);

  return (
    <div className="image-container">
      <img
        src={props.src}
        onClick={handleClick}
        alt={props.name}
        className="image"
      />
      <p className="image-name">{props.name}</p>
    </div>
  );
};

export default MemoryCard;

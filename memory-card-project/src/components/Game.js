import React, { useState, useEffect } from "react";
import MemoryCard from "./MemoryCard";
import "../styles/Game.css";

const Game = () => {
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [reset, setReset] = useState(false);

  const shrek =
    "https://www.joblo.com/wp-content/uploads/2023/04/shrek_5_2023-1280x720.jpg";
  const homer =
    "https://www.onthisday.com/images/people/homer-simpson.jpg?w=360";
  const lightningMcqueen =
    "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Lightning-McQueen.Cars.webp";
  const po =
    "https://miro.medium.com/v2/resize:fit:1200/1*cQA00wGimwiz_cfM_VZBoA.jpeg";
  const woody =
    "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-10n7ovy_9b42e613.jpeg?region=0%2C0%2C450%2C450";
  const mikeWazowski =
    "https://upload.wikimedia.org/wikipedia/en/6/6a/Mike_Wazowski.png";
  const mulan =
    "https://m.media-amazon.com/images/M/MV5BODg1OTczMWEtNTU3MS00OTUzLThjODEtNDg1MWQwZmExYmFlXkEyXkFqcGdeQWFybm8@._V1_QL75_UX500_CR0,0,500,281_.jpg";
  const sid =
    "https://lumiere-a.akamaihd.net/v1/images/ct_iceage_sid_21464_10f2d363.jpeg";
  const tarzan =
    "https://lumiere-a.akamaihd.net/v1/images/h_tarzan_19875_mobile_ticketnumber_19deb65f.jpeg?region=0,0,640,480";
  const madagascar =
    "https://www.sj-r.com/gcdn/authoring/2008/11/07/NSJR/ghows-LS-21a92504-d5c0-46ed-b2d0-2060df435332-a9a97dd6.jpeg";
  const gru =
    "https://akns-images.eonline.com/eol_images/Entire_Site/201363/rs_1024x759-130703124141-1024.Gru.mh.070313.jpg?fit=around%7C1024:759&output-quality=90&crop=1024:759;center,top";
  const dracula =
    "https://assets.mycast.io/characters/count-dracula-2635621-normal.jpg?1643403943";
  const cards = [
    { src: shrek, name: "Shrek", clicked: false },
    { src: homer, name: "Homer", clicked: false },
    { src: lightningMcqueen, name: "Lightning McQueen", clicked: false },
    { src: po, name: "Po", clicked: false },
    { src: woody, name: "Woody", clicked: false },
    { src: mikeWazowski, name: "Mike Wazowski", clicked: false },
    { src: mulan, name: "Mulan", clicked: false },
    { src: sid, name: "Sid", clicked: false },
    { src: madagascar, name: "Madagascar", clicked: false },
    { src: tarzan, name: "Tarzan", clicked: false },
    { src: dracula, name: "Dracula", clicked: false },
    { src: gru, name: "Gru", clicked: false },
  ];

  const [positions, setPositions] = useState(cards);

  useEffect(() => {
    if (reset) {
      setPositions((prevPositions) =>
        prevPositions.map((position) => ({ ...position, clicked: false }))
      );
      setReset(false);
    }
  }, [reset]);

  const shuffleCards = () => {
    const shuffledCards = [...positions]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setPositions(shuffledCards);
  };

  const incrementBestScore = () => {
    setBestScore(bestScore + 1);
  };

  const incrementCurrentScore = () => {
    setCurrentScore(currentScore + 1);
  };

  const resetCurrentScore = () => {
    setCurrentScore(0);
    setReset(true);
  };

  return (
    <div>
      <p className="game-rule">
        Don't click on the same picture twice in the same round
      </p>
      <div className="score">Current Score: {currentScore}</div>
      <div className="score">Best Score: {bestScore}</div>
      <div className="grid-container">
        {positions.map((position) => (
          <MemoryCard
            src={position.src}
            key={position.name}
            name={position.name}
            clicked={position.clicked}
            setClicked={(value) =>
              setPositions((prevPositions) =>
                prevPositions.map((prevPosition) =>
                  prevPosition.name === position.name
                    ? { ...prevPosition, clicked: value }
                    : prevPosition
                )
              )
            }
            bestScore={bestScore}
            currentScore={currentScore}
            shuffleCards={shuffleCards}
            incrementCurrentScore={incrementCurrentScore}
            incrementBestScore={incrementBestScore}
            resetCurrentScore={resetCurrentScore}
            reset={reset}
          />
        ))}
      </div>
    </div>
  );
};

export default Game;

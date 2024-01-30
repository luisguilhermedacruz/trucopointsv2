import React, { useEffect, useState } from "react";
import "./score.css";
import Form from "../Form";

const Score = ({ teamsData }) => {
  const phrases = [
    "LUGAR DE PATO É NO MEIO DO BARALHO!",
    "PARA DE PENSAR, AQUI É TRUCO, NÃO XADREZ!",
    "MULHERES? SEMPRE VENHO COM ELAS!",
    "PÉ DEU PÉ SE VIRA!",
    "VIROU UM 3 NÃO SABE O QUE FEZ!",
    "A PRIMEIRA É CAMINHÃO!",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhraseIndex(
        (prevIndex) => (prevIndex + 1) % phrases.length
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const scoreChange = (team, amount) => {
    if (team === 1) {
      const newScore = Math.min(12, Math.max(0, team1Score + amount));
      setTeam1Score(newScore);
    } else if (team === 2) {
      const newScore = Math.min(12, Math.max(0, team2Score + amount));
      setTeam2Score(newScore);
    }
  };

  const handleResetTeams = () => {
    setTeam1Score(0);
    setTeam2Score(0);
    setShowForm(false);
  };

  const handleChangeTeams = () => {
    setShowForm(true);
  };

  return (
    <div className="score">
      {!showForm ? (
        <>
          <h1 className="title">{phrases[currentPhraseIndex]}</h1>
          <div className="score_teams">
            {teamsData.map((team, index) => (
              <div className="teams" key={index}>
                <h2>Time {index + 1}</h2>
                {team.map((player, i) => (
                  <h3 key={i}>{player}</h3>
                ))}
                {index === 0 ? (
                  <h4>{team1Score}</h4>
                ) : (
                  <h4>{team2Score}</h4>
                )}
                <div className="buttons_standard">
                  <button onClick={() => scoreChange(index + 1, -1)}>
                    <img src="/remove.svg" alt="botão menos" />
                  </button>
                  <button onClick={() => scoreChange(index + 1, 1)}>
                    <img src="/add.svg" alt="botão mais" />
                  </button>
                </div>
                <div className="buttons_truco">
                  <button onClick={() => scoreChange(index + 1, 3)}>
                    <img src="/three.svg" alt="" />
                  </button>
                  <button onClick={() => scoreChange(index + 1, 6)}>
                    <img src="/six.svg" alt="" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="buttons_reset">
            <button onClick={handleResetTeams}>MANTER EQUIPES</button>
            <button onClick={handleChangeTeams}>MUDAR EQUIPES</button>
          </div>
        </>
      ) : (
        <Form />
      )}
    </div>
  );
};

export default Score;









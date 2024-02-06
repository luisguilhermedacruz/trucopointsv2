import React, { useState } from "react";
import Score from "../Score";
import "./defined.css";

const FormDefined = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [playerData, setPlayerData] = useState({
    team1: Array.from({ length: 3 }, () => ""),
    team2: Array.from({ length: 3 }, () => ""),
  });
  const [showScore, setShowScore] = useState(false);

  const handleButtonClick = (size) => {
    setSelectedButton(size);
  };

  const handleInputChange = (team, index, value) => {
    setPlayerData((prevData) => ({
      ...prevData,
      [team]: [
        ...prevData[team].slice(0, index),
        value,
        ...prevData[team].slice(index + 1),
      ],
    }));
  };

  const handleAdvanceClick = () => {
    const isInvalidInput =
      selectedButton === 2
        ? playerData.team1.slice(0, 2).some((player) => player === "") ||
          playerData.team2.slice(0, 2).some((player) => player === "")
        : playerData.team1.some((player) => player === "") ||
          playerData.team2.some((player) => player === "");

    if (isInvalidInput) {
      alert("Preencha todos os jogadores obrigatórios");
      return;
    }
    setShowScore(true);
  };

  return (
    <div className="input_defined">
      {!showScore ? (
        <>
          <label htmlFor="campo_dos_jogadores">
            INSIRA O NOME DE CADA JOGADOR NOS ESPAÇOS:
          </label>
          <div className="buttons_players">
            <button onClick={() => handleButtonClick(2)}>
              <h1>2x2</h1>
            </button>
            <button onClick={() => handleButtonClick(3)}>
              <h1>3x3</h1>
            </button>
          </div>
          {selectedButton && (
            <div className="inputs_players">
              <div className="inputs">
                <h1 className="title_inputs">TIME 1</h1>
                {Array.from({ length: selectedButton }, (_, index) => (
                  <input 
                    key={`player${index + 1}`}
                    type="text"
                    placeholder={`NOME DO JOGADOR`}
                    value={playerData.team1[index]}
                    onChange={(e) =>
                      handleInputChange("team1", index, e.target.value)
                    }
                  />
                ))}
              </div>
              <div className="inputs">
                <h1 className="title_inputs">TIME 2</h1>
                {Array.from({ length: selectedButton }, (_, index) => (
                  <input
                    key={`player${index + selectedButton + 1}`}
                    type="text"
                    placeholder={`NOME DO JOGADOR`}
                    value={playerData.team2[index]}
                    onChange={(e) =>
                      handleInputChange("team2", index, e.target.value)
                    }
                  />
                ))}
              </div>
            </div>
          )}
          {selectedButton && (
            <button className="button_next" onClick={handleAdvanceClick}>Avançar</button>
          )}
        </>
      ) : (
        <Score
          teamsData={[
            playerData.team1.slice(0, selectedButton),
            playerData.team2.slice(0, selectedButton),
          ]}
        />
      )}
    </div>
  );
};

export default FormDefined;


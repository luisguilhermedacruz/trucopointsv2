import React, { useState } from "react";
import "./aleatory.css";
import Score from "../Score"; 

const FormAleatory = () => {
  const [inputValue, setInputValue] = useState("");
  const [teamsData, setTeamsData] = useState([]);
  const [showInput, setShowInput] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const generateTeams = (size) => {
    if (inputValue.trim() === "") {
      setErrorMessage("Por favor, insira os nomes dos jogadores.");
      return;
    }

    const players = inputValue.split(",").map((player) => player.trim());
    const shuffledPlayers = [...players].sort(() => Math.random() - 0.5);
    const teams = [];

    const playersPerTeam = size === 2 ? 2 : 3;

    for (let i = 0; i < 2; i++) {
      const team = [];
      for (let j = 0; j < playersPerTeam; j++) {
        team.push(shuffledPlayers.pop());
      }
      teams.push(team);
    }

    setTeamsData(teams);
    setShowInput(false);
    setErrorMessage("");
  };

  return (
    <div className="input_aleatory">
      {showInput ? (
        <>
          <label htmlFor="campo_dos_jogadores">
            INSIRA OS NOMES DOS JOGADORES SEPARADOS POR VÍRGULA!{" "}
          </label>
          <input
            required
            type="text"
            id="campo_dos_jogadores"
            placeholder="Escreva aqui o nome dos jogadores"
            value={inputValue}
            onChange={handleInputChange}
          />
          <div className="buttons_players">
            <button onClick={() => generateTeams(2)}>
              <h1>2x2</h1>
            </button>
            <button onClick={() => generateTeams(3)}>
              <h1>3x3</h1>
            </button>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </>
      ) : (
        <Score teamsData={teamsData} /> 
      )}
    </div>
  );
};

export default FormAleatory;






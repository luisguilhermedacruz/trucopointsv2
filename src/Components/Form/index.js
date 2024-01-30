import { useState } from 'react';
import FormAleatory from '../FormAleatory';
import FormDefined from '../FormDefined';
import '../Form/form.css';

const Index = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [formMargin, setFormMargin] = useState(200);

  const handleButtonClick = (buttonType) => {
    setSelectedButton(buttonType);
    setFormMargin(0);
  };

  return (
    <div className="form" style={{ marginTop: `${formMargin}px` }}>
      {selectedButton === null && (
        <div className="form_buttons">
          <div
            className={`form_buttons_button_aleatory`}
            onClick={() => handleButtonClick('aleatorio')}
          >
            <button>
              <img src="/aleatory.svg" alt="" />
            </button>
            <h2
              className={`text_aleatory`}
              onClick={() => handleButtonClick('aleatorio')}
            >
              ALEATÓRIO
            </h2>
          </div>
          <div
            className={`form_buttons_button_defined`}
            onClick={() => handleButtonClick('definido')}
          >
            <button>
              <img src="/defined.svg" alt="" />
            </button>
            <h2
              className={`text_defined`}
              onClick={() => handleButtonClick('definido')}
            >
              DEFINIDO
            </h2>
          </div>
        </div>
      )}
      {(selectedButton === 'aleatorio' || selectedButton === 'definido') && (
        <div>
          {selectedButton === 'aleatorio' && <FormAleatory />}
          {selectedButton === 'definido' && <FormDefined />}
        </div>
      )}
    </div>
  );
};

export default Index;



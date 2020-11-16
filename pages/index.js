import { useState } from "react";

function Home() {
  return (
    <div>
      <h1></h1>
      <Lex />
    </div>
  );
}

function Lex() {
  const [showLex, setShowLex] = useState(false);

  function toggleShowLex() {
    setShowLex(!showLex);
  }

  const lexImage = (
    <div>
      <div>
        <h2>Aqui está o tesão! kek</h2>
        <img
          src="https://i.ibb.co/M9ZpRCW/Screenshot-from-2020-11-16-15-31-00.png"
          alt="73540"
          border="1"
        />
      </div>
      <br />
      <button onClick={toggleShowLex}>Esconder o 73540</button>
    </div>
  );

  if (showLex === true) {
    return lexImage;
  }

  return (
    <div>
      <h2>Quer ver o 73540?</h2>
      <button onClick={toggleShowLex}>Clique aqui</button>
    </div>
  );
}

export default Home;

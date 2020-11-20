import { useState } from "react";
import { GetStaticProps } from "next";

function Home({ org }: any) {
  return (
    <div>
      <h1>{org.login}</h1>
      <h3>{org.description}</h3>
      <Lex />
    </div>
  );
}

function Lex() {
  const [showLex, setShowLex] = useState(false);

  function toggleShowLex() {
    setShowLex(!showLex);
  }

  const componentWithLex = (
    <div>
      <div>
        <h2>Aqui está o 73540! kek</h2>
        <img
          src="https://i.ibb.co/M9ZpRCW/Screenshot-from-2020-11-16-15-31-00.png"
          alt="73540"
        />
      </div>
      <br />
      <button onClick={toggleShowLex}>Esconder o 73540</button>
    </div>
  );

  const componentWithoutLex = (
    <div>
      <h2>Quer ver o 73540?</h2>
      <button onClick={toggleShowLex}>Clique aqui</button>
    </div>
  );

  return showLex ? componentWithLex : componentWithoutLex;
}

// é chamada antes da página ser renderizada no servidor
// popula via props o componente
// indicada para landing pages ou páginas que alteram pouco
export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://api.github.com/orgs/rocketseat");
  const data = await response.json();

  return {
    props: {
      org: data,
    },
    revalidate: 10 // atualiza o cache a cada 10s
  };
};

export default Home;

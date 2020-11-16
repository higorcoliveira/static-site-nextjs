import { useState } from "react";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Contador />
    </div>
  );
}

function Contador() {
  const [counter, setCounter] = useState(1);

  function addCounter() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <div>{counter}</div>
      <button onClick={addCounter}>Add</button>
    </div>
  );
}

export default Home;

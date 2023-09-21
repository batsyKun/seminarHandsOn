import { useState } from "react";
import "./App.css";
import Form from "./Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Form count={count} setCount={setCount}></Form>
    </>
  );
}

export default App;

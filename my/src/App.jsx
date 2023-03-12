import { useState } from "react";
import Button from "./Button";

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <div>{count}</div>
      <div>
        <Button text="Click me for plus" onClick={incrementCount} />
      </div>
      <div>
        <Button text="Click me for minus" onClick={decrementCount} />
      </div>
    </div>
  );
}

export default App;

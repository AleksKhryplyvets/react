import { createContext, useState } from "react";
import "./App.css"
import Layout from './components/Layout';

export const CountContext = createContext(null)

function App() {
  const [count, setCount] = useState(0);

  const value = {
    count,
    setCount
  }
  return (
    <CountContext.Provider value = {value}>
      <Layout/>
    </CountContext.Provider>
  );
}

export default App;

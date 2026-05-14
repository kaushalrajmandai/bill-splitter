import { useState } from "react";
import Header from "./components/Header";
import BillForm from "./components/BillForm";
import ResultCard from "./components/ResultCard";
import billData from "./data/billData.json";
import "./App.css";

function App() {
  const [bill, setBill] = useState("");
  const [tipPercent, setTipPercent] = useState(billData.defaultTipPercent);
  const [friends, setFriends] = useState(1);

  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <BillForm
          bill={bill}
          setBill={setBill}
          tipPercent={tipPercent}
          setTipPercent={setTipPercent}
          friends={friends}
          setFriends={setFriends}
        />
        <ResultCard bill={bill} tipPercent={tipPercent} friends={friends} />
      </main>
    </div>
  );
}

export default App;

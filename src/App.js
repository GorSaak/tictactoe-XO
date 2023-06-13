import {useState} from "react";
import Square from "./Square";
import Whoseturn from "./Whoseturn";
import Resetbutton from "./Resetbutton";
import WinnerChecker from "./WinnerChecker";
import ObjArray from "./ObjArray";
import './App.css'

function App() {
  const [turn, setTurn] = useState("X")
  const [newArray, setNewArray] = useState(ObjArray)
  function btnClick(key) {
    setNewArray(newArray.map( item => item.key === key && item.text === "" ?
        (setTurn(turn === "X"? "O" : "X"), {...item, text: turn}) : item))
  }
  function resetBtn () {
    setNewArray(ObjArray); setTurn("X")
  }


  return (
    <div className="App">
        <h1>Tic Tac Toe game</h1>
        <Whoseturn turn={turn} />
        <Square btnClick={btnClick} newArray={newArray} />
        <Resetbutton resetBtn={resetBtn} />
        <WinnerChecker resetBtn={resetBtn} newArray={newArray} />
    </div>
  );
}
export default App;

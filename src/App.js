import Square from "./Square";
import Whoseturn from "./Whoseturn";
import Resetbutton from "./Resetbutton";
import WinnerChecker from "./WinnerChecker";
import AllHooksHere from "./Hooks/allHooksHere";
import './App.css'

function App() {
    const {turn, newArray, btnClick, resetBtn} = AllHooksHere();


  return (
    <div className="App">
        <h1>Tic Tac Toe game</h1>
        <Whoseturn turn={turn} />
        <Square btnClick={btnClick} newArray={newArray} />
        <Resetbutton resetBtn={resetBtn} />
        <WinnerChecker resetBtn={resetBtn} newArray={newArray}  />
    </div>
  );
}
export default App;

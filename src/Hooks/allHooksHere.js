import {useState} from "react";
import ObjArray from "../ObjArray";


const AllHooksHere = () => {

  const [turn, setTurn] = useState("X");
  const [newArray, setNewArray] = useState(ObjArray);


  const btnClick = (key) => {
    setNewArray(newArray.map( item => item.key === key && item.text === "" ?
        (setTurn(turn === "X"? "O" : "X"), {...item, text: turn}) : item))
  };

  const resetBtn = () => {
    setNewArray(ObjArray); setTurn("X")
  };

  const winComb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  let resultArr = []
  newArray.map(a => resultArr.push(a.text))

  let newWinComb = winComb.map(
      obj => obj.map(
          index => resultArr[index]))

  let winner = ''
  for (let i=0; i<newWinComb.length; i++) {
    for (let j=0; j<newWinComb[i].length; j++) {
      if (newWinComb[i][0] === 'X' &&
          newWinComb[i][0] === newWinComb[i][1] &&
          newWinComb[i][1] === newWinComb[i][2]) {
        winner = `The winner is "X"`
      }
      if (newWinComb[i][0] === 'O' &&
          newWinComb[i][0] === newWinComb[i][1] &&
          newWinComb[i][1] === newWinComb[i][2]) {
        winner = `The winner is "O"`
      }
    }
  }
  if (!winner && newArray.every((item) => item.text !== "")) {
    winner = "Draw";
  }


  return {
    turn,
    setTurn,
    newArray,
    setNewArray,
    btnClick,
    resetBtn,
    winner,
  };
};

export default AllHooksHere;

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

  return {
    turn,
    setTurn,
    newArray,
    setNewArray,
    btnClick,
    resetBtn
  };
};

export default AllHooksHere;

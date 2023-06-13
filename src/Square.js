import React from "react";

function Square({btnClick, newArray}) {
    return (
        <div className="board" >
            {newArray.map(obj => {
                return (
                <button key={obj.key}
                    className="item"
                    onClick={() => {btnClick(obj.key)}}
                >{obj.text}</button>
            )})}
        </div>
    )
}
export default Square;
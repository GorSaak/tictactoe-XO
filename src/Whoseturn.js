import React from "react";

function Whoseturn({turn}) {
    return (
        <p>Must play: <span className="whose-turn">{turn}</span></p>
    )
}
export default Whoseturn;
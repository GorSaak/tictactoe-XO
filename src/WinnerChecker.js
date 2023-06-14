function WinnerChecker({newArray, resetBtn}) {

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
                winner = `The winner is "0"`
            }
        }
    }

    if (winner !== "") {
        return (
            <div onClick={resetBtn} className="win-popup">
                <p>THE GAME IS OVER</p>
                <p>{winner}</p>
                <button onClick={resetBtn}>Thank you</button>
            </div>
        );
    }


    return null;

}
export default WinnerChecker;
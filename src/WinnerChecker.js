
function WinnerChecker({winner, resetBtn}) {

    if (winner !== "") {
        return (
            <div onClick={resetBtn} className="win-popup">
                <p>{winner}</p>
            </div>
        );
    }

    return null;

}
export default WinnerChecker;
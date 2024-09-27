export default function GameOver({winner, onRestart}){
    return <div id="game-over">
        <h2>Fin de la partie</h2>
        {winner && <p>{winner} a gagné !</p>}
        {!winner && <p>Egalité</p>}
        <p>
            <button onClick={onRestart}>Rejouer !</button>
        </p>
    </div>
}
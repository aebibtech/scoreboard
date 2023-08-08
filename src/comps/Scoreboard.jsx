import Team from "./Team"

export default function Scoreboard({ players, updateScore, removePlayer, updatePlayerName }){
    return players && players.length > 0 ? players.map((player) => <Team key={player.id} team={player} updateScore={updateScore} removePlayer={removePlayer} updatePlayerName={updatePlayerName} />) : <p className="text-center text-xl">No players yet. Click + to add a player.</p>
}
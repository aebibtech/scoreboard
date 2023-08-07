import Team from "./Team"

export default function Scoreboard({ players, updateScore, removePlayer }){
    return players && players.length > 0 ? players.map((player) => <Team key={player.id} team={player} updateScore={updateScore} removePlayer={removePlayer} />) : <p className="text-center text-xl">No players yet. Add a player.</p>
}
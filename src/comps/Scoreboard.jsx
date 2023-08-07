export default function Scoreboard({ players, updateScore }){
    return players.length > 0 ? players.map((player) => <Team key={player.id} teamName={player.name} updateScore={updateScore} />) : <p className="text-center text-xl">No players yet. Add a player.</p>
}
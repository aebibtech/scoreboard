import { useState } from "react"
import Team from "./comps/Team"

function App() {
  const [players, setPlayers] = useState([])
  const [willAddPlayer, setWillAddPlayer] = useState(false)
  const [willRemovePlayer, setWillRemovePlayer] = useState(false)
  const [addPlayerName, setAddPlayerName] = useState("")
  const headingStyles = "text-center text-6xl border-b-2 border-black p-8 drop-shadow-md"

  function handleAddPlayer(){
    if(addPlayerName !== "" && players.filter((player) => player.name === addPlayerName).length === 0){
      setPlayers([...players, {id: Math.floor(Math.random() * 9999) + 1000, name: addPlayerName, score: 0 }])
      setWillAddPlayer(false)
      setAddPlayerName("")
    }
  }

  function handleCancel(){
    setWillAddPlayer(false)
    setAddPlayerName("")
  }

  // function handleCancelRemove(){
  //   setWillRemovePlayer(false)
  // }

  // function handleRemovePlayer(){
  //   setPlayers(players.filter())
  // }

  // function setScore(playerId, score){
  //   let newPlayers = players.slice()
  //   console.log(newPlayers)
  //   console.log(newPlayers.filter((player) => player.id === playerId)[0])
  //   newPlayers.filter((player) => player.id === playerId)[0].score = score
  //   setPlayers(newPlayers)
  // }

  return (
    <main className="grid grid-cols-2 bg-slate-100">
      <section className="h-screen border-r border-black">
        <h2 className={headingStyles}>Scoreboard <button className="px-3 bg-green-700 text-white hover:opacity-90" onClick={() => setWillAddPlayer(true)}>+</button>{/* <button className="px-3 bg-red-700 text-white hover:opacity-90" onClick={() => setWillRemovePlayer(true)}>-</button> */}</h2>
        <ul className="p-6 overflow-y-auto">
          {players.length > 0 ? players.map((player) => {
            return <Team key={player.id} teamName={player.name} />
          }) : <p className="text-center text-xl">No players yet. Add a player.</p>}
        </ul>
      </section>
      <section className="h-screen border-l border-black">
        <h2 className={headingStyles}>Timer</h2>
        <iframe className="w-full h-[480px]" src="https://www.bigtimer.net/?minutes=2&repeat=false" frameborder="0" allowfullscreen></iframe>
      </section>
      <dialog open={willAddPlayer} className="h-[300px] w-[600px] fixed top-24 shadow-xl rounded p-6 border border-black">
          <h2 className="text-4xl">Add Player</h2>
          <input type="text" className="block text-4xl border-b border-black my-12" value={addPlayerName} onChange={(e) => setAddPlayerName(e.target.value)} />
          <button className="px-6 py-3 bg-green-700 text-white hover:opacity-90 text-2xl rounded mr-3" onClick={handleAddPlayer}>Add</button>
          <button className="px-6 py-3 bg-red-700 text-white hover:opacity-90 text-2xl rounded" onClick={handleCancel}>Cancel</button>
      </dialog>
      {/* <dialog open={willRemovePlayer} className="h-[300px] w-[600px] fixed top-24 shadow-xl rounded p-6 border border-black">
          <h2 className="text-4xl">Remove Player (Index)</h2>
          <input type="text" className="block text-4xl border-b border-black my-12" value={addPlayerName} onChange={(e) => setAddPlayerName(e.target.value)} />
          <button className="px-6 py-3 bg-red-700 text-white hover:opacity-90 text-2xl rounded mr-3" onClick={handleRemovePlayer}>Remove</button>
          <button className="px-6 py-3 bg-green-700 text-white hover:opacity-90 text-2xl rounded" onClick={handleCancelRemove}>Cancel</button>
      </dialog> */}
    </main>
  )
}

export default App

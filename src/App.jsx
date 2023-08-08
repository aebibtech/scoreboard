import { useEffect, useState, useRef } from "react"
import Scoreboard from "./comps/Scoreboard"

function App() {
  const [players, setPlayers] = useState([])
  const [willAddPlayer, setWillAddPlayer] = useState(false)
  const [addPlayerName, setAddPlayerName] = useState("")
  const nameRef = useRef()
  const headingStyles = "text-center text-6xl border-b-2 border-black p-8 drop-shadow-md"
  
  useEffect(() => {
    if(willAddPlayer){
      nameRef.current.focus()
    }
  }, [willAddPlayer])

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

  function handleKeys(e){
    if(e.code === "Escape" && willAddPlayer){
      handleCancel()
    }
    if(e.code === "Enter" && willAddPlayer){
      handleAddPlayer()
    }
  }

  function handleWillAddPlayer(e){
    setAddPlayerName(e.target.value)
  }

  function updateScore(score, id){
    const newPlayers = players.slice()
    for(let ind = 0; ind < newPlayers.length; ind++){
      if(newPlayers[ind].id === id){
        newPlayers[ind].score = score
      }
    }
    setPlayers(newPlayers)
  }

  function updatePlayerName(name, id){
    const newPlayers = players.slice()
    const playerArr = newPlayers.filter(player => player.name === name)
    if(playerArr.length > 0){
      const currentPlayerName = newPlayers.filter(player => player.id === id)[0].name
      return currentPlayerName
    }
    for(let ind = 0; ind < newPlayers.length; ind++){
      if(newPlayers[ind].id === id){
        newPlayers[ind].name = name
      }
    }
    setPlayers(newPlayers)
    return true
  }

  function removePlayer(id){
    setPlayers(players.filter(player => player.id !== id))
  }

  return (
    <main className="h-screen grid sm:grid-cols-1 lg:grid-cols-2 bg-slate-100 lg:overflow-hidden grid-flow-dense" onKeyUp={handleKeys}>
      <section className="border-r border-black overflow-y-auto">
        <h2 className={headingStyles}>Scoreboard <button className="px-3 bg-green-700 text-white hover:opacity-90" onClick={() => setWillAddPlayer(true)}>+</button>{/* <button className="px-3 bg-red-700 text-white hover:opacity-90" onClick={() => setWillRemovePlayer(true)}>-</button> */}</h2>
        <ul className="p-6">
          <Scoreboard players={players} updateScore={updateScore} removePlayer={removePlayer} updatePlayerName={updatePlayerName} />
        </ul>
      </section>
      <section className="border-l border-black border-t-2 lg:border-t-0">
        <h2 className={headingStyles}>Timer</h2>
        <iframe className="w-full h-full" src="https://www.bigtimer.net/?minutes=2&repeat=false" frameBorder="0"></iframe>
      </section>
      <dialog open={willAddPlayer} className="h-[300px] w-[600px] fixed top-24 shadow-xl rounded p-6 border border-black">
          <h2 className="text-4xl">Add Player</h2>
          <input type="text" className="block text-4xl border-b border-black my-12" ref={nameRef} value={addPlayerName} onChange={handleWillAddPlayer} />
          <button className="px-6 py-3 bg-green-700 text-white hover:opacity-90 text-2xl rounded mr-3" onClick={handleAddPlayer}>Add</button>
          <button className="px-6 py-3 bg-red-700 text-white hover:opacity-90 text-2xl rounded" onClick={handleCancel}>Cancel</button>
      </dialog>
    </main>
  )
}

export default App

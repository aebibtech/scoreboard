import { useEffect, useState, useRef } from "react"

export default function Team({team, updateScore, removePlayer, updatePlayerName}){
    const [score, setScore] = useState(team ? team.score : 0)
    const [name, setName] = useState(team ? team.name: "")
    const nameRef = useRef()

    useEffect(() => {
        updateScore(score, team ? team.id : 0)
    }, [score])

    useEffect(() => {
        const result = updatePlayerName(name, team ? team.id : 0)
        if(result !== true){
            setName(result)
        }
    }, [name])

    function handleNameChange(e){
        if(e.target.value !== ""){
            setName(e.target.value)
        }
    }

    function handleKey(e){
        if(e.code === "Enter" || e.code === "Escape"){
            nameRef.current.blur()
        }
    }
    
    const liStyles = "py-6 text-4xl h-auto flex justify-between flex-wrap"
    const nameStyles = "inline-block w-[300px] leading-relaxed font-semibold overflow-hidden bg-transparent"
    const scoreButtonStyles = "border border-black px-3 hover:bg-black hover:text-white mr-3"
    const deleteButtonStyles = "border border-red-900 bg-red-900 px-3 hover:opacity-80"

    return(
        <li className={liStyles}>
            <input type="text" ref={nameRef} className={nameStyles} value={name} onChange={handleNameChange} onKeyUp={handleKey} />
            {/* <span className={nameStyles}>{team ? team.name : ""}</span> */}
            <span>
                <span className="inline-block w-[72px] ml-3 text-center mr-6 bg-transparent">{score}</span>
                <button className={scoreButtonStyles} onClick={ () => setScore(() => score + 1) }>+</button> 
                <button className={scoreButtonStyles} onClick={ () => setScore(() => score > 1 ? score - 1 : 0) }>-</button>
                <button className={deleteButtonStyles} onClick={() => { removePlayer(team.id) }}>&#128465;</button>
            </span>
        </li>
    )
}
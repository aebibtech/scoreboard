import { useEffect, useState } from "react"

export default function Team({team, updateScore, removePlayer}){
    const [score, setScore] = useState(0)

    useEffect(() => {
        updateScore(score, team ? team.id : 0)
    }, [score])
    
    const liStyles = "py-6 text-4xl"
    const nameStyles = "inline-block w-[300px] font-semibold"
    const scoreButtonStyles = "border border-black px-3 hover:bg-black hover:text-white mr-3"
    const deleteButtonStyles = "border border-red-900 bg-red-900 px-3 hover:opacity-80"

    return(
        <li className={liStyles}>
            <span className={nameStyles}>{team ? team.name : ""}</span>
            <span className="inline-block w-[72px] ml-3 text-center mr-6 bg-transparent">{score}</span>
            <button className={scoreButtonStyles} onClick={ () => setScore(() => score + 1) }>+</button> 
            <button className={scoreButtonStyles} onClick={ () => setScore(() => score > 1 ? score - 1 : 0) }>-</button>
            <button className={deleteButtonStyles} onClick={() => { removePlayer(team.id) }}>&#128465;</button>
        </li>
    )
}
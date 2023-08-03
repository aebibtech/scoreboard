import Team from "./comps/Team"

function App() {
  const headingStyles = "text-center text-6xl border-b-2 border-black p-8 drop-shadow-md"


  return (
    <main className="grid grid-cols-2 bg-slate-100">
      <section className="h-screen border-r border-black">
        <h2 className={headingStyles}>Scoreboard</h2>
        <ul className="p-6 overflow-y-auto">
          <Team teamName="James & Jeiah" />
          <Team teamName="Pau & Ed" />
          <Team teamName="Jason, Myk & Carl" />
        </ul>
      </section>
      <section className="h-screen border-l border-black">
        <h2 className={headingStyles}>Timer</h2>
        <iframe className="w-full h-[480px]" src="https://www.bigtimer.net/?minutes=2&repeat=false" frameborder="0" allowfullscreen></iframe>
      </section>
    </main>
  )
}

export default App

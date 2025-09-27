// src/App.jsx
import {useState} from "react";
import GameCard from "./components/GameCard";
import Popup from "./components/popup";
import StickyHeader from "./components/StickyHeader";
import { games } from "./data/data";

function App() {
  //Hold state 
  const [selectedGame, setSelectedGame]= useState(null);
  const handleCloseModel = () => setSelectedGame(null);

  const handleCardClick=(game)=> setSelectedGame(game);

  return (
    <>
      <div
        className="relative min-h-screen bg-gradient-to-tr from-[#fcf0fd] to-[#c7eae6]
"
      >
      <StickyHeader className="m-4" topicName={"Game Score"} />

        <div className="grid gap-7 grid-cols-2 smd:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-7">
          {games.map((game, index) => (
            <GameCard key={index}
              game={game} onClick={handleCardClick}

              />
            ))}

            
            {selectedGame && (
              <Popup game={selectedGame} onClose={handleCloseModel}/>
            )}
        </div>
      </div>
    </>
  );
}

export default App;

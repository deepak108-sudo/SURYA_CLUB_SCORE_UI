// src/App.jsx
import React from "react";
import GameCard from "./components/GameCard";
import StickyHeader from "./components/StickyHeader";

const games = [
  {
    title: "Cricket",
    webp: "/assets/cricket.webp",
    image: "/assets/cricket.jpg",
    description: "Exciting matches and tournaments for all cricket lovers.",
  },
  {
    title: "Basketball",
    webp: "/assets/basketball.webp",
    image: "/assets/basketball.jpg",
    description: "Singles and doubles tournaments for all skill levels.",
  },
  {
    title: "Table Tennis",
    webp: "/assets/tabletennis.webp",
    image: "/assets/tabletennis.jpg",
    description: "Fast-paced fun on the table every evening.",
  },
  {
    title: "Badminton",
    image: "/assets/badminton.jpg",
    webp: "/assets/badminton.webp",
    description: "Singles and doubles tournaments for all skill levels.",
  },
  {
    title: "Football",
    webp: "/assets/football.webp",
    image: "/assets/football.jpg",
    description: "Join our football community with weekly matches.",
  },
];

function App() {
  return (
    <>
      <div
        className="relative min-h-screen bg-gradient-to-tr from-[#fcf0fd] to-[#c7eae6]
"
      >
      <StickyHeader className="m-4" topicName={"Game Score"} />

        <div className="grid gap-7 grid-cols-2 smd:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-7">
          {games.map((game, index) => (
            <GameCard
              key={index}
              title={game.title}
              webp={game.webp}
              image={game.image}
              description={game.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

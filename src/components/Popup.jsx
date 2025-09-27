const Popup = ({ game, onClose }) => {
  if (!game) return null;

  const sortedMatches = [...game.matches].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-5 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-2xl  w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto aspect-[16/9] max-h-[80vh] shadow-md shadow-emerald-300/15  relative animate-popOpen">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-5 text-gray-700 hover:text-black "
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-xl font-bold mb-4">{game.title} Matches</h2>

        {/* Matches list */}
        <div className="space-y-3 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 pr-2">
          {sortedMatches.map((match, index) => (
            <div key={index} className="p-3 border rounded-md bg-gray-50 break-words whitespace-normal">
              <p>Date: {match.date}</p>
              <p>
                Winner: {match.winner} ({match.points})
              </p>
              {match.bestBatsman && <p>Best Batsman: {match.bestBatsman}</p>}
              {match.bestBowler && <p>Best Bowler: {match.bestBowler}</p>}
              {match.bestRunner && <p>Best Runner: {match.bestRunner}</p>}
              {match.secondRunner && <p>Second Runner: {match.secondRunner}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popup;

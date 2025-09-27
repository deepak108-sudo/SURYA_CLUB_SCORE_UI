import React from "react";
const StickyHeader = ({ topicName }) => {
  return (
    <nav className="sticky top-0 z-50 bg-[rgb(228,241,244)] shadow-lg shadow-gray-800/20 p-4 w-full rounded-full">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <h2 className="font-vermin text-3xl font-bold text-gray-750 tracking-wide">
          {topicName}
        </h2>
      </div>
    </nav>
  );
};

export default StickyHeader;

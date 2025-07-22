import React from 'react';

const CardHeader = ({ matchSummary }) => (
  <div className="text-lg font-bold text-center p-2 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-t-lg shadow-md">
    {matchSummary}
  </div>
);

const CardBody = ({ theme, venue, ambiance, dish, drink }) => (
  <div className="p-4 bg-white">
    <p className="mb-2"><strong>Theme:</strong> {theme || '[Placeholder Theme]'}</p>
    <p className="mb-2 flex items-center"><span className="mr-2">📍</span><strong>Venue:</strong> {venue || '[Placeholder Venue]'}</p>
    <p className="mb-2 flex items-center"><span className="mr-2">🎵</span><strong>Ambiance:</strong> {ambiance || '[Placeholder Ambiance]'}</p>
    <p className="mb-2 flex items-center"><span className="mr-2">🍽️</span><strong>Dish:</strong> {dish || '[Placeholder Dish]'}</p>
    <p className="mb-2 flex items-center"><span className="mr-2">🥤</span><strong>Drink:</strong> {drink || '[Placeholder Drink]'}</p>
  </div>
);

const CardFooter = () => (
  <div className="flex justify-between p-4 bg-gray-100 rounded-b-lg">
    <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition transform hover:scale-105">
      RSVP
    </button>
    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition transform hover:scale-105">
      Chat
    </button>
  </div>
);

const MeetupCard = ({ matchSummary, theme, venue, ambiance, dish, drink }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-4 transform hover:-translate-y-1">
      <CardHeader matchSummary={matchSummary} />
      <CardBody theme={theme} venue={venue} ambiance={ambiance} dish={dish} drink={drink} />
      <CardFooter />
    </div>
  );
};

export default MeetupCard;
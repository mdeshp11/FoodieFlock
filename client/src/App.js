import React, { useState } from 'react';
import './index.css';
import MeetupCard from './components/MeetupCard';

function App() {
  const [input, setInput] = useState('');
  const [meetups, setMeetups] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/meetups', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input }),
      });
      const data = await response.json();
      setMeetups(data.results || []);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-green-500 text-white p-6 text-center shadow-lg">
        <h1 className="text-4xl font-cursive font-bold mb-2">FoodieFlock</h1>
        <p className="text-lg">Connect Over Food & Culture</p>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto p-4 pt-8">
        {/* Input Section */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <p className="text-center mb-4 text-gray-600">
            Enter your food and cultural interests (e.g., "I love sushi and K-pop") to connect with others for culinary meetups!
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter food and interests..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition transform hover:scale-105"
            >
              Find Meetups
            </button>
          </form>
        </section>

        {/* Meetup Display */}
        <section className="space-y-6">
          {meetups.length > 0 ? (
            meetups.map((meetup, index) => (
              <MeetupCard
                key={index}
                matchSummary={meetup.matchSummary || 'No matches found'}
                theme={meetup.theme}
                venue={meetup.venue}
                ambiance={meetup.ambiance}
                dish={meetup.dish}
                drink={meetup.drink}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 flex items-center justify-center">
              <span className="mr-2">💡</span>No meetups available. Try a different input!
            </p>
          )}
        </section>
      </main>

      {/* Footer (Placeholder) */}
      <footer className="bg-gray-200 p-4 text-center text-gray-600 mt-8">
        <p>© 2025 FoodieFlock. [About | Help | Terms]</p>
      </footer>
    </div>
  );
}

export default App;
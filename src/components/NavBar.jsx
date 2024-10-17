import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export const NavBar = () => {
  useEffect(() => {
    // Agrega una fuente divertida y gruesa desde Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Bungee&display=swap'; // Fuente Bungee
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <header className="bg-gradient-to-r from-purple-800 to-blue-900 py-5 flex justify-center shadow-lg">
      <Link to="/">
        <h1 className="text-white text-4xl font-bold transition-all duration-300 ease-in-out hover:text-gray-200 hover:scale-110" style={{ fontFamily: 'Bungee, cursive' }}>
          CODE QUEST 🚀
        </h1>
      </Link>
    </header>
  );
};








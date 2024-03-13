import { useEffect } from 'react'; // Remove 'React' from the import

import '../App.css'; // Import header styles if any

const Header = () => {
  useEffect(() => {
    const heading = document.querySelector('.header h1');
    const colors = ['#ff0000', '#00ff00', '#0000ff']; // Array of colors

    let currentIndex = 0;

    const changeColor = () => {
      heading.style.color = colors[currentIndex];
      currentIndex = (currentIndex + 1) % colors.length; // Cycle through colors
    };

    // Change color every 1 second
    const intervalId = setInterval(changeColor, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <header className="header">
      <h1>Chanel Scrivens</h1>
    </header>
  );
};

export default Header;

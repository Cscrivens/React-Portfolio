import '../App.css'; // Import portfolio styles if any
import Screenshot1 from '../Images/Screenshot 1.png';
import Screenshot2 from '../Images/Screenshot 2.png';
import Screenshot3 from '../Images/Screenshot 3.png';
import Screenshot4 from '../Images/Screenshot 4.png';
import Screenshot5 from '../Images/Screenshot 5.png';

const Portfolio = () => {
  return (
    <div className="portfolio">
      {/* Project 1 */}
      <div className="project">
        <h2>Weather-Dashboard</h2>
        <p>06 Server-Side APIs: Weather Dashboard
My Task
Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another applications API and using it in the context of their own.
</p>
        <div className="project-image">
          <img src={Screenshot1} alt="Project 1 Screenshot" />
        </div>
        <div className="project-links">
          <a href="https://cscrivens.github.io/Weather-Dashboard//">View Project</a>
          <a href="https://github.com/Cscrivens/Weather-Dashboard">GitHub</a>
        </div>
      </div>

      {/* Project 2 */}
      <div className="project">
        <h2>CSS-Portfolio</h2>
        <p>02 Advanced CSS: Portfolio
Your Task
Welcome to this weeks Challenge! This is an even-numbered week, so you wont be given any starter code. Instead, you will create a web application from scratch! This week, you will build a portfolio page, which you can add to as the course progresses.
</p>
        <div className="project-image">
          <img src={Screenshot2} alt="Project 2 Screenshot" />
        </div>
        <div className="project-links">
          <a href="https://cscrivens.github.io/CSS-Portfolio/">View Project</a>
          <a href="https://github.com/Cscrivens/CSS-Portfolio">GitHub</a>
        </div>
      </div>

      {/* Project 3 */}
      <div className="project">
        <h2>Code-Quiz</h2>
        <p> Web APIs: Code Quiz
Your Task
At some point in your journey to become a full-stack web developer, you will likely be asked to complete a coding assessment—perhaps as part of an interview process. A typical coding assessment includes both multiple-choice questions and interactive coding challenges.
</p>
        <div className="project-image">
          <img src={Screenshot3} alt="Project 3 Screenshot" />
        </div>
        <div className="project-links">
          <a href="https://cscrivens.github.io/Code-Quiz/">View Project</a>
          <a href="https://github.com/Cscrivens/Code-Quiz">GitHub</a>
        </div>
      </div>

      {/* Project 4 */}
      <div className="project">
        <h2>Work Day Scheduler</h2>
        <p>Your Task
Create a simple calendar application that allows a user to save events for each hour of a typical working day (9am 5pm) by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
</p>
        <div className="project-image">
          <img src={Screenshot4} alt="Project 4 Screenshot" />
        </div>
        <div className="project-links">
          <a href="https://cscrivens.github.io/WorkSchedulerHW5/">View Project</a>
          <a href="https://github.com/Cscrivens/WorkSchedulerHW5">GitHub</a>
        </div>
      </div>

      {/* Project 5 */}
      <div className="project">
        <h2>Password-Generator</h2>
        <p>Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another applications API and using it in the context of their own.
</p>
        <div className="project-image">
          <img src={Screenshot5} alt="Project 5 Screenshot" />
        </div>
        <div className="project-links">
          <a href="https://cscrivens.github.io/Password-Generator/">View Project</a>
          <a href="https://github.com/Cscrivens/Password-Generator">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;


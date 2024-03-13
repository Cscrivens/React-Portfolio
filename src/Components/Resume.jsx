import '../App.css';

const Resume = () => {
  return (
    <div className="resume-container">
         <div className="expertise">
        <h2>Expertise</h2>
        <div className="professional">
          <h3>Professional</h3>
          <ul>
            <li>Project Management</li>
            <li>Office Administration</li>
            <li>Audit Practices</li>
            <li>Multitasking Skills</li>
            <li>Calendar Management</li>
            <li>Problem-solving Skills</li>
            <li>Bookkeeping</li>
            <li>Time Management</li>
            <li>Interpersonal Communications</li>
            <li>Troubleshooting</li>
          </ul>
        </div>
        <div className="technical">
          <h3>Technical</h3>
          <ul>
            <li>Lotus Notes</li>
            <li>Microsoft Office Suite</li>
            <li>HTML Development</li>
            <li>CRM</li>
            <li>OnBase</li>
          </ul>
        </div>
      </div>

      <div className="education">
        <h2>Education</h2>
        <div className="education-item">
          <h3>Associates of Arts</h3>
          <p>Cuyahoga Community College, May 2017</p>
        </div>
        <div className="education-item">
          <h3>Associates of Information Services</h3>
          <p>National Institute of Technology, June 2002</p>
        </div>
      </div>

      <div className="professional-experience">
        <h2>Professional Experience</h2>
        <div className="job">
          <h3>OLYMPIC STEEL INC. (May 2011 – Present)</h3>
          <p>Inside Sales Representative (March 2014 – Present)</p>
          <ul>
            <li>Identify sales opportunities for Outside Sales Representatives while upselling and cross-selling existing accounts.</li>
            <li>Assess customers’ need to forge productive relationships while maintaining top satisfaction levels to increase sales.</li>
            <li>Propel new business transactions by incorporating business development and sales initiatives into value propositions.</li>
            <li>Accumulate relevant client information while generating compelling presentations to sell company products.</li>
          </ul>
        </div>
        <div className="job">
          <h3>Senior Production Planning Associate (July 2013 – March 2014)</h3>
          {/* Add details */}
        </div>
        <div className="job">
          <h3>Purchasing Associate (February 2012 – July 2013)</h3>
          {/* Add details */}
        </div>
        <div className="job">
          <h3>Administrative Support Associate (May 2011 – February 2012)</h3>
          {/* Add details */}
        </div>
        <div className="job">
          <h3>Administrative Assistant/Human Resource Support (2006 – 2011)</h3>
          {/* Add details */}
        </div>
      </div>

      <div className="summary">
        <h2>Summary</h2>
        <p>Innovative, versatile professional with significant experience accelerating administrative operations across various industries. Excelled in project management, process improvement, workflow coordination, business correspondence, and strategic communications. Outgoing team player commended for exemplifying a positive attitude, leadership, and professionalism to inspire teamwork, create feasible solutions to operational challenges, and achieve business goals.</p>
        <p>234-417-7787</p>
      </div>

      <div className="contact">
        <h2>Contact</h2>
        <p>Cscrivens80@yahoo.com</p>
        <p>Charlotte, NC</p>
        <p><a href="www.linkedin.com/in/chanel-scrivens">www.linkedin.com/in/chanel-scrivens</a></p>
      </div>
    </div>
  );
}

export default Resume;

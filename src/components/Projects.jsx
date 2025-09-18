import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: "AI Research Assistant",
      description: "A tool that uses AI to help researchers in the process of systematic literature reviews.",
      technologies: ["React", "Firebase", "Firebase Functions", "Gemini API"],
      image: "/api/placeholder/600/400",
      // liveUrl: null, // No live demo available
    //   githubUrl: "https://github.com/yourusername/ai-research-assistant"
    },
    {
        id: 2,
        title: "Polling Application",
        description: "A full-stack e-commerce solution built with React and Node.js. Features include user authentication, payment processing, and admin dashboard.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        image: "/api/placeholder/600/400",
        liveUrl: "https://your-polling-app.com",
        githubUrl: "https://github.com/yourusername/polling-app"
    },  
    {
      id: 3,
      title: "Grow Away",
      description: "A simple 2D game created as an entry to a 7-day game jam.",
      technologies: ["Unity2D", "C#"],
      image: "/images/projects/grow-away.png",
      liveUrl: "https://mhmdal.itch.io/grow-away",
      githubUrl: "https://github.com/MhmdAL/Grow-Away", // Private repository
    },
    {
      id: 4,
      title: "AR Pipe System Visualiser",
      description: "A prototype application that visualises pipe systems under street manholes in an AR environment. Built as a proof of concept for a client.",
      technologies: ["Unity3D", "Augmented Reality", "C#"],
      image: "/api/placeholder/600/400"
      // liveUrl: null, // No live demo
      // githubUrl: null, // Private/proprietary project
    },
    {
        id: 5,
        title: "Drone Delivery System",
        description: "DDS is a drone delivery system prototype. It has 3 main components: the drone, the ground station, and the mobile app. The user can request a drone to his station which will come and allow him to load his items. Then he can select a destination and the drone delivers his items to the recipient.",
        technologies: ["Node.js", "PostgreSQL", "Express", "MQTT", "Raspberry Pi", "Parrot Drone", "Python", "Flask", "MAVLink Protocol", "Native Android"],
        image: "/api/placeholder/600/400",
        liveUrl: "https://github.com/MhmdAL/dds_backend", // No live demo
        githubUrl: "https://github.com/MhmdAL/dds_backend", // Private/proprietary project
      },
      {
        id: 6,
        title: "Chess Timer Clock",
        description: "A chess timer clock built with an Arduino and an LCD display.",
        technologies: ["Arduino", "Electronics", "C++", "LCD"],
        image: "/api/placeholder/600/400",
        // liveUrl: null, // No live demo
        githubUrl: "https://github.com/MhmdAL/chess-timer", // Private/proprietary project
      },
      {
        id: 7,
        title: "Math Plotter",
        description: "A tool built in C and OpenGL that allows the user to plot basic mathematical functions in reverse polish notation.",
        technologies: ["C", "OpenGL", "GTK3", "CGLM"],
        image: "/images/projects/plotter.png"
        // liveUrl: null, // No live demo
        // githubUrl: null, // Private/proprietary project
      }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>A selection of projects that showcase my development skills and creativity.</p>
        </div>
        
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="image-placeholder" style={{display: 'none'}}>
                  <div className="placeholder-icon">📷</div>
                  <span>Project Screenshot</span>
                </div>
                {(project.liveUrl || project.githubUrl) && (
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.liveUrl && (
                        <a href={project.liveUrl} className="btn btn-small btn-primary" target="_blank" rel="noopener noreferrer">
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} className="btn btn-small btn-secondary" target="_blank" rel="noopener noreferrer">
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

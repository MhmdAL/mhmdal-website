import './Projects.css'
import ProjectCard from './ProjectCard'

function Projects() {
  const projects = [
    {
        id: 1,
        title: "Polling Application",
        description: "A polling application built with Angular and ASP.NET Core. It allows the user to create polls and share them with others.",
        technologies: ["Angular", "ASP.NET Core", "C#", "Supabase", "PostgreSQL"],
        image: "/api/placeholder/600/400",
        liveUrl: "https://your-polling-app.com",
        githubUrl: "https://github.com/MhmdAL/polling-app"
    },  
    {
        id: 2,
        title: "Drone Delivery System",
        description: "DDS is a drone delivery system prototype. It has 3 main components: the drone, the ground station, and the mobile app. The user can request a drone to his station which will come and allow him to load his items. Then he can select a destination and the drone delivers his items to the recipient.",
        technologies: ["Node.js", "PostgreSQL", "Express", "MQTT", "Raspberry Pi", "Parrot Drone", "Python", "Flask", "MAVLink Protocol", "Native Android"],
        image: "/api/placeholder/600/400",
        liveUrl: "https://github.com/MhmdAL/dds_backend", // No live demo
        githubUrl: "https://github.com/MhmdAL/dds_backend", // Private/proprietary project
      },
      {
        id: 3,
        title: "Grow Away",
        description: "A simple 2D game created as an entry to a 7-day game jam.",
        technologies: ["Unity2D", "C#"],
        images: ["/images/projects/grow-away.png", "/images/projects/grow-away2.png"],
        liveUrl: "https://mhmdal.itch.io/grow-away",
        githubUrl: "https://github.com/MhmdAL/Grow-Away", // Private repository
      },
  
    {
        id: 4,
        title: "AI Research Assistant",
        description: "A tool that uses AI to help researchers in the process of systematic literature reviews.",
        technologies: ["React", "Firebase", "Firebase Functions", "Gemini API"],
        image: "/images/projects/prevue.png",
        // liveUrl: null, // No live demo available
      //   githubUrl: "https://github.com/yourusername/ai-research-assistant"
      },  

    {
      id: 5,
      title: "AR Pipe System Visualiser",
      description: "A prototype application that visualises pipe systems under street manholes in an AR environment. Built as a proof of concept for a client.",
      technologies: ["Unity3D", "Augmented Reality", "C#"],
      image: "/images/projects/pipe-visualiser.jpeg"
      // liveUrl: null, // No live demo
      // githubUrl: null, // Private/proprietary project
    },
      {
        id: 6,
        title: "Chess Timer Clock",
        description: "A chess timer clock built with an Arduino and an LCD display.",
        technologies: ["Arduino", "Electronics", "C++", "LCD"],
        image: "/images/projects/chess-timer.png",
        // liveUrl: null, // No live demo
        githubUrl: "https://github.com/MhmdAL/chess-timer", // Private/proprietary project
      },
      {
        id: 7,
        title: "Math Plotter",
        description: "A tool built in C and OpenGL that allows the user to plot basic mathematical functions in reverse polish notation.",
        technologies: ["C", "OpenGL", "GTK3", "CGLM"],
        image: "/images/projects/plotter.png",
        // liveUrl: null, // No live demo
        githubUrl: "https://github.com/MhmdAL/plotter", // Private/proprietary project
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
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

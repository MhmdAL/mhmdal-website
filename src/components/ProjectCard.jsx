import { useState } from 'react'
import { createPortal } from 'react-dom'
import './ProjectCard.css'

function ProjectCard({ project }) {
  // Support both single image (string) and multiple images (array)
  const images = Array.isArray(project.images) ? project.images : [project.image || project.images]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showOverlay, setShowOverlay] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToImage = (index) => {
    setCurrentImageIndex(index)
  }

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const handleModalClick = (e) => {
    // Close modal if clicking on backdrop, not the image
    if (e.target.classList.contains('image-modal')) {
      closeModal()
    }
  }

  return (
    <div 
      className="project-card"
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >
      <div className="project-image">
        <img 
          src={images[currentImageIndex]} 
          alt={`${project.title} - Image ${currentImageIndex + 1}`}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
          onClick={openModal}
          style={{ cursor: 'pointer' }}
        />
        <div className="image-placeholder" style={{display: 'none'}}>
          <div className="placeholder-icon">📷</div>
          <span>Project Screenshot</span>
        </div>

        {/* Image Navigation - only show if multiple images */}
        {images.length > 1 && (
          <>
            {/* Navigation Arrows */}
            <button className="image-nav image-nav-prev" onClick={prevImage}>
              ‹
            </button>
            <button className="image-nav image-nav-next" onClick={nextImage}>
              ›
            </button>
            
            {/* Image Dots Indicator */}
            <div className="image-dots">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`image-dot ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => goToImage(index)}
                />
              ))}
            </div>
            
            {/* Image Counter */}
            <div className="image-counter">
              {currentImageIndex + 1} / {images.length}
            </div>
          </>
        )}

      </div>
      
      {/* Project Links - Below Image */}
      {(project.liveUrl || project.githubUrl) && (
        <div className={`project-links-container ${showOverlay ? 'visible' : ''}`}>
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

      {/* Image Modal - Rendered as Portal at document root */}
      {showModal && createPortal(
        <div className="image-modal" onClick={handleModalClick}>
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            
            <div className="modal-image-container">
              <img 
                src={images[currentImageIndex]} 
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="modal-image"
              />
              
              {/* Navigation in modal for multiple images */}
              {images.length > 1 && (
                <>
                  <button className="modal-nav modal-nav-prev" onClick={prevImage}>
                    ‹
                  </button>
                  <button className="modal-nav modal-nav-next" onClick={nextImage}>
                    ›
                  </button>
                  
                  <div className="modal-image-counter">
                    {currentImageIndex + 1} / {images.length}
                  </div>
                  
                  <div className="modal-image-dots">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        className={`modal-image-dot ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => goToImage(index)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            
            <div className="modal-project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}

export default ProjectCard

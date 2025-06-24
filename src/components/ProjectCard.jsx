import { ExternalLink, Github } from 'lucide-react'

const ProjectCard = ({ project }) => {
  // Function to get the appropriate CSS class for each technology
  const getTechTagClass = (tech) => {
    const techLower = tech.toLowerCase()

    if (techLower.includes('react')) return 'tech-tag-react'
    if (techLower.includes('typescript')) return 'tech-tag-typescript'
    if (techLower.includes('vite')) return 'tech-tag-vite'
    if (techLower.includes('tailwind')) return 'tech-tag-tailwind'
    if (techLower.includes('node')) return 'tech-tag-node'
    if (techLower.includes('mongodb')) return 'tech-tag-mongodb'
    if (techLower.includes('firebase')) return 'tech-tag-firebase'
    if (techLower.includes('next')) return 'tech-tag-nextjs'
    if (techLower.includes('stripe')) return 'tech-tag-stripe'
    if (techLower.includes('postgresql')) return 'tech-tag-postgresql'
    if (techLower.includes('d3')) return 'tech-tag-d3'
    if (techLower.includes('aws')) return 'tech-tag-aws'
    if (techLower.includes('framer')) return 'tech-tag-framer'
    if (techLower.includes('ai chatbot')) return 'tech-tag-ai-chatbot'
    if (techLower.includes('php')) return 'tech-tag-php'
    if (techLower.includes('openai')) return 'tech-tag-default'
    if (techLower.includes('weather api')) return 'tech-tag-default'
    if (techLower.includes('mapbox')) return 'tech-tag-default'
    if (techLower.includes('socket.io')) return 'tech-tag-default'
    if (techLower.includes('prisma')) return 'tech-tag-default'
    if (techLower.includes('shadcn/ui')) return 'tech-tag-default'
    if (techLower.includes('react query')) return 'tech-tag-default'

    return 'tech-tag-default'
  }

  return (
    <div className="bg-white rounded-lg shadow-card overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Technology Tags */}
        <div className="mb-6">
          {project.technologies.map((tech, index) => (
            <span key={index} className={`tech-tag ${getTechTagClass(tech)}`}>
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center space-x-2"
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </a>
          {project.githubRepo && (
            <a
              href={project.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center space-x-2"
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

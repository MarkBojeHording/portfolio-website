import ProjectCard from './ProjectCard'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI Recipe Generator",
      description: "A full-stack application that generates personalized recipes using AI. Built with React, Node.js, and OpenAI API. Features user authentication, recipe saving, and dietary preference filtering.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "OpenAI API", "MongoDB"],
      liveDemo: "https://ai-recipe-generator.vercel.app",
      githubRepo: "https://github.com/yourusername/ai-recipe-generator"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A comprehensive task management application with real-time collaboration features. Includes drag-and-drop functionality, team workspaces, and progress tracking with analytics.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      liveDemo: "https://task-manager-app.vercel.app",
      githubRepo: "https://github.com/yourusername/task-manager-app"
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description: "A modern e-commerce platform with payment integration, inventory management, and admin dashboard. Built with Next.js, Stripe, and PostgreSQL for scalability.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
      liveDemo: "https://ecommerce-platform.vercel.app",
      githubRepo: "https://github.com/yourusername/ecommerce-platform"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard with location-based forecasts, interactive maps, and historical data visualization. Integrates multiple weather APIs for comprehensive data.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
      technologies: ["React", "D3.js", "Weather API", "Mapbox"],
      liveDemo: "https://weather-dashboard.vercel.app",
      githubRepo: "https://github.com/yourusername/weather-dashboard"
    },
    {
      id: 5,
      title: "Learning Management System",
      description: "A comprehensive LMS built for educational institutions. Features course creation, student progress tracking, video conferencing integration, and automated assessments.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "Socket.io", "AWS S3"],
      liveDemo: "https://lms-platform.vercel.app",
      githubRepo: "https://github.com/yourusername/lms-platform"
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "A minimalist, responsive portfolio website built with modern web technologies. Features smooth animations, dark mode toggle, and optimized performance.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      liveDemo: "https://portfolio-website.vercel.app",
      githubRepo: "https://github.com/yourusername/portfolio-website"
    },
    {
      id: 7,
      title: "Gemba Indonesia Karya",
      description: "A modern business consulting platform built with React, TypeScript, and Vite. Features comprehensive business consulting services, interactive components, data visualization, and an AI-powered chatbot for customer support. Built for Gemba Indonesia Karya, a business transformation consultancy specializing in Lean Management, AI, and Machine Learning.",
      image: "/images/gemba.png",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "React Query", "AI Chatbot", "PHP Backend"],
      liveDemo: "https://www.gembaindonesia.com/",
      githubRepo: "https://github.com/MarkBojeHording/Gemba-site"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of projects showcasing my full-stack development skills and passion for creating impactful applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

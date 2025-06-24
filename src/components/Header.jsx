import { Github, Linkedin, Twitter } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-white shadow-subtle">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          {/* Name */}
          <h1 className="text-2xl font-bold text-gray-900">
            Mark Hording
          </h1>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/MarkBojeHording"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-icon"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/mark-hording-aa0ba07/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-icon"
            >
              <Linkedin />
            </a>
            <a
              href="https://x.com/MarkTechThai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="social-icon"
            >
              <Twitter />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

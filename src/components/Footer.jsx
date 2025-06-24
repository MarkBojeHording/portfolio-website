import { Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-gray-600 mb-4 md:mb-0">
            © 2024 Mark Hording. All rights reserved.
          </div>

          {/* Contact */}
          <div className="flex items-center space-x-2">
            <a
              href="mailto:markhording@gmail.com"
              className="flex items-center space-x-2 text-gray-600 hover:text-primary-500 transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              <span>markhording@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

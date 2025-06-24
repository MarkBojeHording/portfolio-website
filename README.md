# AI Portfolio - Full-Stack Developer Portfolio

A minimalist, responsive single-page portfolio website built with React and Tailwind CSS. Designed to showcase projects and professional experience with a clean, modern aesthetic.

## Features

- **Minimalist Design**: Clean, professional layout with focus on content
- **Responsive Grid**: Projects displayed in a responsive grid (2 columns on desktop, 1 on mobile)
- **Social Media Integration**: GitHub, LinkedIn, and Twitter links in header
- **Project Showcase**: Each project includes image, description, tech stack, and links
- **Modern Tech Stack**: Built with React, Vite, Tailwind CSS, and Lucide React icons
- **Performance Optimized**: Fast loading with Vite build tool
- **Accessibility**: Proper ARIA labels and semantic HTML

## Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ai-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Personal Information

Update the following files with your information:

1. **Header** (`src/components/Header.jsx`):
   - Change "Your Name" to your actual name
   - Update social media URLs with your profiles

2. **Hero** (`src/components/Hero.jsx`):
   - Modify the introduction text to match your background

3. **Projects** (`src/components/Projects.jsx`):
   - Replace the sample projects with your own
   - Update project images, descriptions, and links

4. **Footer** (`src/components/Footer.jsx`):
   - Update the email address and copyright information

5. **HTML Title** (`index.html`):
   - Change the page title to your name

### Styling

The project uses Tailwind CSS for styling. You can customize:

- Colors in `tailwind.config.js`
- Custom CSS classes in `src/index.css`
- Component-specific styles in each component file

### Adding Projects

To add a new project, add an object to the `projects` array in `src/components/Projects.jsx`:

```javascript
{
  id: 7,
  title: "Your Project Name",
  description: "Description of your project...",
  image: "https://your-image-url.com/image.jpg",
  technologies: ["React", "Node.js", "MongoDB"],
  liveDemo: "https://your-demo-url.com",
  githubRepo: "https://github.com/yourusername/your-repo"
}
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx      # Navigation and social links
│   ├── Hero.jsx        # Introduction section
│   ├── Projects.jsx    # Projects grid container
│   ├── ProjectCard.jsx # Individual project display
│   └── Footer.jsx      # Footer with contact info
├── App.jsx             # Main app component
├── main.jsx           # React entry point
└── index.css          # Global styles and Tailwind imports
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy: `npm run deploy`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please reach out via the contact information in the footer.

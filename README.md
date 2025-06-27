# Frontend Developer Portfolio

A modern, responsive, and professional portfolio website built with React.js. This portfolio showcases skills, projects, and experience with a rich, accessible, and visually appealing UI.

## ✨ Features

- **Modern Design**: Clean, professional design with gradient effects and smooth animations
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Interactive Animations**: Smooth scroll animations and hover effects using Framer Motion
- **Accessible**: Built with accessibility in mind following WCAG guidelines
- **Performance Optimized**: Fast loading times and optimized bundle size
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Interactive project cards with filtering capabilities
- **Skills Visualization**: Animated progress bars and skill categories
- **Experience Timeline**: Professional work history and education timeline

## 🚀 Technologies Used

- **React 18** - Modern React with hooks and functional components
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful, customizable icons
- **React Router DOM** - Client-side routing
- **React Typed** - Typing animation effects
- **React Intersection Observer** - Scroll-triggered animations
- **CSS3** - Custom styling with CSS variables and gradients

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation component
│   ├── Hero.js            # Hero section with animated text
│   ├── About.js           # About section with stats
│   ├── Skills.js          # Skills with progress bars
│   ├── Projects.js        # Project showcase with filtering
│   ├── Experience.js      # Work experience timeline
│   ├── Contact.js         # Contact form and info
│   └── Footer.js          # Footer with links
├── App.js                 # Main app component
├── index.js              # Entry point
└── index.css             # Global styles
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎨 Customization

### Personal Information
Update the following files with your personal information:

- **Hero.js**: Update name, title, and description
- **About.js**: Update personal story and statistics
- **Skills.js**: Modify skill levels and categories
- **Projects.js**: Add your own projects with descriptions and links
- **Experience.js**: Update work history and education
- **Contact.js**: Update contact information and social links

### Styling
The portfolio uses CSS variables for easy customization. Update colors in `src/index.css`:

```css
:root {
  --primary-color: #6366f1;    /* Main brand color */
  --secondary-color: #f59e0b;  /* Secondary color */
  --accent-color: #10b981;     /* Accent color */
  /* ... other variables */
}
```

### Social Links
Update social media links in:
- `src/components/Hero.js`
- `src/components/Contact.js`
- `src/components/Footer.js`

### Projects
Add your projects in `src/components/Projects.js`:

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Project description...',
    image: '🛒', // Emoji or image URL
    category: 'react', // or 'javascript'
    technologies: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://your-project.com',
    githubUrl: 'https://github.com/yourusername/project',
    featured: true
  }
];
```

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast ratios
- Screen reader friendly
- Focus indicators

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Made with ❤️ by [Your Name]** 
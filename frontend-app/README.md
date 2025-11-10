# Portfolio Website

A modern, responsive portfolio website built with React and Bootstrap CSS, featuring a sleek design inspired by bold color schemes.

## Features

- **Responsive Design**: Works seamlessly on all devices
- **Modern UI**: Bold red, dark grey/black, and white color scheme
- **Component-Based**: Built with React for maintainability
- **Smooth Scrolling**: Enhanced user experience with smooth navigation
- **Monochrome Images**: Elegant grayscale effect on images

## Tech Stack

- React 19
- Bootstrap 5
- React Bootstrap
- Font Awesome for icons
- Google Fonts (Asimovian)

## Sections

1. **Hero Section**: Bold split-screen design with large name overlay
2. **About Section**: Clean white background with image and signature
3. **Projects Section**: Image-based project cards with "Live" buttons
4. **Contact Section**: Simple and elegant contact information

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── Components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## Notes

- Make sure to add your images to the `public` folder:
  - `/Blesson.jpg` (your profile image)
  - `/images/about.jpg` (about section image)
  - `/images/project1.jpg` through `/images/project6.jpg` (project images)
- Add your resume PDF as `resume.pdf` in the public folder
- Update project details and links in the `Projects.jsx` component
- Update social media links and contact information in the respective components

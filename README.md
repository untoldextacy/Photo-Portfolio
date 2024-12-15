# My Photography Portfolio

A modern and animated photography portfolio showcasing projects, an about section, a contact form, and a gallery page. Built with React, TailwindCSS, and Framer Motion.

## Features

- ### Home Page: Includes a hero section with animations and an introduction.
- ### Gallery Page: Displays photography work with ### animated transitions for images.
- ### About Page: Provides a brief overview of the photographer with elegant styling.
- ### Contact Page: Includes a responsive form for users to send messages.
- ### Dynamic Animations: Smooth transitions and animations using Framer Motion.
- ### Responsive Design: Fully optimized for mobile, tablet, and desktop screens.

## Technologies Used
- ### React: Frontend framework for building UI components.
- ### TailwindCSS: Utility-first CSS framework for styling.
- ### Framer Motion: Animation library for smooth transitions and effects.
- ### React Router: Handles navigation between pages.


## Installation and Setup
1) Clone the repository:

```bash
git clone https://github.com/your-username/photography-portfolio.git
cd photography-portfolio
```

2) Install dependencies: 
```bash
npm install
```

3) Run the developemnt server:
```bash
npm run dev
```
4) Open the application in your browser

## Folder Structure
```bash
📦 photography-portfolio
├── 📁 public            // Static assets (e.g., images)
├── 📁 src
│   ├── 📁 components    // Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Gallery.jsx
│   │   └── ...
│   ├── 📁 pages         // Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── GalleryPage.jsx
│   │   └── Contact.jsx
│   ├── App.jsx          // Main app with routes
│   └── index.jsx        // Entry point
├── tailwind.config.js   // TailwindCSS configuration
└── package.json         // Project metadata and scripts
```

## How to add new images (in case you want to use this template)
1) Place your images in the |public/img| folder
2) Update the GalleryPage.jsx component

```bash
<img
  src="/img/your-new-image.jpg"
  alt="Description"
  className="h-full w-full object-cover rounded-lg"
/>
```
## Future Improvements
- Add a backend to handle contact form submissions.
- Integrate an email-sending service (e.g., EmailJS or Nodemailer).
- Include a dedicated blog or testimonials section.
- Optimize for SEO and performance.

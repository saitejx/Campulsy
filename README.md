# Student Community Platform

An open-source platform designed for college students to discover opportunities, work on projects, join communities, and contribute to open source. 

This repository currently contains the frontend prototype, built to be easily extendable for future backend integrations.

## Features

- **Project Discovery:** Browse and discover student-built projects.
- **Opportunities Board:** Find hackathons, events, internships, and clubs.
- **Learning Resources:** Access shared notes, algorithms, and study materials.
- **Open Source:** Find beginner-friendly open-source opportunities tailored for students.
- **Responsive Design:** A clean, modern UI that works perfectly on desktop and mobile.

## Tech Stack

- React (v18)
- Vite
- React Router DOM
- CSS (Custom modern design system)
- Lucide React (Icons)

## Installation Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/student-platform.git
   cd student-platform
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development Commands

- Start the development server:
  ```bash
  npm run dev
  ```

- Build for production:
  ```bash
  npm run build
  ```

- Preview the production build:
  ```bash
  npm run preview
  ```

## Project Structure

```text
src/
├── components/   # Reusable UI components (Navbar, Cards, etc.)
├── pages/        # Route components (Home, Projects, etc.)
├── layouts/      # Page wrappers (MainLayout)
├── data/         # Static/mock data for the UI
├── assets/       # Images, SVGs, etc.
├── hooks/        # Custom React hooks
├── utils/        # Helper functions
├── App.jsx       # App routing setup
├── main.jsx      # React entry point
└── index.css     # Global CSS and design tokens
```

## How to Contribute

We welcome contributions! As this is an early-stage open source project, here is how you can help:

1. **Fork the repository** and clone your fork locally.
2. **Find an issue** or pick a page that is currently using the `Placeholder` component.
3. **Create a branch** for your feature (`git checkout -b feature/amazing-feature`).
4. **Build the feature** using the existing design tokens in `index.css`.
5. **Commit your changes** (`git commit -m 'Add amazing feature'`).
6. **Push to the branch** (`git push origin feature/amazing-feature`).
7. **Open a Pull Request** describing your changes.

When building new UI components, please refer to the `index.css` file for utility classes, colors, and styling patterns to ensure consistency across the platform.

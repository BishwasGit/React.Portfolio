# React Portfolio - Agent Guidelines

## Build Commands
- `npm start` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm test` - Run tests in watch mode
- `npm test -- --testNamePattern="testName"` - Run single test
- `npm test -- --watchAll=false` - Run all tests once

## Code Style Guidelines

### Imports
- React imports first: `import React from 'react'`
- Third-party libraries next
- Local components/relative imports last
- CSS imports immediately after React imports

### Component Structure
- Functional components with arrow functions
- Export default at bottom of file
- Props destructuring in function signature
- Use semantic HTML elements

### Naming Conventions
- PascalCase for components
- camelCase for variables/functions
- kebab-case for CSS classes
- Descriptive component names matching folder structure

### Styling
- CSS modules: `import './component.css'`
- CSS custom properties in `index.css`
- Mobile-first responsive design
- Use CSS Grid/Flexbox for layouts

### Libraries & Patterns
- React Router for navigation
- Material-UI components for UI elements
- AOS for scroll animations
- React Icons for iconography
- No TypeScript - plain JavaScript

### File Organization
- Component folders contain: Component.js, component.css
- Assets in src/assets/
- No test files currently present

### Error Handling
- Use React error boundaries where needed
- Console errors for development debugging
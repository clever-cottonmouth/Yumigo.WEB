# Yumigo Web Application

A modern web application built with Vue 3, Vite, and Bootstrap.

## Features

- Vue 3 with Composition API
- Vite for fast development and building
- Bootstrap 5 for responsive design
- Pinia for state management
- Vue Router for navigation
- SweetAlert2 for beautiful alerts
- Bootstrap Icons for iconography

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run format` - Format code using Prettier

## Project Structure

```
├── src/                    # Source code
│   ├── assets/            # Static assets (images, fonts, etc.)
│   ├── components/        # Reusable Vue components
│   │   └── layout/       # Layout components (header, footer, etc.)
│   ├── composables/       # Vue composition functions
│   ├── constants/         # Application constants and configuration
│   ├── router/           # Vue Router configuration
│   ├── services/         # API services and external integrations
│   ├── stores/           # Pinia store modules
│   ├── views/            # Page components
│   │   ├── auth/        # Authentication related pages
│   │   ├── cart/        # Shopping cart pages
│   │   ├── home/        # Home page components
│   │   ├── menu-item/   # Menu item related pages
│   │   └── order/       # Order management pages
│   ├── App.vue           # Root Vue component
│   └── main.js           # Application entry point
├── public/               # Public static assets
├── node_modules/         # Dependencies
└── vite.config.js        # Vite configuration
```

### Key Directories

- **components/**: Reusable Vue components used throughout the application
- **views/**: Page-level components organized by feature
- **stores/**: Pinia store modules for state management
- **services/**: API integration and external service connections
- **composables/**: Reusable Vue composition functions
- **router/**: Vue Router configuration and route definitions
- **constants/**: Application-wide constants and configuration
- **assets/**: Static assets like images, fonts, and global styles

## Development

The project uses:

- Vite for fast development and building
- Prettier for code formatting
- Vue DevTools for debugging

## License

Private - All rights reserved

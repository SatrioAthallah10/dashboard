# Responsive React Dashboard

A high-performance, responsive React dashboard built following the strict Neo-Brutalist & High-Contrast Editorial design pattern from the portfolio project.

## Features

- **Sidebar Navigation**: Desktop fixed sidebar with active indicators and mobile collapsible drawer overlay.
- **Header**: Sticky header with glassmorphism backdrop blur, live search input with clear action, status state toggles, notification indicators, and user profile shortcuts.
- **Dashboard Statistics**: Interactive metric cards featuring trend percentage badges and custom mini bar charts.
- **Data Table**: Filterable and sortable data table with multi-select checkboxes, status badges, and detail modal views.
- **Search Functionality**: Real-time search across names, emails, roles, and transaction IDs.
- **Recent Activity Feed**: Real-time timeline of user actions, system security logs, and financial transactions.
- **Pagination**: Customizable page sizes (5, 10, 20 per page) with page navigation controls.
- **Interactive State Demonstrations**:
  - **Normal State**: Full functional dashboard layout with real-time interactivity.
  - **Loading State**: Animated skeleton screens simulating async data fetching.
  - **Empty State**: Custom empty view with search reset controls.
  - **Error State**: System connection error banner with retry connection button.
- **User Profile**: Comprehensive user profile modal displaying user stats, organization role, and contact details.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Navigate to the project directory:
   ```bash
   cd dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the local development server:
```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

### Production Build

To test or generate the production build:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

## GitHub Submission Instructions

To push this repository to GitHub:

1. Initialize Git in the project directory (if not already initialized):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Responsive React Dashboard following portfolio design pattern"
   ```

2. Link your remote GitHub repository:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
   git branch -M main
   git push -u origin main
   ```

# Job Hunt Website

A multi-page job-hunting website built with **React**, **Tailwind CSS**, and **Vite**. This project provides a platform where users can search, apply, and get hired for their dream jobs. Employers can also post job listings to find suitable candidates.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## Features

- **Home Page (Landing Page):**
  - Hero section with a catchy headline and call-to-action buttons.
  - Steps to get hired outlined in four simple steps.
  - Grid of career options across various industries.
  - Latest job openings with the ability to apply or view details.
  - Sections highlighting services offered, testimonials, and newsletter subscription.
  
- **Job Listings Page:**
  - Sidebar filters to narrow down job searches by company type, location, industry, salary range, and experience.
  - Grid layout of job cards displaying key details.
  - Pagination for navigating through job listings.

- **Job Detail Page:**
  - Comprehensive job description with the ability to apply.
  - Tabs for job description, education requirements, and total applicants.
  - Company overview sidebar with benefits, perks, and reviews.
  - Recommended jobs section for similar opportunities.

- **Responsive Design:**
  - Mobile-first design ensuring compatibility across devices.
  - Utilization of Tailwind CSS for utility-first styling.

- **State Management:**
  - Managed state using React Hooks and Context API/Zustand (if needed).

---

## Demo

[Live Demo Link](#) (Replace with your deployed project's URL)

---

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- **Node.js** (v14 or above)
- **npm** or **yarn**

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/xkshxt/db2.git
   cd db2
   ```

2. **Install Dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

3. **Start the Development Server:**

   Using npm:

   ```bash
   npm run dev
   ```

   Or using yarn:

   ```bash
   yarn dev
   ```

4. **Open the App:**

   Visit `http://localhost:5173` in your browser to see the application running.

---

## Project Structure

```
src/
├── components/
│   ├── CareerOptions.jsx
│   ├── FilterSidebar.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   ├── JobCard.jsx
│   ├── Navbar.jsx
│   ├── Newsletter.jsx
│   ├── OffersSection.jsx
│   ├── StepsSection.jsx
│   ├── Testimonials.jsx
│   └── ...
├── data/
│   └── jobs.json
├── pages/
│   ├── Home.jsx
│   ├── JobDetail.jsx
│   └── Jobs.jsx
├── App.jsx
├── index.css
├── main.jsx
└── assets/
    └── images/
```

- **components/**: Reusable UI components.
- **data/**: JSON files or mock data.
- **pages/**: Page components corresponding to routes.
- **assets/**: Static assets like images.
- **App.jsx**: Main application component with routing.
- **index.css**: Global CSS and Tailwind directives.
- **main.jsx**: Entry point rendering the app.

---

## Usage

### Running the App Locally

Start the development server:

```bash
npm run dev
```

### Building for Production

Create an optimized build:

```bash
npm run build
```

Serve the build locally to test it:

```bash
npm run serve
```

### Linting and Formatting

Ensure your code adheres to best practices:

```bash
npm run lint
```

---

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Next-generation frontend tooling for fast builds and hot module replacement.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **React Router**: Declarative routing for React applications.
- **Zustand** (Optional): Lightweight state management library.
- **Node.js** and **npm/yarn**: JavaScript runtime and package managers.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the Repository**

2. **Create a Feature Branch**

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Commit Your Changes**

   ```bash
   git commit -m "Add your feature"
   ```

4. **Push to Your Branch**

   ```bash
   git push origin feature/YourFeature
   ```

5. **Open a Pull Request**

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

- **Code Contributors**: Thanks to everyone who has contributed code to this project.
- **Design Inspiration**: [Dribbble](https://dribbble.com/) and [Behance](https://www.behance.net/) for design ideas.
- **Resources**:
  - [Tailwind CSS Documentation](https://tailwindcss.com/docs)
  - [React Router Documentation](https://reactrouter.com/)
  - [Vite Documentation](https://vitejs.dev/)

---


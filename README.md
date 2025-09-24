# GRINDRLY

_**Empower Your Day, Achieve More Effortlessly**_

![last commit](https://img.shields.io/github/last-commit/BARBARBoyyHD/Grindrly?color=blue&style=for-the-badge)
![typescript](https://img.shields.io/badge/typescript-94.4%25-blue?style=for-the-badge&logo=typescript)
![languages](https://img.shields.io/github/languages/count/BARBARBoyyHD/Grindrly?style=for-the-badge)

---

### Built with the tools and technologies:

![JSON](https://img.shields.io/badge/JSON-black?style=for-the-badge&logo=json&logoColor=white)
![Markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)

---

## 📑 Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)

---

## 📖 Overview

**Grindrly** is a versatile developer toolset crafted to accelerate the development of modern React applications with **TypeScript**, **TailwindCSS**, and **Vite**.  
It provides a solid foundation for building scalable, maintainable, and secure web apps.

### Why Grindrly?

This project aims to simplify complex app development by offering a comprehensive architecture that includes **authentication**, **dynamic UI components**, and **efficient backend integration**.

✨ Core features include:

- ⚡ **Lightning-fast setup**: Powered by Vite + React + TailwindCSS for rapid development.  
- 🔐 **Secure authentication**: Seamless user sign-in and session management with Supabase.  
- 🧩 **Modular components**: Reusable UI for tasks, workouts, moods, dashboards, and more.  
- 📦 **Scalable architecture**: Clean, maintainable codebase optimized for growth.

---

## 🚀 Getting Started

### ✅ Prerequisites

This project requires the following dependencies:

- **Programming Language**: TypeScript  
- **Package Manager**: npm  

---

### 📥 Installation

Build and run Grindrly locally:

1. **Clone the repository**
   ```bash
     git clone https://github.com/BARBARBoyyHD/Grindrly
2. **Navigate to the project directory**

  cd Grindrly

3. **Install dependencies**
  ```bash
    npm install
  ```
4. **Run the project in development mode:**
   ```bash
      npm start

Grindrly uses Jest (or your chosen test framework). Run the test suite with:
  ```bash
    npm test
```

## 📂 Project Structure
```
├── 📁 public # Public static assets (favicon, robots.txt, etc.)
│
├── 📁 src # Application source
│ ├── 📁 assets # Static files (images, icons, etc.)
│ ├── 📁 components # Reusable UI and feature components
│ │ ├── 📁 Admin # Admin-related components
│ │ ├── 📁 Auth # Authentication (login, register, etc.)
│ │ ├── 📁 Dashboard # Dashboard components
│ │ │ └── 📁 components # Nested dashboard UI elements
│ │ ├── 📁 LandingPage # Landing page UI
│ │ ├── 📁 Moods # Mood tracking features
│ │ │ └── 📁 components # Subcomponents for moods
│ │ ├── 📁 Tasks # Task management
│ │ │ ├── 📁 button # Task-related buttons
│ │ │ └── 📁 components # Task subcomponents
│ │ ├── 📁 UI # Generic UI (buttons, inputs, modals, etc.)
│ │ ├── 📁 Waitlist # Waitlist components
│ │ └── 📁 Workouts # Workout tracking
│ │ ├── 📁 button # Workout-related buttons
│ │ └── 📁 components # Workout subcomponents
│ │
│ ├── 📁 config # Project configuration files
│ ├── 📁 context # React context providers
│ ├── 📁 hooks # Custom React hooks
│ ├── 📁 lib # Utility libraries
│ ├── 📁 pages # Page-level components (routes)
│ │ ├── 📁 admin # Admin pages
│ │ ├── 📁 Auth # Auth-related pages
│ │ └── 📁 users # User-facing pages
│ │
│ ├── 📁 supabase # Supabase client & setup
│ ├── 📁 types # TypeScript type definitions
│ └── 📁 utils # Helper functions
│
├── 📄 package.json # Project metadata & dependencies
├── 📄 tsconfig.json # TypeScript configuration
├── 📄 tailwind.config.js # TailwindCSS configuration
├── 📄 postcss.config.js # PostCSS configuration
├── 📄 vite.config.ts # Vite build configuration
└── 📄 README.md # Project documentation
```

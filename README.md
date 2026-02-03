# create-authmate

<div align="center">

# 🛡️AuthMate

<!-- Static Badges for Pre-release -->
[![npm version](https://img.shields.io/badge/npm-v1.0.0-blue.svg?style=flat-square)](https://www.npmjs.com/package/create-authmate)
[![license](https://img.shields.io/badge/license-ISC-green.svg?style=flat-square)](./LICENSE)
[![maintenance](https://img.shields.io/badge/maintained-yes-brightgreen.svg?style=flat-square)](#)

**The fastest way to scaffold a React app with fully configured Authentication.**

[Features](#-features) • [Quick Start](#-quick-start) • [Structure](#-project-structure) • [Roadmap](#-roadmap--future-scope)

</div>

---

## 📖 Introduction

**create-authmate** is a powerful CLI tool designed to eliminate the repetitive setup of authentication in React applications.

Instead of spending hours manually configuring Firebase, Supabase, or Clerk, `authmate` generates a **production-ready Vite + React codebase** with authentication architecture already implemented.

### Why use create-authmate?
-   **🚀 Instant Setup**: Generate detailed auth logic in seconds.
-   **🛡️ Best Practices**: Secure routing and clean state management.
-   **💎 Polished UI**: Professional login/signup/dashboard pages out of the box.

---

## ⚡ Features

| Feature | Description |
| :--- | :--- |
| **🚀 Vite Powered** | Built on Vite for lightning-fast HMR and optimized production builds. |
| **🔐 Auth Ready** | Complete implementation of Sign In, Sign Up, and Sign Out logic. |
| **<img src="https://www.vectorlogo.zone/logos/google/google-icon.svg" width="16" /> Google Auth** | Pre-configured Google Sign-In for Firebase & Supabase (requires Google Cloud Console keys). |
| **🛡️ Protected Routes** | `ProtectedRoute` components automatically secure private pages. |
| **🎨 Modern Design** | Clean, responsive UI with CSS variables for easy theming. |
| **📱 Responsive** | Mobile-first design that looks great on all devices. |

---

## 🚀 Quick Start

To create a new project, run the following command in your terminal:

### Usage

You can use the CLI interactively or pass arguments directly.

**Interactive Mode:**
```bash
npm create authmate@latest
```

**One-Line Commands:**

```bash
# Create a Clerk project
npm create authmate authmate-app -- --clerk

# Create a Firebase project
npm create authmate authmate-app -- --firebase

# Create a Supabase project
npm create authmate authmate-app -- --supabase
```

### Interactive Setup
If you run it without arguments, the CLI will guide you:

```bash
? Enter project name: authmate-app
? Select authentication provider:
  ❯ Firebase
    Supabase
    Clerk
```

### Post-Installation

1.  **Navigate to your project:**
    ```bash
    cd authmate-app
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Setup Environment Variables:**
    -   Open the `.env` file in the root directory.
    -   Add your API keys from your provider's dashboard.
    
4.  **Start coding:**
    ```bash
    npm run dev
    ```

---

## 📂 Project Structure

We provide a clean, scalable architecture that separates concerns logically.

```text
authmate-app/
├── public/
├── src/
│   ├── assets/                # Static assets (images, icons)
│   ├── auth/                  # Authentication provider configuration & logic
│   │   └── authprovider.js  
│   ├── pages/                 # Application views
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   └── Home.jsx
│   ├── routes/                # Routing logic
│   │   ├── AppRoutes.jsx      
│   │   └── ProtectedRoute.jsx 
│   ├── App.css                # Global styles
│   ├── index.css              # Base styles and Tailwind/Variables
│   ├── App.jsx                # Main application component
│   └── main.jsx               # Entry point
├── .env                       # Environment variables 
├── package.json
└── vite.config.js
```

---

## 🗺️ Roadmap / Future Scope

We are actively working to expand `create-authmate` with modern web capabilities.

-   **Next.js Support**: Full integration with Next.js (App Router) for Server-Side Rendering (SSR) and improved SEO.
-   **TypeScript Support**: Optional TypeScript templates for robust type safety.
-   **Tailwind CSS**: Option to generate projects pre-configured with Tailwind CSS.

---

## 🤝 Contributing

Contributions are always welcome!

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 📄 License

This project is licensed under the **ISC License**.

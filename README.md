<<<<<<< HEAD
# 📊 Admin Dashboard

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Material UI](https://img.shields.io/badge/Material_UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![Nivo](https://img.shields.io/badge/Nivo_Charts-FF6384?style=for-the-badge&logo=data%3Aimage/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPg==)
![FullCalendar](https://img.shields.io/badge/FullCalendar-008080?style=for-the-badge&logo=google-calendar&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

A **modern, responsive admin dashboard** built with **TypeScript**, **React**, **Material UI**, **Nivo Charts**, and **FullCalendar**.  
It provides **data visualization, scheduling, and a clean UI** for managing analytics and events.

---

## 🎥 Demo Preview

![Dashboard Demo](demo.gif)  
*(Replace `demo.gif` with an actual animated preview of your dashboard)*

---

## 📸 Screenshots

| Light Mode | Dark Mode |
|------------|-----------|
| ![Light Screenshot](screenshots/light.png) | ![Dark Screenshot](screenshots/dark.png) |

---

## ✨ Features

- 📊 **Interactive Charts** – Beautiful visualizations using Nivo
- 📅 **Calendar Integration** – Event scheduling with FullCalendar
- 🎨 **Custom Theming** – Light & dark mode with Material UI
- ⚡ **TypeScript** – Type-safe, maintainable code
- 📱 **Responsive** – Works on desktop, tablet, and mobile

---

## 🛠️ Tech Stack

- **React** – UI framework
- **TypeScript** – Static typing
- **Material UI (MUI)** – Design system & components
- **Nivo** – Chart visualizations
- **FullCalendar** – Calendar scheduling
- **Vite / CRA** – Development environment *(update if needed)*

---

## 📦 Installation
VITE_API_URL=https://your-api.com


```bash
# Clone the repo
git clone https://github.com/your-username/admin-dashboard.git

# Go into the folder
cd admin-dashboard

# Install dependencies
npm install

# Start the development server
npm run dev


admin-dashboard/
│
├── src/
│   ├── components/    # Reusable components
│   ├── pages/         # Page-level views
│   ├──          # MUI theme configs
│   ├── data/          # Static or mock data
│   ├── App.tsx        # App entry
│   └── main.tsx       # React DOM entry
│
├── public/            # Static assets
└── package.json
=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
>>>>>>> 84068ef (First commit)

# To-do-App-with-React

A simple and modern **To-Do List** web app built with **React + Vite**, styled using **Tailwind CSS** and **DaisyUI**.

This repository contains the app source inside the `To-Do/` directory.

## Features

- Add new tasks quickly (button click or Enter key).
- Mark tasks as completed / pending.
- Delete tasks.
- Filter tasks by:
  - All
  - Pending
  - Done
- Live task counters for total, pending, and completed items.
- Empty-state messages for each filter.
- Persistent storage using browser `localStorage`.

## Project Structure

```text
.
├── README.md
└── To-Do/
    ├── src/
    │   ├── components/
    │   ├── hooks/
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    └── ...
```

## Tech Stack

- **React**
- **Vite**
- **Tailwind CSS**
- **DaisyUI**
- **ESLint**

## Getting Started

### 1) Install dependencies

```bash
cd To-Do
npm install
```

### 2) Run development server

```bash
npm run dev
```

Then open the local URL printed in your terminal (usually `http://localhost:5173`).

## Available Scripts

Run these commands from the `To-Do/` directory:

- `npm run dev` – start local development server.
- `npm run build` – build for production.
- `npm run preview` – preview production build locally.
- `npm run lint` – run ESLint checks.
- `npm run deploy` – deploy the `dist/` folder using GitHub Pages.

## Deployment

The app is configured with a GitHub Pages `homepage` value in `To-Do/package.json`.

To deploy:

```bash
cd To-Do
npm run deploy
```

## How Data Persistence Works

Task data is stored in browser `localStorage` under the key `todos`.

- On load: tasks are read from `localStorage`.
- On change: tasks are saved back automatically.

## License

This project is open source and available under the MIT License (you can add a `LICENSE` file if needed).

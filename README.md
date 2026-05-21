# Simple React To-Do List

A straightforward, component-based To-Do application built with React.js and Vite. This project covers full CRUD operations, persists data to Local Storage, and is written using only native React hooks — no third-party packages.

> A great starting point for beginners who want to learn React through a real-world project.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Contributing](#contributing)

---

## Overview

This project was built to demonstrate core React concepts in a practical, minimal way. It manages a list of tasks with add, edit, complete, and delete functionality — all without reaching for any external libraries. State is persisted to the browser's Local Storage so tasks survive a page refresh.

---

## Features

- **Full CRUD** — Add, view, edit inline, toggle completion, and delete tasks.
- **Local Storage** — Tasks are automatically saved and restored on page load.
- **Uncontrolled Form** — Uses `useRef` for the input field to read the value only on submit, avoiding unnecessary re-renders while typing.
- **Unique Keys** — Uses the native browser `crypto.randomUUID()` to generate distinct IDs instead of relying on array indexes.
- **No Extra Dependencies** — Built entirely with native React hooks (`useState`, `useRef`, `useEffect`).

---

## Tech Stack

| Layer     | Technology      |
|-----------|-----------------|
| Library   | React.js        |
| Bundler   | Vite            |
| Language  | JavaScript (JSX)|
| Storage   | Browser Local Storage |

---

## Project Structure

```
src/
├── components/
│   ├── TodoForm.jsx    # Text input and add button
│   ├── TodoItem.jsx    # Single task row with edit and delete
│   └── TodoList.jsx    # List container that renders all tasks
├── App.jsx             # Root component — manages state and localStorage
├── index.css           # App styles
└── main.jsx            # Entry point
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/react-todo-list.git

# Navigate into the project directory
cd react-todo-list

# Install dependencies
npm install
```

### Running the App

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## Contributing

Contributions are welcome. If you are learning React and want to extend this project, feel free to fork it and open a pull request.

Built with love by **Sanukrishna PM**

# Simple React To-Do List

A straightforward, component-based To-Do application built with React.js and Vite. This project handles full CRUD operations, saves data to the browser's Local Storage, and uses native browser features for unique keys.

## Features

- **Full CRUD:** Add, view, edit text inline, toggle completion, and delete tasks.
- **Local Storage:** Automatically saves tasks to the browser so they stay there when you refresh.
- **Uncontrolled Form:** Uses `useRef` for the main input to grab text only on submit, preventing unnecessary re-renders while typing.
- **Unique Keys:** Uses native browser `crypto.randomUUID()` to generate distinct IDs for list elements instead of relying on array indexes.
- **No Extra Dependencies:** Built entirely using native React hooks (`useState`, `useRef`, `useEffect`) without any custom hooks or third-party packages.

## Folder Structure

```text
src/
├── components/
│   ├── TodoForm.jsx   # Text input box and add button
│   ├── TodoItem.jsx   # Single todo row handling edit/delete states
│   └── TodoList.jsx   # List container that loops through the items
├── App.jsx            # Main file managing state and localStorage
├── index.css          # App styles
└── main.jsx           # App entry point
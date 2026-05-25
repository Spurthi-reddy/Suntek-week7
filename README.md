# Week 7 React Hands-on Summary

This workspace contains three React + Vite hands-on projects that cover different UI and state-management tasks.

## 1. Product Showcase

Folder: `1-handson`

### What was built
- A product gallery displaying 10 products.
- Each product card shows:
  - product name
  - brand
  - description
  - price
  - image
- Cards use a modern card layout with hover effects.

### Main concepts used
- React component reuse
- Passing props to child components
- Rendering lists with `map()`
- Static data display

## 2. Task Manager

Folder: `2-handson`

### What was built
- A task manager with a form to add new tasks.
- Validation for task title:
  - required
  - minimum 3 characters
- Tasks can be marked complete or incomplete.
- Tasks can be deleted.
- Task statistics are shown for:
  - total tasks
  - completed tasks

### Main concepts used
- React state management
- Form handling
- Conditional rendering
- List rendering
- Event handlers for add, toggle, and delete actions

## 3. Country Explorer

Folder: `3-handson`

### What was built
- Fetches country data from the REST Countries API.
- Displays a loading state while data is being fetched.
- Shows an error message if the API request fails.
- Allows searching countries by name.
- Supports two display modes:
  - Grid view
  - Table view
- Each country card shows:
  - flag
  - name
  - capital
  - population
  - region

### Main concepts used
- `useEffect` for API calls
- `useState` for UI data
- Debounced search handling
- Conditional views
- Async data fetching and error handling

## How to run each project

Open each folder in your terminal and run:

```bash
npm install
npm run dev
```

### Project folders
- `1-handson`
- `2-handson`
- `3-handson`

## Quick summary of completed tasks

- Created a product listing page
- Built a task manager with CRUD-style actions
- Built a country search and display app using API data
- Added reusable React components in each project
- Practiced React hooks, forms, lists, and conditional rendering

If you want, I can also add a short section with screenshots or a one-line description for each app in the README.

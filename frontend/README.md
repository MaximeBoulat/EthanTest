# Todo List Frontend

A modern, responsive React application for managing your todos.

## Features

- ✅ Create, read, update, and delete todos
- 🎯 Mark todos as complete/incomplete
- 📝 Edit todos inline (double-click or use edit button)
- 🔍 Filter todos (All, Active, Completed)
- 📊 Statistics display
- 🎨 Beautiful gradient UI
- 📱 Fully responsive design
- ⚡ Fast and lightweight

## Tech Stack

- **React 18** - UI library
- **CSS3** - Styling with gradients and animations
- **Fetch API** - HTTP requests to backend

## Project Structure

```
frontend/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # React components
│   │   ├── TodoInput.js    # Input form for new todos
│   │   ├── TodoList.js     # List container
│   │   ├── TodoItem.js     # Individual todo item
│   │   └── TodoStats.js    # Statistics and filters
│   ├── services/
│   │   └── api.js          # API service layer
│   ├── App.js              # Main application component
│   ├── App.css             # Main styles
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
└── package.json            # Dependencies and scripts
```

## Setup Instructions

### 1. Install Dependencies

```bash
cd frontend
npm install
```

### 2. Start Development Server

```bash
npm start
```

The app will open at `http://localhost:3000`

### 3. Configure Backend URL (Optional)

By default, the app connects to `http://localhost:5000/api`

To change this, create a `.env` file in the frontend directory:

```
REACT_APP_API_URL=http://your-backend-url/api
```

## Available Scripts

- `npm start` - Run development server (port 3000)
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (irreversible)

## Usage

### Adding a Todo
1. Type your task in the input field
2. Click "Add" or press Enter

### Completing a Todo
- Click the checkbox next to the todo

### Editing a Todo
- Double-click the todo text, or
- Click the edit (✎) button
- Press Enter to save, Escape to cancel

### Deleting a Todo
- Click the delete (🗑) button

### Filtering Todos
- Use the filter buttons: All, Active, or Done

### Clearing Completed
- Click "Clear Completed" button at the bottom

## Component Architecture

### App.js
- Main container component
- Manages global state (todos, filter, error, loading)
- Handles API calls
- Passes data and callbacks to child components

### TodoInput.js
- Controlled input component
- Handles form submission
- Validates input

### TodoStats.js
- Displays statistics (active/completed count)
- Provides filter buttons
- Updates parent state on filter change

### TodoList.js
- Container for todo items
- Maps through todos array
- Passes callbacks to TodoItem

### TodoItem.js
- Individual todo display
- Inline editing functionality
- Checkbox, edit, and delete actions

### api.js (Service Layer)
- Centralized API communication
- Error handling
- Provides clean interface for API calls

## Styling

- **Modern Design**: Gradient backgrounds, smooth transitions
- **Responsive**: Works on mobile, tablet, and desktop
- **Accessible**: Proper semantic HTML and ARIA labels
- **Interactive**: Hover effects, button states, animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Add drag-and-drop reordering
- [ ] Add due dates and priorities
- [ ] Add categories/tags
- [ ] Add search functionality
- [ ] Add dark mode
- [ ] Add animations for list changes
- [ ] Add keyboard shortcuts
- [ ] Add todo persistence in localStorage as fallback
- [ ] Add unit and integration tests

## Troubleshooting

**Cannot connect to backend:**
- Make sure the backend server is running on port 5000
- Check the console for CORS errors
- Verify the API URL in the service file

**Build fails:**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Clear npm cache: `npm cache clean --force`

## License

MIT

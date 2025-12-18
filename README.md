# 📝 Full-Stack Todo List Application

A modern, full-stack todo list application with a React frontend and Node.js/Express backend. Features a beautiful UI with gradients, smooth animations, and a clean separation between frontend and backend.

## 🚀 Features

- ✅ Full CRUD operations (Create, Read, Update, Delete)
- 🎯 Mark todos as complete/incomplete
- 📝 Inline editing with double-click or edit button
- 🔍 Filter todos by status (All, Active, Completed)
- 📊 Real-time statistics
- 🎨 Modern gradient UI with smooth animations
- 📱 Fully responsive design
- ⚡ RESTful API architecture
- 🔄 Clean separation of concerns

## 📁 Project Structure

```
EthanTest/
├── backend/                 # Node.js/Express API
│   ├── server.js           # Main server file
│   ├── package.json        # Backend dependencies
│   └── README.md           # Backend documentation
│
├── frontend/               # React application
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── services/       # API service layer
│   │   ├── App.js          # Main app component
│   │   └── index.js        # Entry point
│   ├── package.json        # Frontend dependencies
│   └── README.md           # Frontend documentation
│
└── README.md               # This file
```

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **Body-parser** - Request parsing

### Frontend
- **React 18** - UI library
- **CSS3** - Modern styling
- **Fetch API** - HTTP client

## 🚦 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### 1. Clone and Navigate
```bash
cd EthanTest
```

### 2. Start the Backend

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start the server
npm start
```

Backend will run on `http://localhost:5000`

### 3. Start the Frontend

Open a new terminal:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
```

Frontend will run on `http://localhost:3000` and automatically open in your browser.

## 🎯 Usage

1. **Add a Todo**: Type in the input field and click "Add" or press Enter
2. **Complete a Todo**: Click the checkbox
3. **Edit a Todo**: Double-click the text or click the edit button (✎)
4. **Delete a Todo**: Click the delete button (🗑)
5. **Filter Todos**: Use the All/Active/Done buttons
6. **Clear Completed**: Click "Clear Completed" when you have finished todos

## 📡 API Endpoints

### Health Check
- `GET /api/health` - Server status

### Todos
- `GET /api/todos` - Get all todos
- `GET /api/todos/:id` - Get single todo
- `POST /api/todos` - Create new todo
- `PUT /api/todos/:id` - Update todo
- `DELETE /api/todos/:id` - Delete todo
- `PATCH /api/todos/:id/toggle` - Toggle completion status
- `DELETE /api/todos/completed/clear` - Clear all completed todos

## 🎨 Features Breakdown

### Backend Features
- RESTful API design
- In-memory data storage (easily replaceable with a database)
- Error handling and validation
- CORS enabled
- JSON responses with consistent format
- Health check endpoint

### Frontend Features
- Component-based architecture
- Service layer for API calls
- State management with React hooks
- Inline editing functionality
- Filter system (All/Active/Completed)
- Real-time statistics
- Loading and error states
- Responsive design
- Smooth animations and transitions

## 🔧 Configuration

### Backend Configuration
Edit `backend/server.js` or set environment variables:
- `PORT` - Server port (default: 5000)

### Frontend Configuration
Create `frontend/.env`:
```
REACT_APP_API_URL=http://localhost:5000/api
```

## 📦 Scripts

### Backend
```bash
npm start     # Start server
npm run dev   # Start with nodemon (auto-restart)
```

### Frontend
```bash
npm start     # Development server
npm run build # Production build
npm test      # Run tests
```

## 🌟 Key Highlights

### Clean Architecture
- **Separation of Concerns**: Frontend and backend are completely separate
- **Service Layer**: API calls abstracted in a service class
- **Component Modularity**: Reusable React components
- **RESTful Design**: Standard HTTP methods and status codes

### User Experience
- **Instant Feedback**: Loading states and error messages
- **Intuitive Interface**: Double-click to edit, hover for actions
- **Keyboard Support**: Enter to save, Escape to cancel
- **Visual Feedback**: Smooth animations and transitions

### Code Quality
- **Consistent Formatting**: Clean, readable code
- **Error Handling**: Proper try-catch blocks and error states
- **Comments**: Well-documented code
- **Best Practices**: React hooks, async/await, ES6+

## 🔮 Future Enhancements

### Backend
- [ ] Add database integration (MongoDB/PostgreSQL)
- [ ] Add authentication and authorization
- [ ] Add user accounts and todo ownership
- [ ] Add input validation library (Joi)
- [ ] Add unit tests
- [ ] Add logging (Winston/Morgan)
- [ ] Add rate limiting

### Frontend
- [ ] Add drag-and-drop reordering
- [ ] Add due dates and priorities
- [ ] Add categories/tags
- [ ] Add search functionality
- [ ] Add dark mode
- [ ] Add animations for list changes
- [ ] Add keyboard shortcuts
- [ ] Add offline support with service workers
- [ ] Add unit and integration tests
- [ ] Add TypeScript

## 🐛 Troubleshooting

### Backend won't start
- Check if port 5000 is already in use
- Ensure Node.js is installed: `node --version`
- Delete `node_modules` and run `npm install` again

### Frontend can't connect to backend
- Verify backend is running on port 5000
- Check browser console for CORS errors
- Verify API URL in `frontend/src/services/api.js`

### Dependencies issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

## 📝 License

MIT

## 👥 Contributing

Feel free to fork, improve, and submit pull requests!

## 📧 Contact

For questions or feedback, please open an issue.

---

**Enjoy organizing your tasks! 🎉**
export const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-firebase-project.web.app/api'
  : 'http://localhost:5000/api'; 
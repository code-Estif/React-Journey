import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UsersProvider } from './UsersContext.jsx'

createRoot(document.getElementById('root')).render(
  <UsersProvider>
    <App />
  </UsersProvider>,
)
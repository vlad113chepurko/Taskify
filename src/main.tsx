import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import "@styles/index.scss"
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)

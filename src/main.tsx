import { createRoot } from 'react-dom/client'
import Routes from './Routes.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <Routes />,
)

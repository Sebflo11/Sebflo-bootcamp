import { createRoot } from 'react-dom/client'
import { App } from './src/controlador-eventos'

const root = createRoot(document.getElementById('app'))

root.render (
  <App />
)
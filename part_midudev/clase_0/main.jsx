import { createRoot } from 'react-dom/client'
import { App } from './src/App'
import { OldIndex } from './src/oldIndex'

const root = createRoot(document.getElementById('app'))

root.render (
  <>
   <App />
   <hr></hr>
   <OldIndex />
  </>
)
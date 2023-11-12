import { createRoot } from 'react-dom/client'
import { App } from './src/controlador-eventos'
import { App_2 } from './src/Renderizado-de-pagina'
import { App3 } from './src/Estado-complejo/App-3'
import { App4, App5 } from './src/Reglas-de-los-hooks/App4'

const root = createRoot(document.getElementById('app'))

// Pertenece al contador App_2
let counter = 1

root.render (
  <>
    <App />
    <hr></hr>
    <App_2 />
    <hr></hr>
    <App3 />
    <hr></hr>
    <App4 />
    <hr></hr>
    <App5 />
  </>
)


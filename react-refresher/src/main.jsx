import {createRoot} from 'react-dom/client'
import App from './App'

const name = "Rhytham Negi"

createRoot(document.getElementById('root')).render(
  <div>
  <h1 className='title' id= "heading"> Hello {name}</h1>
  <App/>
  </div>
)
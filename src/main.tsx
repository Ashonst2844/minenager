import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as ReactDOM from 'react-router-dom'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactDOM.BrowserRouter>
      <ReactDOM.Routes>
        <ReactDOM.Route path='/*' element={<App/>}/>
      </ReactDOM.Routes>
    </ReactDOM.BrowserRouter>
  </StrictMode>,
)

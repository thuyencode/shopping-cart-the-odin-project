import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// eslint-disable-next-line react-refresh/only-export-components
const App = React.lazy(async () => import('./App'))

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

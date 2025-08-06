import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function App() {
  return (
    <div className="text-3xl font-bold underline text-blue-600">
      Hello Tailwind + Vite!
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

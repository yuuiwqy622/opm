import App from 'components/App'
import React from 'react'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')

if (!container) {
  throw new Error('Could not render app: Invalid HTML structure')
}

const root = createRoot(container)
root.render(<App />)
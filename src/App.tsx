import React from 'react'
import Application from './components/application/application'
import Skills from './components/skills/skills'
import Counter from './components/counter/counter'
import './App.css'
import { AppProviders } from './providers/app-providers'
import { MuiMode } from './components/mui/mui-mode'

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
      </div>
    </AppProviders>
  )
}

export default App

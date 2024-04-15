import {  Routes, Route } from 'react-router-dom'

import './App.css'
import Header from './components/Header.tsx'
import Home from "./pages/home.tsx"
import Detail from './pages/detail.tsx'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Header/>}> 
        <Route index  element={<Home />} />
        <Route path='/sneaker/detail/:id' element={< Detail/> } />
      </Route>
    </Routes>
  )
}

export default App

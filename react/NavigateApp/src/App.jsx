import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
  )
}

export default App

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Dashboard from './pages/Dashboard'
import Overview from './pages/Overview'
import Users from './pages/Users'
import Settings from './pages/Settings'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="overview" element={<Overview />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<h2 className='text-red-400 text-3xl'>404 Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
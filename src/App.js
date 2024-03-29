import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import MyWork from './components/MyWork'
import Skills from './components/Skills'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mywork" element={<MyWork />} />
        <Route path="/skills" element={<Skills />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
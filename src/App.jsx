import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'

const About = lazy(() => import('./pages/About'))
const Properties = lazy(() => import('./pages/Properties'))
const PropertyDetails = lazy(() => import('./pages/PropertyDetails'))
const Buy = lazy(() => import('./pages/Buy'))
const Sell = lazy(() => import('./pages/Sell'))
const Team = lazy(() => import('./pages/Team'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="properties" element={<Properties />} />
        <Route path="properties/:id" element={<PropertyDetails />} />
        <Route path="buy" element={<Buy />} />
        <Route path="sell" element={<Sell />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

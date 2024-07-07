import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FooterRender from './Footer.render.jsx'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { Section1, Section2, Section4, Section7, Section3, Section5 } from './Components/exports.js'


const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/Work' element={<Section1 />} />
      <Route path='/Studio' element={[
        <Section1 />,
        <Section2 />,
        <Section3 />,
        <Section4 />,
        <Section5 />,
        <Section7 />,
      ]} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={Router} >
  </RouterProvider>,
)
ReactDOM.createRoot(document.getElementById('footer')).render(
  <FooterRender />
)
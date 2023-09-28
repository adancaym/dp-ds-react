import { StrictMode } from 'react'
import reportWebVitals from './reportWebVitals'
import { Router } from './components/router/Router'
import * as ReactDom from 'react-dom/client'

const element = document.getElementById('root') as HTMLElement
const root = ReactDom.createRoot(element)

root.render(
  <StrictMode>
      <Router />
  </StrictMode>
)

reportWebVitals()

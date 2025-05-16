// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './routes' // -> 뒤에 /index.tsx는 생략 가능'

// render가 해석하면 출력임.
createRoot(document.getElementById('root')!).render(
  <>
    <Router />
  </>
)

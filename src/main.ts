import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './app'
import { createElement } from 'react'
import './styles/main.less'

const app = createRoot(document.getElementById('root')!)

app.render(createElement(BrowserRouter, null, createElement(App)))

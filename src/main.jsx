import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './store/store.js'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/M7_REACT_TP1">
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MyProvider } from './context/productContext.jsx'
import { FilterContextProvider } from './context/filterContext.jsx'
import { CartContextProvider } from './context/cartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <MyProvider>
      <FilterContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </FilterContextProvider>
    </MyProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import ProductDetails from './pages/ProductDetails.tsx'
import { Provider } from 'react-redux'
import './index.css'
import store from './store.js'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ProductDetails />
    </Provider>
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProductApi } from './Mydata/ProductApi.jsx'

createRoot(document.getElementById('root')).render(
<ProductApi>
  <App />
</ProductApi>
)

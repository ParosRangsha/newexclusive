import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProductApi } from './Mydata/ProductApi.jsx'
import firebaseConfig from './firebase.config.js'
import {store} from "./store";
import { Provider } from "react-redux";

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ProductApi>
      <App />
    </ProductApi>
  </Provider>
)

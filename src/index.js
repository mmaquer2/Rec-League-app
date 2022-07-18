import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route,Routes } from "react-router-dom";

import { Dashboard } from "./pages/dashboard"
import { CreateAccount } from "./pages/createAccount"

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path ="/createAccount" element = {<CreateAccount />} />

    </Routes>
  </BrowserRouter>
);


reportWebVitals();

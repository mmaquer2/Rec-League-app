import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route,Routes } from "react-router-dom";

import { Dashboard } from "./pages/dashboard"
import { CreateAccount } from "./pages/createAccount"
import {Account} from "./sub-pages/account"
import {Messages} from "./sub-pages/messages"
import {Team} from "./sub-pages/team"

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path ="/createAccount" element = {<CreateAccount />} />
      <Route path ="/Account" element = {<Account />} />
      <Route path ="/Messages" element = {<Messages />} />
      <Route path ="/Teams" element = {<Team />} />

    </Routes>
  </BrowserRouter>
);


reportWebVitals();

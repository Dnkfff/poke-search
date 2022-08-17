import React from 'react';
import logo from './logo.svg';
import styles from "./styles.scss";
import { BrowserRouter, Routes ,Route } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import './index.css';

import Home from "./pages/Home"

// Create Client
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>  
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

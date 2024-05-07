import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'virtual:uno.css'
import "../src/assets/css/custom.css";
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import {ReactQueryDevtools} from "react-query/devtools";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <App/>
                <ReactQueryDevtools/>
            </QueryClientProvider>
        </BrowserRouter>
    </React.StrictMode>
);

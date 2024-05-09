import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
//tanstack use korle useEffect, state set korte hoyna

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<AuthProvider>
<QueryClientProvider client={queryClient}>
<RouterProvider router={router} />
    </QueryClientProvider>


 </AuthProvider>
  </React.StrictMode>,
)

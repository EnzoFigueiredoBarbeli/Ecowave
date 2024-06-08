import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider,  } from 'react-router-dom';
import App from './App.jsx'
import Contato from './routes/Contato.jsx'
import DashBoard from './routes/DashBoard.jsx'
import Error from './routes/Error.jsx'; 
import Login from './routes/Login.jsx'; 
import Home from './routes/Home.jsx';

const router = createBrowserRouter ([
  {
    path:'/', element:<App />,
    errorElement:<Error />,

    children: [
      {path: '/', element: <Home />},
      {path: '/Login', element: <Login />},
      {path: '/DashBoard',element:<DashBoard/>},
      {path: '/Contato', element: <Contato />},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)



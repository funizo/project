import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"


import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import CommunityPage from './pages/CommunityPage';

const router = createBrowserRouter([
  {
    path: '/', element: <App />, children: [
      { path: '/', element: <HomePage /> },
      { path: '/community', element: <CommunityPage /> },
      { path: '*', element: <NotFoundPage /> }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


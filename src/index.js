import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Book from './components/Book';
import Root from './pages/Root';
import BookSearch from './components/BookSearch';
import SavedSearches from './components/SavedSearches';
import {loader} from "./components/SavedSearches";
import BookHome from './components/BookHome';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "book",
        element: <Book />,
        children: [
          {
            index: true,
            element: <BookHome />
          },
          {
            path: "search",
            element: <BookSearch />
          },
          {
            path: "saved",
            loader: loader,
            element: <SavedSearches />
          }
        ]
      }
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
reportWebVitals();

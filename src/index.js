import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Body from './components/Body/Body'
import Error from './components/Error/Error'
import AboutMe from './components/About Me/AboutMe'
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Publications from './components/Publications/Publications'
import Contact from './components/Contact/Contact'
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/home",
        element:<Body/>
      },
      {
        path:"/about",
        element:<AboutMe/>
      },
      {
        path:"/education",
        element:<Education/>
      },
      {
        path:"/projects",
        element:<Projects/>
      },
      {
        path:"/skills",
        element:<Skills/>
      },
      {
        path:"/publications",
        element:<Publications/>
      },
      {
        path:"/contact",
        element:<Contact/>
      }
    ],
    errorElement:<Error/>
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

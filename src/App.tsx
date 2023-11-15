import 'normalize.css';
import './styles/border.css';
import './styles/base.css';

import { createHashRouter, RouterProvider } from 'react-router-dom';

import React from "react";
import Guide from "./containers/Guide/index";
import Account from './containers/Account/index';
import Login from './containers/Account/Login';
import Register from './containers/Account/Register';
import Home from './containers/Home/index';
import Nearby from './containers/Nearby';
import Search from './containers/Search';
import SearchList from './containers/SearchList';
import Detail from './containers/Detail';

const router = createHashRouter([
  {
    path: '/',
    element: <Guide />
  },
  {
    path: '/account',
    element: <Account />,
    children: [
      {
        path: '/account/login',
        element: <Login />
      },
      {
        path: '/account/register',
        element: <Register />
      },
    ]
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/nearby',
    element: <Nearby />
  },
  {
    path: '/search/:shopId',
    element: <Search />
  },
  {
    path: '/searchList/:shopId/:keyword',
    element: <SearchList />
  },
  {
    path: '/detail',
    element: <Detail />
  },
])

function App() {
  return ( <RouterProvider router={router} />);
}

export default App;

import { Routes, Route } from 'react-router-dom';

import Login from '../pages/login';
import Register from '../pages/register';

import Start from '../pages/start';
import Products from '../pages/products';
import WhoWeAre from '../pages/whoWeAre';
import Contacts from '../pages/contacts';
import OrderNow from '../pages/orderNow';

import PrivateRoutes from './privateRoutes';

export default function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={ <Login/> } />
      <Route path="/register" element={ <Register/> } />

      <Route path="/start" element={ <PrivateRoutes><Start/></PrivateRoutes> } />
      <Route path="/products" element={ <PrivateRoutes><Products/></PrivateRoutes> } />
      <Route path="/whoweare" element={ <PrivateRoutes><WhoWeAre/></PrivateRoutes> } />
      <Route path="/contacts" element={ <PrivateRoutes><Contacts/></PrivateRoutes> } />
      <Route path="/ordernow" element={ <PrivateRoutes><OrderNow/></PrivateRoutes> } />
    </Routes>
  );
};
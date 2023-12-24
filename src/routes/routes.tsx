import { Routes, Route } from "react-router-dom";

import Login from "../pages/login";
import Register from "../pages/register";

import Start from "../pages/start";
import Products from "../pages/products";
import WhoWeAre from "../pages/whoWeAre";
import Contacts from "../pages/contacts";
import OrderNow from "../pages/orderNow";

export default function AppRoutes(){
  return(
    <Routes>
      <Route path="/login" element={ <Login/> } />
      <Route path="/register" element={ <Register/> } />

      <Route path="/" element={ <Start/> } />
      <Route path="/products" element={ <Products/> } />
      <Route path="/whoweare" element={ <WhoWeAre/> } />
      <Route path="/contacts" element={ <Contacts/> } />
      <Route path="/ordernow" element={ <OrderNow/> } />
    </Routes>
  );
};
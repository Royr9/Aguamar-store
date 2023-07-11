import React from "react";

import { createBrowserRouter ,Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./layouts/RootLayout";
import StoreLayout from "./layouts/StoreLayout";
import Men, { menProductsLoader } from "./pages/store/Men";
import Women, { womenProductsLoader } from "./pages/store/Women";
import NotFound from "./pages/error-pages/NotFound";
import ProductDetails, { buyFormAction, productDetailsLoader } from "./pages/store/ProductDetails";
import NoProductFound from "./pages/error-pages/NoProductFound";
import { featuredProductsLoader } from "./layouts/StoreLayout";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >
    <Route index element={< Home/>} />
    <Route path="store" element={<StoreLayout/>} errorElement={<NoProductFound/>} loader={featuredProductsLoader} >
      <Route path="men" element={<Men/>} loader={menProductsLoader} />
      <Route path="women" element={<Women/>} loader={womenProductsLoader} />
      <Route path=":id" element={<ProductDetails/>} loader={productDetailsLoader} action={buyFormAction}/>
    </Route>
    <Route path="*" element={ <NotFound/> }/>
    </Route>
  )
)

function App() {
  return (
  <RouterProvider router={router} />
  )
}


export default App;

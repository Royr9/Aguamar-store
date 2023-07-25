import React from "react";

import { createBrowserRouter ,Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./layouts/RootLayout";
import StoreLayout from "./layouts/StoreLayout";
// import Men, { menProductsLoader } from "./pages/store/Men";
// import Women, { womenProductsLoader } from "./pages/store/Women";
import NotFound from "./pages/error-pages/NotFound";
import ProductPage, { buyFormAction, productPageLoader } from "./pages/store/ProductPage";
import NoProductFound from "./pages/error-pages/NoProductFound";
import { featuredProductsLoader } from "./pages/Home";
import Store, { mainStoreLoader } from "./pages/MainStore";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >
    <Route index element={< Home/>} loader={featuredProductsLoader}/>
    <Route path="store" element={<StoreLayout/>} errorElement={<NoProductFound/>}  >
      <Route index element={<Store/>} loader={mainStoreLoader}/>
      {/* <Route path="men" element={<Men/>} loader={menProductsLoader} />
      <Route path="women" element={<Women/>} loader={womenProductsLoader} /> */}
      <Route path=":id" element={<ProductPage/>} loader={productPageLoader} action={buyFormAction}/>
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

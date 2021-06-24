import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./components/cart/Cart";
import TemplateProvider from "./templates/TemplateProvider";
import ContextProvider from "./context/ContextProvider";
import DetailView from "./components/ItemDetail/DetailView";
const App = () => {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route path="/product/:id" component={DetailView}></Route>
          </Switch>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
};

export default App;

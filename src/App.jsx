import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./Components/Search";
import SignIn from "./Components/SignIn";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import Newacc from "./Components/Newacc";

const App = () => {
  const [cart, setCart] = useState([]);

  const Addtocart = (product) => {
    const isProductExist = cart.find((findItem) => findItem.id === product.id);

    if (isProductExist) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // handle Increse Button
  const handelInc = (id) => {
    const incQuntity = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(incQuntity);
  };
  // Handle Decres Button
  const handelDec = (id) => {
    const decQuntity = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(decQuntity);
  };
  //handelRemove section
  const handleRemove = (id) => {
  const updatebyFilter = cart.filter((filteritem) => filteritem.id !== id);
    setCart(updatebyFilter);
  };
  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Search" element={<Search Addtocart={Addtocart} />}/>
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/NewAcc" element={<Newacc />} />
            <Route
              path="/Cart"
              element={
                <Cart
                  cart={cart}
                  handelInc={handelInc}
                  handelDec={handelDec}
                  handleRemove={handleRemove}
                />
              }
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;

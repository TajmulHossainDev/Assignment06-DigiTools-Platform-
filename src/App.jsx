import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Stats from "./Components/Stats/Stats";
import Tab from "./Components/Tab/Tab";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
import Steps from "./Components/Steps/Steps";
import Pricing from "./Components/Pricing/Pricing";
import Transform from "./Components/Transform/Transform";
import Footer from "./Components/Footer/Footer";

const getProducts = async () => {
  const res = await fetch("/products.json");
  return res.json();
}

const productPromise = getProducts();







function App() {
  const [activeTab, setActiveTab] = useState("product");
  const [carts, setCarts] = useState([]);

  return (
    <>
    <Navbar cartCount={carts.length}></Navbar>
    <Banner></Banner>
    <Stats></Stats>
    <Tab activeTab={activeTab} 
        setActiveTab={setActiveTab}
        cartCount={carts.length}></Tab>
    {activeTab === "product" && (
      <Products productPromise={productPromise}
      carts={carts}
      setCarts={setCarts}></Products>
    )} 

    {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts}></Cart>}
    <Steps></Steps>
    <Pricing></Pricing>
    <Transform></Transform>
    <Footer></Footer>
    </>
  );
}

export default App;

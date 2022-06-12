import React from "react";
import "./Home.css";
import Product from "./Product";
import items from "../Items";

function Home() {
  return (
    <div className="home">
      <img
        className="home-image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
      ></img>
      <div className="home-container">
        {items.map((item) => {
          return (
            <Product
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            ></Product>
          );
        })}
      </div>
    </div>
  );
}

export default Home;

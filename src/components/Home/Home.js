import React from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import { useEffect, useState } from "react";
import Service from "../Service/Service";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container-fluid p-0">
      <Banner></Banner>
      <section className="container">
        <h1 className="heading">Services</h1>
        <div className="row row-cols-1 row-cols-md-3">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

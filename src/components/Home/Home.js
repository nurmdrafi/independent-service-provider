import React from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";
import Contact from "../Contact/Contact";
import useServices from "../../hooks/useServices";

const Home = () => {
  const [services] = useServices([]);

  return (
    <div className="container-fluid p-0">
      <Banner></Banner>
      <section className="container">
        <h1 className="heading">Services</h1>
        <div className="row row-cols-1 row-cols-md-3 m-0">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </section>
      <Contact></Contact>
    </div>
  );
};

export default Home;

import { useEffect } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import whoweare from "../assets/whoweare.jpg"
import Footer from "../Components/Footer";

function About() {
  useEffect(() => {
    document.title = "About | Snap-Shop";
  }, []); 
  

  const aboutSections = [
    {
      title: "Who We Are",
      desc: "Snap-Shop is a modern e-commerce platform offering top-notch products at unbeatable prices. We focus on quality, style, and customer satisfaction.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpOo2cGRo45GqL6VhbHfZ8SFivsO4Fv26aLA&s"
    },
    {
      title: "Our Mission",
      desc: "We aim to make online shopping smooth, fast, and secure, with a user-friendly interface and reliable delivery services.",
      img: "https://www.n2nsystems.co.in/images/mission.png"
    },
    {
      title: "Why Choose Us?",
      desc: "With exclusive deals, premium quality, and dedicated support, Snap-Shop ensures an unmatched shopping experience.",
      img: whoweare
    }
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">About Us</h2>
      <div className="row g-4">
        {aboutSections.map((section, index) => (
          <div className="col-md-4" key={index}>
            <div className="card bg-info bg-opacity-25 h-100 shadow-lg border-0">
              <img
                src={section.img}
                className="card-img-top"
                alt={section.title}
              />
              <div className="card-body">
                <h5 className="card-title">{section.title}</h5>
                <p className="card-text">{section.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
              alt="Shopping"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold mb-3">Our Story</h2>
            <p className="text-muted">
              Founded in 2025 in Dewas, India, Snap-Shop started as a passion
              project to make online shopping easier, faster, and more fun. 
              We bring you premium fashion, accessories, and lifestyle products at unbeatable prices.
            </p>
            <p className="text-muted">
              Today, we’re proud to serve thousands of customers across India, 
              delivering happiness right to your doorstep.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;

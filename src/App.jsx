import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import CountUp from "react-countup";
import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "./images/logo.png";
import c1 from "./images/c1.jpg";
import c2 from "./images/c2.jpg";
import c3 from "./images/c3.png";
import l2 from"./images/l2.jpg";
import l3 from"./images/l3.jpg";  
import l4 from"./images/l4.jpg";
import l5 from"./images/l5.jpg";
import l6 from"./images/l6.png";
import l7 from"./images/l7.jpg";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
        <div className="container">
         <a className="navbar-brand d-flex" href="#">
    <div className="logo-image">
      <img src={logo} alt="Cement Logo" className="img-fluid" />
    </div>  
</a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav gap-3">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><a className="nav-link" href="#">Plants</a></li> 
              <li className="nav-item"><a className="nav-link" href="#">Plants</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Products</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
              <li className="nav-item">
               <button className="get-btn">GET IN TOUCH</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
  id="carouselExampleAutoplaying"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">

    <div className="carousel-item active">
      <img src={c1} className="d-block w-100" alt="slide1" />
    </div>

    <div className="carousel-item">
      <img src={c2} className="d-block w-100" alt="slide2" />
    </div>

    <div className="carousel-item">
      <img src={c3} className="d-block w-100" alt="slide3" />
    </div>

  </div>

  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon"></span>
  </button>

  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon"></span>
  </button>
</div>

<section className="stats-section text-center">
  <div className="container">
    <div className="row">

      <div className="col-md-3">
        <h3 className="stat-number">
          <CountUp end={64} duration={9} />
        </h3>
        <p>Years in Business</p>
      </div>

      <div className="col-md-3">
        <h3 className="stat-number">
          <CountUp end={16.84} duration={9} decimals={2} /> MTPA
        </h3>
        <p>Production Capacity</p>
      </div>

      <div className="col-md-3">
        <h3 className="stat-number">
          <CountUp end={7} duration={9} />
        </h3>
        <p>Manufacturing Units</p>
      </div>

      <div className="col-md-3">
        <h3 className="stat-number">
          <CountUp end={1640} duration={9} separator="," />+
        </h3>
        <p>Team Members</p>
      </div>

    </div>
  </div>
</section>

      {/* About Section */}
      <section className="about-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src={c3}
                alt="Cement Plant"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6">
              <h1 className="fw-bold mb-5">Your Partner in Success and Growth</h1>
              <p>
                We provide high-quality cement products with modern manufacturing
                facilities and a strong commitment to excellence. Our advanced
                technology ensures durability and reliability in every project.
              </p>
              <button className="btn-read mt-3">Read More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Chettinad Cement Section */}

<section className="why-header">
  <div className="container text-center">
    <h2 className="why-title">
      Why <span>Chettinad Cement</span>
    </h2>
  </div>
</section>

<section className="why-content py-5">
  <div className="container">
    <div className="row g-4">

      {/* Card 1 */}
      <div className="col-md-3">
        <div className="why-card text-center">
          <div className="icon-circle">
            <i className="bi bi-shield-check"></i>
          </div>
          <h5>Quality Assurance</h5>
          <p>
            Chettinad Cement Corporation Private Limited stands as a hallmark of quality with 
            certifications in IS/ISO 9001:2015, IS/ISO 14001:2015, IS 45001:2018, 
            and IS/ISO 50002:2018. These credentials reflect our unwavering commitment to
             excellence in quality management, environmental sustainability, occupational health 
             and safety, and energy efficiency.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-md-3">
        <div className="why-card text-center">
          <div className="icon-circle">
            <i className="bi bi-globe"></i>
          </div>
          <h5>Environmental Commitment</h5>
          <p>
           hettinad Cement is dedicated to environmental stewardship,
            implementing eco-friendly practices across all operations. 
            Our initiatives include reducing carbon emissions, conserving natural resources,
             and promoting sustainability. With certifications like IS/ISO 14001:2015, 
           we ensure our processes meet the highest environmental standards
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-md-3">
        <div className="why-card text-center">
          <div className="icon-circle">
            <i className="bi bi-gear"></i>
          </div>
          <h5>Innovative Manufacturing</h5>
          <p>
           Chettinad Cement Corporation Private Limited leads the industry with innovative
            manufacturing processes that set new standards. Utilizing cutting-edge technology
             and sustainable practices, we deliver superior quality cement for all your construction needs.
              Our commitment
            to innovation ensures consistent excellence and environmental responsibility.
          </p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="col-md-3">
        <div className="why-card text-center">
          <div className="icon-circle">
            <i className="bi bi-person"></i>
          </div>
          <h5>Customer-Centric Approach</h5>
          <p>
            
            Chettinad Cement Corporation Private Limited prioritizes customer satisfaction 
            with a dedicated, customer-centric approach. We offer tailored solutions, exceptional service,
             and consistent quality to meet your needs. Our commitment to excellence ensures every project
              is a success. Experience the difference with
             Chettinad Cement, where customers come first
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

{/* ===== Testimonials Section ===== */}

<section className="testimonial-section">
  <div className="container text-center">

    <h2 className="testimonial-title">Your Experiences, Our Pride</h2>
    <p className="testimonial-subtitle">
      Hear from our satisfied Clients
    </p>

    <div className="row justify-content-center mt-5">

      {/* Testimonial 1 */}
      <div className="col-md-5">
        <div className="testimonial-card">
          <div className="client-img">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="client"
            />
          </div>
          <h6>Priya Nair</h6>
          <span>Kochi, Kerala</span>
          <p>
            "As an architect, I am very particular about the materials I use for
            my projects. Chettinad Cement has always exceeded my expectations..."
          </p>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="col-md-5">
        <div className="testimonial-card">
          <div className="client-img">
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="client"
            />
          </div>
          <h6>Kavitha Reddy</h6>
          <span>Hyderabad, Telangana</span>
          <p>
            "Chettinad Cement has been a trusted name in our family for
            generations. The consistent quality and excellent service have made them our go-to choice for all our construction needs..."
          </p>
        </div>
      </div>
    </div>

    {/* Dots */}
    <div className="testimonial-dots mt-4">
      <span className="active-dot"></span>
      <span></span>
      <span></span>
    </div>

  </div>
</section>


{/* ===== Latest News Header ===== */}

<section className="latest-news-header">
  <div className="container text-center">
    <h2>
      Latest <span>News & Blog</span>
    </h2>
  </div>
</section>
{/* ===== Latest News Cards Section ===== */}

<section className="news-section">
  <div className="container">
    <div className="row">

      {/* Card 1 */}
      <div className="col-md-4">
        <div className="news-card">
          <img
            src="https://images.unsplash.com/photo-1509395176047-4a66953fd231"
            alt="cement"
          />
          <div className="news-content">
            <h5>
              Which Cement Is Best for Concrete? A Complete Guide to Using
              Supergrade Concrete for Stronger Construction
            </h5>
            <p>
              Concrete quality defines the strength, safety, and lifespan of any
              structure. Whether...
            </p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-md-4">
        <div className="news-card">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="cement"
          />
          <div className="news-content">
            <h5>
              Which Supplier Offers the Most Reliable Wholesale Cement Near Me
            </h5>
            <p>
              Finding a reliable wholesale cement supplier near you is one of
              the...
            </p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-md-4">
        <div className="news-card">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
            alt="cement"
          />
          <div className="news-content">
            <h5>
              Best Cement for Concrete Work: Expert Guide to Choosing the Right
              Cement for Every Projects
            </h5>
            <p>
              When it comes to concrete work, the choice of cement is the...
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

{/* ===== Trusted Section ===== */}

<section className="trusted-section">
  <div className="container text-center">
    <h2>
      Trusted by over <span>500+ clients</span>
    </h2>
  </div>
</section>
<section className="logo-slider">
  <div className="logo-track">

    {/* Repeat logos twice for smooth infinite scroll */}

    {[
      "https://via.placeholder.com/120x60?text=SEW",
      "https://via.placeholder.com/120x60?text=SAHYADRI",
      "https://via.placeholder.com/120x60?text=PARSN",
      "https://via.placeholder.com/120x60?text=NPCIL",
      "https://via.placeholder.com/120x60?text=NIT",
      "https://via.placeholder.com/120x60?text=NCC",
      "https://via.placeholder.com/120x60?text=ETA",
      "https://via.placeholder.com/120x60?text=ECCI",
      "https://via.placeholder.com/120x60?text=RMC",
    ].map((logo, index) => (
      <div className="logo-card" key={index}>
        <img src={logo} alt="client-logo" />
      </div>
    ))}

    {/* Duplicate for infinite effect */}
    {[
      {logo:{l2}},
      {logo:{l3}},
      {logo:{l4}},
      {logo:{l5}},
      {logo:{l6}},
      {logo:{l7}},
    ].map((logo, index) => (
      <div className="logo-card" key={"dup-" + index}>
        <img src={logo.logo} alt="client-logo" />
      </div>
    ))}

  </div>
</section>

<footer>

  {/* Main Footer */}
  <div className="footer-main">
    <div className="container">
      <div className="row">

        {/* Column 1 - Logo & Address */}
        <div className="col-md-4 footer-col">
          <img 
            src={logo}
            alt="Chettinad Cement"
            className="footer-logo"
          />

          <p>
            <FaMapMarkerAlt className="footer-icon" />
            Meyyammai Building, 16/33, Gandhi Nagar, 2nd Main Road,
            Adyar, Chennai, Tamil Nadu, India - 600020
          </p>

          <p>
            <FaPhoneAlt className="footer-icon" />
            +91 96599 11155
          </p>

          <p>
            <FaEnvelope className="footer-icon" />
            info@chettinadcement.com
          </p>
        </div>


        {/* Column 2 - Products */}
        <div className="col-md-3 footer-col">
          <h5>Products</h5>
          <ul>
            <li>MAXCRETE PREMIUM PPC</li>
            <li>SUPER GRADE PPC</li>
            <li>HOLLOW BLOCK CEMENT</li>
            <li>COMPOSITE</li>
            <li>OPC 53 GRADE</li>
            <li>OPC 43 GRADE</li>
            <li>CLASSIC SLAG CEMENT</li>
          </ul>
        </div>


        {/* Column 3 - Manufacturing Plants */}
        <div className="col-md-3 footer-col">
          <h5>Manufacturing Plants</h5>
          <ul>
            <li>Tamil Nadu</li>
            <li>Andhra Pradesh</li>
            <li>Karnataka</li>
            <li>Maharashtra</li>
            <li>Telangana</li>
          </ul>
        </div>


        {/* Column 4 - Important Links */}
        <div className="col-md-2 footer-col">
          <h5>Important Links</h5>
          <ul>
            <li>Environment</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Cookies</li>
            <li>Caution Note</li>
            <li>Contact Us</li>
          </ul>
        </div>

      </div>
    </div>
  </div>


  {/* Bottom Green Bar */}
  <div className="footer-bottom">
    <div className="social-icons">
      <FaFacebookF />
      <FaInstagram />
      <FaYoutube />
    </div>

    <p>
      © 2026 Chettinad Cement Corporation Private Limited,
      a Chettinad Group Company. All rights reserved.
    </p>
  </div>

</footer>

    </>
  );
}

export default App;
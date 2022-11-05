import logo from './logo.svg';
// import sample from './sample.mp4';
import './App.css';

function App() {

      const myStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/6.png'})`,
      };
  
    const aboutUs = {
      backgroundImage: `url(${process.env.PUBLIC_URL + '/images/4.png'})`,
    };
  return (
    <div className="App">
      <nav
        class="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target"
        id="ftco-navbar"
      >
        <div class="container">
          <a class="navbar-brand" href="index.html">
            SKILL MOLD
          </a>
          <button
            class="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="oi oi-menu"></span> Menu
          </button>

          <div class="collapse navbar-collapse" id="ftco-nav">
            <ul class="navbar-nav nav ml-auto">
              <li class="nav-item">
                <a href="#home-section" class="nav-link">
                  <span>Home</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#about-section" class="nav-link">
                  <span>About</span>
                </a>
              </li>

              <li class="nav-item">
                <a href="#services-section" class="nav-link">
                  <span>Services</span>
                </a>
              </li>

              <li class="nav-item">
                <a href="#contact-section" class="nav-link">
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section
        class="ftco-section ftco-hireme img margin-top first-slide vh-100"
        style={myStyle}
        // style="background-image: url(images/bg_1.jpg)"
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-7  text-center">
              <h2>
                TECHNOLOGY <span>DRIVEN COMPANY</span> LIKE NO OTHER....
              </h2>
              <h3>COMMITTED TO MAXIMIZE VALUE</h3>
              {/* <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p> */}
              <p class="mb-0">
                <a href="#" class="btn btn-primary py-3 px-5">
                  MORE
                </a>
              </p>
              {/* <video className="videoTag" autoPlay loop muted>
                <source src={sample} type="video/mp4" />
              </video> */}
            </div>
          </div>
        </div>
      </section>
      {/* <section
        class="ftco-about img ftco-section ftco-no-pb"
        id="about-section"
      >
        <div class="container">
          <div class="row d-flex">
            <div class="col-md-6 col-lg-5 d-flex">
              {' '}
              <div class="img-about img d-flex align-items-stretch">
                <div class="overlay"></div>
                <div
                  class="img d-flex align-self-stretch align-items-center"
                  style={aboutUs}
                ></div>
              </div>
            </div>
            <div class="col-md-6 col-lg-7 pl-lg-5 pb-5">
              <div class="row justify-content-start pb-3">
                <div class="col-md-12 heading-section  ">asas</div>{' '}
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section
        class="ftco-about img ftco-section ftco-no-pb"
        id="about-section"
      >
        <div class="container">
          <div class="row d-flex">
            <div class="col-md-6 col-lg-5 d-flex">
              <div class="img-about img d-flex align-items-stretch">
                <div class="overlay"></div>
                <div
                  class="img d-flex align-self-stretch align-items-center"
                  style={aboutUs}
                ></div>
              </div>
            </div>
            <div class="col-md-6 col-lg-7 pl-lg-5 pb-5">
              <div class="row justify-content-start pb-3">
                <div class="col-md-12 heading-section  ">
                  <h1 class="big">About</h1>
                  <h2 class="mb-4">About Us</h2>
                  <p>
                    Skill mold is a pioneering CAE company engaged in NextGen
                    CAE, backed by a 30 year legacy of value creation. As a
                    knowledge-intensive company, we apply the latest CAE
                    Technology solutions to Advanced Materials, Multiphysics,
                    Optimization and CAE Process Automation. We are the
                    exclusive distributor of CAE technologies CARSIM and
                    TAITherm. We also are a strategic partner of Simulia in
                    India. Our customers are top global brands such as Chrysler,
                    GM, Hyundai, Mahindra, Mercedes, Renault-Nissan, etc.
                  </p>
                </div>
              </div>
              <div class="counter-wrap  d-flex mt-md-3">
                <div class="text">
                  <p class="mb-4">
                    <span class="number" data-number="120">
                      100
                    </span>
                    <span> Project complete</span>
                  </p>
                  <p>
                    <a href="#" class="btn btn-primary py-3 px-3">
                      ---
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="ftco-section" id="services-section">
        <div class="container">
          <div class="row justify-content-center py-5 mt-5">
            <div class="col-md-12 heading-section text-center  ">
              <h1 class="big big-2">Services</h1>
              <h2 class="mb-4">Services</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 text-center d-flex  ">
              <a href="#" class="services-1">
                <span class="icon">
                  <i class="flaticon-analysis"></i>
                </span>
                <div class="desc">
                  <h3 class="mb-5">Web Design</h3>
                </div>
              </a>
            </div>
            <div class="col-md-4 text-center d-flex  ">
              <a href="#" class="services-1">
                <span class="icon">
                  <i class="flaticon-flasks"></i>
                </span>
                <div class="desc">
                  <h3 class="mb-5">Phtography</h3>
                </div>
              </a>
            </div>
            <div class="col-md-4 text-center d-flex  ">
              <a href="#" class="services-1">
                <span class="icon">
                  <i class="flaticon-ideas"></i>
                </span>
                <div class="desc">
                  <h3 class="mb-5">Web Developer</h3>
                </div>
              </a>
            </div>

            <div class="col-md-4 text-center d-flex  ">
              <a href="#" class="services-1">
                <span class="icon">
                  <i class="flaticon-analysis"></i>
                </span>
                <div class="desc">
                  <h3 class="mb-5">App Developing</h3>
                </div>
              </a>
            </div>
            <div class="col-md-4 text-center d-flex  ">
              <a href="#" class="services-1">
                <span class="icon">
                  <i class="flaticon-flasks"></i>
                </span>
                <div class="desc">
                  <h3 class="mb-5">Branding</h3>
                </div>
              </a>
            </div>
            <div class="col-md-4 text-center d-flex  ">
              <a href="#" class="services-1">
                <span class="icon">
                  <i class="flaticon-ideas"></i>
                </span>
                <div class="desc">
                  <h3 class="mb-5">Product Strategy</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        class="ftco-section contact-section ftco-no-pb"
        id="contact-section"
      >
        <div class="container">
          <div class="row justify-content-center mb-5 pb-3">
            <div class="col-md-7 heading-section text-center ">
              <h1 class="big big-2">Contact</h1>
              <h2 class="mb-4">Contact Me</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
            </div>
          </div>

          <div class="row d-flex contact-info mb-5">
            <div class="col-md-6 col-lg-3 d-flex ">
              <div class="align-self-stretch box p-4 text-center">
                <div class="icon d-flex align-items-center justify-content-center">
                  <span class="icon-map-signs"></span>
                </div>
                <h3 class="mb-4">Address</h3>
                <p>
                  HiLITE Business Park, 1612, 6th Floor, Poovangal,
                  Pantheeramkavu, Kerala 673014
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 d-flex ">
              <div class="align-self-stretch box p-4 text-center">
                <div class="icon d-flex align-items-center justify-content-center">
                  <span class="icon-phone2"></span>
                </div>
                <h3 class="mb-4">Contact Number</h3>
                <p>
                  <a href="tel:9074738855">HR :- 9074738855</a>
                </p>
                <p>
                  <a href="tel:8438973050">MD :- 8438973050</a>
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 d-flex ">
              <div class="align-self-stretch box p-4 text-center">
                <div class="icon d-flex align-items-center justify-content-center">
                  <span class="icon-paper-plane"></span>
                </div>
                <h3 class="mb-4">Email Address</h3>
                <p>
                  <a href="mailto:hello@scaleupmissionitservices.com">
                    hello@scaleupmissionitservices.com
                  </a>
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 d-flex ">
              <div class="align-self-stretch box p-4 text-center">
                <div class="icon d-flex align-items-center justify-content-center">
                  <span class="icon-globe"></span>
                </div>
                <h3 class="mb-4">Website</h3>
                <p>
                  <a href="#">yoursite.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="ftco-footer ftco-section">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md">
              <div class="ftco-footer-widget mb-4">
                <h2 class="ftco-heading-2">About</h2>
                <p>
                  We are a business management consultancy that focuses on
                  designing sustainable strategies and implementing them
                  operationally to achieve the potential growth of a business.
                  To make this real, we take every business through a
                  combination of 3 different tools such as business consulting,
                  executive coaching, and corporate training.
                </p>
                <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                  <li class=" ">
                    <a href="#">
                      <span class="icon-twitter"></span>
                    </a>
                  </li>
                  <li class=" ">
                    <a href="#">
                      <span class="icon-facebook"></span>
                    </a>
                  </li>
                  <li class=" ">
                    <a href="#">
                      <span class="icon-instagram"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md">
              <div class="ftco-footer-widget mb-4 ml-md-4">
                <h2 class="ftco-heading-2">Links</h2>
                <ul class="list-unstyled">
                  <li>
                    <a href="#">
                      <span class="icon-long-arrow-right mr-2"></span>Home
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon-long-arrow-right mr-2"></span>About
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon-long-arrow-right mr-2"></span>Services
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon-long-arrow-right mr-2"></span>Projects
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon-long-arrow-right mr-2"></span>Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md">
              <div class="ftco-footer-widget mb-4">
                <h2 class="ftco-heading-2">Services</h2>
                <ul class="list-unstyled">
                  <li>
                    <a href="#">
                      <span class="icon-long-arrow-right mr-2"></span>Web Design
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon-long-arrow-right mr-2"></span>Web
                      Development
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon-long-arrow-right mr-2"></span>Business
                      Strategy
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon-long-arrow-right mr-2"></span>Data
                      Analysis
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon-long-arrow-right mr-2"></span>Graphic
                      Design
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md">
              <div class="ftco-footer-widget mb-4">
                <h2 class="ftco-heading-2">Have a Questions?</h2>
                <div class="block-23 mb-3">
                  <ul>
                    <li>
                      <span class="icon icon-map-marker"></span>
                      <span class="text">
                        HiLITE Business Park, 1612, 6th Floor, Poovangal,
                        Pantheeramkavu, Kerala 673014
                      </span>
                    </li>
                    <li>
                      <a href="#">
                        <span class="icon icon-phone"></span>
                        <span class="text">+91 9074738855</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="icon icon-envelope"></span>
                        <span class="text">
                          hello@scaleupmissionitservices.com
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 text-center">
              {/* Copyright &copy;  All rights reserved | This template is made with <i class="icon-heart color-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

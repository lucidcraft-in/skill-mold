 
// import sample from './sample.mp4';
import './App.css';
import location from './location.png';
import phone from './phone.png';
import email from './email.png';
import web from './web.png';
import logo from './logo3.png';

function App() {

      const myStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/6.png'})`,
      };
  
    const aboutUs = {
      backgroundImage: `url(${process.env.PUBLIC_URL + '/images/4.png'})`,
    };

     const vehicleIntegration = {
       backgroundImage: `url(${process.env.PUBLIC_URL + '/images/CS5.jpg'})`,
     };
  
    const crashAnalysis = {
      backgroundImage: `url(${process.env.PUBLIC_URL + '/images/crash.jpg'})`,
    };
  
    const structure = {
      backgroundImage: `url(${
        process.env.PUBLIC_URL + '/images/structure.jpg'
      })`,
    };
  
      const fatigue = {
        backgroundImage: `url(${
          process.env.PUBLIC_URL + '/images/fatigue.jpg'
        })`,
      };
  
    const multibody = {
      backgroundImage: `url(${
        process.env.PUBLIC_URL + '/images/multibody.jpg'
      })`,
    };
  
   const fluid = {
     backgroundImage: `url(${process.env.PUBLIC_URL + '/images/fluid.jpg'})`,
   };
  
   const testing = {
     backgroundImage: `url(${process.env.PUBLIC_URL + '/images/testing.png'})`,
   };
  
  
  return (
    <div className="App">
      <nav
        class="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target"
        id="ftco-navbar"
      >
        <div class="container">
          <a class="navbar-brand" href="index.html">
            <img src={logo} />
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
              <li class="nav-item">
                <a href="#Career-section" class="nav-link">
                  <span>Career </span>
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
                  <h6>
                    We support almost all areas of CAE for automotive
                    development
                  </h6>
                  <p>
                    We have CAE engineers with expertise in fields such as
                    structural and kinematic analysis, CFD and electromagnetic
                    simulation We provide engineering services and technical
                    consultancy by collocating or supplying contract engineers
                    to solve client’s problems and create new value
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="ftco-section" id="services-section">
        <div class="container">
          <div class="row justify-content-center mb-5 pb-5">
            <div class="col-md-7 heading-section text-center ">
              <h1 class="big big-2">Services</h1>
              <h2 class="mb-4">Our Services</h2>
            </div>
          </div>
          <div class="row d-flex">
            <div class="col-md-4 d-flex ">
              <div class="blog-entry justify-content-end">
                <a
                  class="block-20"
                  style={vehicleIntegration}
                  // style="background-image: url('images/image_1.jpg');"
                ></a>
                <div class="text mt-3 float-right d-block">
                  <h3 class="heading">
                    <a>Vehicle integration</a>
                  </h3>
                  <p>
                    Our exclusive and expert CAE engineers can create, in very
                    short time periods, complex meshes for accurate large scale
                    CAE analysis models for crash, NVH and durability. They can
                    take care of the whole gamut of activities from coordination
                    for acquisition of CAD data from each department, creation
                    of component and assembly models of whole vehicles
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex ">
              <div class="blog-entry justify-content-end">
                <a
                  class="block-20"
                  style={crashAnalysis}
                  // style="background-image: url('images/image_1.jpg');"
                ></a>
                <div class="text mt-3 float-right d-block">
                  <h3 class="heading">
                    <a>Crash Analysis</a>
                  </h3>
                  <p>
                    We carry vehicle crash tests under specific conditions and
                    environments to check their validation. This process makes
                    easy to understand how a product will behave in a given
                    environment.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex ">
              <div class="blog-entry justify-content-end">
                <a
                  class="block-20"
                  style={structure}
                  // style="background-image: url('images/image_1.jpg');"
                ></a>
                <div class="text mt-3 float-right d-block">
                  <h3 class="heading">
                    <a>Structural Analysis</a>
                  </h3>
                  <p>
                    We perform structural analysis to determine the effect of
                    load on physical structures and their components. It is used
                    to determine the strength of a product by computing stress
                    and deformations in structure.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex ">
              <div class="blog-entry justify-content-end">
                <a
                  class="block-20"
                  style={fatigue}
                  // style="background-image: url('images/image_1.jpg');"
                ></a>
                <div class="text mt-3 float-right d-block">
                  <h3 class="heading">
                    <a>Fatigue & Durability</a>
                  </h3>
                  <p>
                    Ctrine performs fatigue and durability analysis to predict
                    product life cycle. Our engineers are experts in performing
                    durability analysis and provide solutions which help develop
                    a product with a better timeline. In this analysis, we apply
                    specific load to the structure to assess the stress and find
                    the breaking point.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex ">
              <div class="blog-entry justify-content-end">
                <a
                  class="block-20"
                  style={crashAnalysis}
                  // style="background-image: url('images/image_1.jpg');"
                ></a>
                <div class="text mt-3 float-right d-block">
                  <h3 class="heading">
                    <a>Multibody Dynamics (MBD)</a>
                  </h3>
                  <p>
                    MBD is a study of dynamic behavior of multiple
                    interconnected bodies. With the help of MBD you can model,
                    analyze, simulate and optimize the arbitrary motion of
                    possibly thousands of interconnected bodies.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex ">
              <div class="blog-entry justify-content-end">
                <a
                  class="block-20"
                  style={multibody}
                  // style="background-image: url('images/image_1.jpg');"
                ></a>
                <div class="text mt-3 float-right d-block">
                  <h3 class="heading">
                    <a>Computational fluid dynamics (CFD)</a>
                  </h3>
                  <p>
                    A team lead by a first-class PhD engineer with more than 20
                    years of computational fluid dynamics (CFD) work experience
                    at automotive OEMs can help customers solve their
                    complicated problems. Many of the engineers of our oversea
                    affiliate in India are also doctors and masters degree
                    holders, and the collaboration between Japan and India
                    enables us to provide cost-effective technical consulting
                    services.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex " width="100%">
              <div class="blog-entry justify-content-end">
                <a
                  class="block-20"
                  style={testing}
                  // style="background-image: url('images/image_1.jpg');"
                ></a>
                <div class="text mt-3 float-right d-block">
                  <h3 class="heading">
                    <a>CAE Software Training</a>
                  </h3>
                  <p>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-section ftco-no-pb" id="Career-section">
        <div class="container">
          <div class="row justify-content-center pb-5">
            <div class="col-md-10 heading-section text-center ">
              <h1 class="big big-2">Career </h1>
              <h2 class="mb-4">Career</h2>
              <p>Vacancy</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="resume-wrap ">
                <span class="date">1 sr CAE Engineer- 3 to 10 years</span>
                <h2>CAE Engineer</h2>
                <span class="position">Click bellow </span>
                <p class="mb-0">
                  <a
                    target="blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfkBJeETCZ9xjR2mb1BwhXdcrMYNmST95bT2y58PplVC5OAcw/viewform?usp=sf_link"
                    class="btn btn-primary py-3 px-5"
                  >
                    Enquire now
                  </a>
                </p>
              </div>
              <div class="resume-wrap ">
                <span class="date">2-CAE Engineer 0 -3 years</span>
                <h2>CAE Engineer</h2>
                <span class="position">Click bellow</span>
                <p class="mt-4">
                  <a
                    target="blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfkBJeETCZ9xjR2mb1BwhXdcrMYNmST95bT2y58PplVC5OAcw/viewform?usp=sf_link
"
                    class="btn btn-primary py-3 px-5"
                  >
                    Enquire now
                  </a>
                </p>
              </div>
              <div class="resume-wrap ">
                <span class="date">Analyst </span>
                <h2>CAE Engineer</h2>
                <span class="position">Click bellow</span>
                <p class="mt-4">
                  <a
                    target="blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfkBJeETCZ9xjR2mb1BwhXdcrMYNmST95bT2y58PplVC5OAcw/viewform?usp=sf_link

"
                    class="btn btn-primary py-3 px-5"
                  >
                    Enquire now
                  </a>
                </p>
              </div>
            </div>

            <div class="col-md-6">
              <div class="resume-wrap ">
                <span class="date">Graduate engineering Trainee </span>
                <h2> Engineering</h2>
                <span class="position">Click bellow</span>
                <p class="mt-4">
                  <a
                    target="blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLScWdl-6GzyZF5KgIYYSQGvinQ0XlD0f0a-QbyJcTTXWqFusjA/viewform?usp=sf_link


"
                    class="btn btn-primary py-3 px-5"
                  >
                    Enquire now
                  </a>
                </p>
              </div>{' '}
              <div class="resume-wrap ">
                <span class="date">cad engineer </span>
                <h2>CAD Engineer</h2>
                <span class="position">Click bellow</span>
                <p class="mt-4">
                  <a
                    target="blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfkBJeETCZ9xjR2mb1BwhXdcrMYNmST95bT2y58PplVC5OAcw/viewform?usp=sf_link

"
                    class="btn btn-primary py-3 px-5"
                  >
                    Enquire now
                  </a>
                </p>
              </div>{' '}
              <div class="resume-wrap ">
                <span class="date"> other vacancy </span>
                <h2>-</h2>
                <span class="position">Click bellow</span>
                <p class="mt-4">
                  <a
                    target="blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLScTOa3lNROcaXbZtqs9XXf-HSuuIzm0FAaR6PTzh65hFb12Aw/viewform?usp=sf_link

"
                    class="btn btn-primary py-3 px-5"
                  >
                    Enquire now
                  </a>
                </p>
              </div>
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
            </div>
          </div>

          <div class="row d-flex contact-info mb-5">
            <div class="col-md-6 col-lg-3 d-flex ">
              <div class="align-self-stretch box p-4 text-center">
                <div class="icon d-flex align-items-center justify-content-center">
                  {/* <span class="fa fa-map-marker"></span> */}
                  <img src={location} width="55px" />
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
                  <img src={phone} width="55px" />
                </div>
                <h3 class="mb-4">Contact Number</h3>
                <p>
                  <a href="tel:+919074738855">HR :-+91 9074738855</a>
                </p>
                <p>
                  <a href="tel:+918438973050">MD :- +91 8438973050</a>
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 d-flex ">
              <div class="align-self-stretch box p-4 text-center">
                <div class="icon d-flex align-items-center justify-content-center">
                  <img src={email} width="55px" />
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
                  <img src={web} width="55px" />
                </div>
                <h3 class="mb-4"></h3>
                <p>
                  <a href="https://www.linkedin.com/company/scaleup-mission-it-services/">
                    linkedin
                  </a>
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
                    <a href="#home-section">
                      <span class="icon-long-arrow-right mr-2"></span>Home
                    </a>
                  </li>
                  <li>
                    <a href="#home-section">
                      <span class="icon-long-arrow-right mr-2"></span>About
                    </a>
                  </li>
                  <li>
                    <a href="#services-section">
                      <span class="icon-long-arrow-right mr-2"></span>Services
                    </a>
                  </li>

                  <li>
                    <a href="#contact-section">
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
                    <a href="#services-section">
                      <span class="icon-long-arrow-right mr-2"></span>Vehicle
                      integration
                    </a>
                  </li>
                  <li>
                    <a href="#services-section">
                      <span class="icon-long-arrow-right mr-2"></span>Crash
                      Analysis
                    </a>
                  </li>
                  <li>
                    <a href="#services-section">
                      <span class="icon-long-arrow-right mr-2"></span>Structural
                      Analysis
                    </a>
                  </li>
                  <li>
                    <a href="#services-section">
                      <span class="icon-long-arrow-right mr-2"></span>Fatigue &
                      Durability
                    </a>
                  </li>
                  <li>
                    <a href="#services-section">
                      <span class="icon-long-arrow-right mr-2"></span>Multibody
                      Dynamics (MBD)
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
              This template is made with by{' '}
              <a href="https://www.luzidcraft.com/" target="_blank">
                https://www.luzidcraft.com/
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

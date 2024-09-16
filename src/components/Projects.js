import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import QbitLog from "../assets/project-img/Qbit Log.png";
import DocsApp from "../assets/project-img/Docs app.png";
import Business from "../assets/project-img/Business.png";
import Productivity from "../assets/project-img/Productivity.png";
import UtubeLite from "../assets/project-img/Utube-Lite.png";
import Alpha from "../assets/project-img/Alpha.png";
import QuantmNews from "../assets/project-img/QuantmNews.png";
import Tongue from "../assets/project-img/Tongue.png";
import Deer from "../assets/project-img/Deer.png";
import Farm from "../assets/project-img/Farm.png";
import Quantm from "../assets/project-img/Quantm.png";
import Optic from "../assets/project-img/optic.png";
import Ragnar from "../assets/project-img/ragnar.png"
import Quant from "../assets/project-img/quantmIT.png"
import Autostack from "../assets/project-img/autostack.png"
import Nesto from "../assets/project-img/nesto.png"

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const Web_Projects = [
    {
      title: "Michael Phillips",
      description: "Business Coach Website",
      imgUrl: Business,
      href: "https://business-coach.bz1media.com/",
    },
    {
      title: "Michelle Taylor",
      description: "Productivity Coach Website",
      imgUrl: Productivity,
      href: "https://productivity-coach.bz1media.com/",
    },
    {
      title: "NestoHub",
      description: "An Online Space To Connect Builders & Brokers",
      imgUrl: Nesto,
      href: "https://nestohub.in/",
    },
    {
      title: "U-tube Lite",
      description: "YouTube Clone in React.js",
      imgUrl: UtubeLite,
      href: "https://newtube-eight.vercel.app/",
    },
    {
      title: "Docs App",
      description: "Platform for daily Docs",
      imgUrl: DocsApp,
      href: "https://docs-app-black.vercel.app/",
    },
    {
      title: "Qbit Logs",
      description: "QuantmHill Platform to manage thier employes",
      imgUrl: QbitLog,
      href: "https://qbit-final.vercel.app/",
    },
  ];

  const Design_Projects = [
    {
      title: "Alpha Blue",
      description: "Alpha Blue is Shipping & Clearing Company",
      imgUrl: Alpha,
    },
    {
      title: "Tongue Affair",
      description: "Tongue Affair is a brand that provides cloud services",

      imgUrl: Tongue,
    },
    {
      title: "Effutu Dreams",
      description: "They are Proud Deer Hunters",
      imgUrl: Deer,
    },
    {
      title: "Ntimbe Farms",
      description: "Farm that produce organic food on large scale",
      imgUrl: Farm,
    },
    {
      title: "QuantmHill",
      description: "Well Known IT Company in India",
      imgUrl: Quantm,
    },
    {
      title: "Optic EL ALIA",
      description: "Famous glasses store in Dubai",
      imgUrl: Optic,
    },
  ];
  const Social_Projects = [
    {
      title: "Ragnar Studios",
      description: " More than a Designing Agency",
      imgUrl: Ragnar,
      href:"https://www.instagram.com/ragnar.studios/"
    },
    {
      title: "QuantmHill",
      description: "QuantmHill is a IT Company from India",

      imgUrl: Quant,
      href:"https://www.instagram.com/quantmhill/"
    },
    {
      title: "Stack Auto",
      description: "Well Known organization that Resell Cars",
      imgUrl: Autostack,
      href:"https://www.instagram.com/thestackauto/"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    "I have successfully completed numerous projects, delivering
                    high-quality graphics, intuitive website designs, and
                    powerful application solutions, consistently driving
                    business growth and exceeding client expectations."
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web Design</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Logo Design</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Social Media</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {Web_Projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {Design_Projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <Row>
                          {Social_Projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

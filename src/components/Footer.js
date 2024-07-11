import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row
          className="align-items-center"
          style={{ display: "flex", justifyContent: "center", alignItems:"center" }}
        >
          <Col size={12} lg={4} md={6} sm={12} style={{ display: "flex", justifyContent: "center", alignItems:"center" }}>
            <img
              src={logo}
              alt="Logo"
              style={{ height: "70px", width: "auto" }}
            />
          </Col>
          <Col size={6} lg={4} md={6} sm={12} className="text-center text-sm-end" style={{ display: "flex", justifyContent: "center", alignItems:"center", paddingTop:"30px" }}>
            {" "}
            <h6>
              Copyright 2022. All Rights Reserved To <br></br><h5>Ragnar Studio's</h5>
            </h6>
          </Col>
          <Col size={12} lg={4} md={6} sm={12} className="text-center text-sm-end" style={{ display: "flex", justifyContent: "center", alignItems:"center",paddingTop:"10px" }}>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/profile.php?id=100082782101211"
                target="blank"
              >
                <img src={navIcon2} alt="" />
              </a>
              <a
                href="https://www.instagram.com/ragnar.studios?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="blank"
              >
                <img src={navIcon3} alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/jagdeep-singh-rana-286809218/"
                target="blank"
              >
                <img src={navIcon1} alt="" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import welcomeTo_dragon from "../assets/images/webp/welcome_dragon.webp";
import side_circle from "../assets/images/png/side_circle_img.png";
const WelcomeTo = () => {
  return (
    <>
      <section id="buy" className="py-5 position-relative mt-5">
        <Container className="pt-lg-5 mt-xl-5">
          <Row className="align-items-center justify-content-lg-between justify-content-center mt-3">
            <Col
              xs={11}
              sm={10}
              xl={5}
              lg={6}
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div>
                <img className="w-100" src={welcomeTo_dragon} alt="dragon" />
              </div>
            </Col>
            <Col lg={6} data-aos="fade-left" data-aos-duration="2000">
              <div className="text-center text-lg-start mt-3 mt-lg-0">
                <h2 className=" text-white ff_agnostic fs_6xl mb-0 fw-normal py-lg-0 py-md-4 py-sm-3 py-2">
                  Welcome to
                  <span className="welcome_heading fs_7xl d-xxl-block ps-2 ms-1 ps-xxl-0 ms-xxl-0">
                    Small Arms Syndicate
                  </span>
                </h2>
                <div className="mw_575 mx-auto mx-lg-0">
                  <p className="ff_poppins fs_md text-white fw-normal lh_174 mb-0  pt-xl-1">
                    Mauris, ipsum auctor at aenean. Ultrices netus enim nulla
                    nisl, metus, leo, donec sed sollicitudin. Nisl, sem dapibus
                    ac urna. Amet suscipit varius ullamcorper fermentum nulla
                    gravida. Pellentesque tortor vel tempus nunc metus. Felis
                    nec suspendisse in odio eget at vel amet erat. Nisi
                    consequat
                  </p>
                  <p className=" ff_poppins fs_md text-white fw-normal lh_174 mb-0 pt-1 pb-1">
                    Nisl, sem dapibus ac urna. Amet suscipit varius ullamcorper
                    fermentum nulla gravida.
                  </p>
                </div>
              </div>
              <div className="text-center text-lg-start">
                <button className="ff_agnostic fw-normal py_14 px_20 fs_md btn_bg border-0 rounded-5 text-white mt-md-4 mt-sm-3 mt-2">
                  Buy now
                </button>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="position-absolute top-0 d-md-block d-none left_-5 circle_spin">
          <img
            height={201}
            width={201}
            src={side_circle}
            alt="side_circle_img"
          />
        </div>
        <div className="position-absolute top-0 left_-5 d-md-block d-none circle_ani">
          <div className="bg_side_circle"></div>
        </div>
        <div className="position-absolute bottom_-20 d-lg-block d-none right_-5 circle_spin">
          <img
            height={201}
            width={201}
            src={side_circle}
            alt="side_circle_img"
          />
        </div>
        <div className="position-absolute bottom_-20 d-lg-block d-none right_-5 circle_ani">
          <div className="bg_side_circle"></div>
        </div>
      </section>
    </>
  );
};

export default WelcomeTo;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import welcomeTo_dragon from "../assets/images/webp/welcome_dragon.webp";
const WelcomeTo = () => {
  return (
    <>
      <section className="bg-black py-5">
        <Container>
          <Row className="align-items-center justify-content-lg-between justify-content-center">
            <Col xs={11} sm={10} xl={5} lg={6}>
              <div>
                <img className="w-100" src={welcomeTo_dragon} alt="dragon" />
              </div>
            </Col>
            <Col lg={6}>
              <h2 className="text-center text-sm-start text-white ff_agnostic fs_6xl mb-0 fw-normal py-lg-0 py-md-4 py-sm-3 py-2">
                Welcome to 
                <span className="welcome_heading fs_7xl d-xxl-block ps-2 ms-1 ps-xxl-0 ms-xxl-0">
                  Small Arms Syndicate
                </span>
              </h2>
              <p className="ff_poppins fs_md text-white fw-normal lh_174 mb-0 text-center text-sm-start pt-xl-1">
                Mauris, ipsum auctor at aenean. Ultrices netus enim nulla nisl,
                metus, leo, donec sed sollicitudin. Nisl, sem dapibus ac urna.
                Amet suscipit varius ullamcorper fermentum nulla gravida.
                Pellentesque tortor vel tempus nunc metus. Felis nec suspendisse
                in odio eget at vel amet erat. Nisi consequat
              </p>
              <p className="text-center text-sm-start ff_poppins fs_md text-white fw-normal lh_174 mb-0 pb-1">
                Nisl, sem dapibus ac urna. Amet suscipit varius ullamcorper
                fermentum nulla gravida.
              </p>
              <div className="text-center text-sm-start">
                <button className="ff_agnostic fw-normal py_14 px_20 fs_md btn_bg border-0 rounded-5 text-white mt-md-4 mt-sm-3 mt-2">
                  Buy now
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default WelcomeTo;

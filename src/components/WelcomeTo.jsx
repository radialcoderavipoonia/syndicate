import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import welcomeTo_dragon from "../assets/images/webp/welcome_dragon.png";
const WelcomeTo = () => {
  return (
    <>
      <section className="bg-black py-5">
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col lg={5}>
              <div>
                <img className="w-100" src={welcomeTo_dragon} alt="dragon" />
              </div>
            </Col>
            <Col lg={6}>
              <h3 className="ff_agnostic text-white fs_6xl mb-0 fw-normal">
                Welcome to
              </h3>
              <h2 className="welcome_heading ff_agnostic fs_7xl mb-0 fw-normal pt-1">
                Small Arms Syndicate
              </h2>
              <p className="ff_poppins fs_md text-white fw-normal lh_174 mb-0">
                Mauris, ipsum auctor at aenean. Ultrices netus enim nulla nisl,
                metus, leo, donec sed sollicitudin. Nisl, sem dapibus ac urna.
                Amet suscipit varius ullamcorper fermentum nulla gravida.
                Pellentesque tortor vel tempus nunc metus. Felis nec suspendisse
                in odio eget at vel amet erat. Nisi consequat
              </p>
              <p className="ff_poppins fs_md text-white fw-normal lh_174 mb-0 pb-1">
                Nisl, sem dapibus ac urna. Amet suscipit varius ullamcorper
                fermentum nulla gravida.
              </p>
              <button className="ff_agnostic fw-normal py_14 px_20 fs_md btn_bg border-0 rounded-5 text-white mt-4">
                Buy now
              </button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default WelcomeTo;

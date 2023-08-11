import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import dragon1 from "../assets/images/webp/team_1_dragon.webp";
import dragon2 from "../assets/images/webp/team_2_dragon.webp";
import dragon3 from "../assets/images/webp/team_3_dragon.webp";
const Team = () => {
  return (
    <>
      <section className="team_bg py-5">
        <Container>
          <h2 className="ff_agnostic text-white mb-xxl-5 pb-lg-5 pb-4 fs_6xl fw-normal text-center">
            Team
          </h2>
          <Row className="justify-content-center">
            <Col lg={4} md={6}>
              <div className="position-relative team_card transition_3s">
                <img className="w-100" src={dragon1} alt="dragon" />
                <div className="position-absolute on_image_text">
                  <h4 className="ff_agnostic fs_4xl fw-normal text-white text-center white_s_nowrap">Omar Gouse</h4>
                  <p className="ff_poppins text-white fw-normal fs_md text-center">(CEO)</p>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="position-relative team_card transition_3s pt-3 pt-md-0">
                <img className="w-100" src={dragon2} alt="dragon" />
                <div className="position-absolute on_image_text">
                  <h4 className="ff_agnostic fs_4xl fw-normal text-white text-center white_s_nowrap">Omar Gouse</h4>
                  <p className="ff_poppins text-white fw-normal fs_md text-center">(CEO)</p>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="position-relative team_card transition_3s pt-3 pt-lg-0">
                <img className="w-100" src={dragon3} alt="dragon" />
                <div className="position-absolute on_image_text">
                  <h4 className="ff_agnostic fs_4xl fw-normal text-white text-center white_s_nowrap">Omar Gouse</h4>
                  <p className="ff_poppins text-white fw-normal fs_md text-center">(CEO)</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Team;

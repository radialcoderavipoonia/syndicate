import React from"react";
import { Col, Container, Row } from"react-bootstrap";
import dragon1 from"../assets/images/webp/team_1_dragon.webp";
import dragon2 from"../assets/images/webp/team_2_dragon.webp";
import dragon3 from "../assets/images/webp/team_3_dragon.webp";
import side_circle from "../assets/images/webp/side_circle_img.webp"
const Team = () => {
  return (
    <>
      <section id="team" className="team_bg py-5 position-relative team_section">
        <Container className="py-5">
          <h2 className="ff_agnostic text-white mb-xxl-5 pb-lg-5 pb-4 fs_7xl fw-normal text-center"data-aos="fade-down">
            Team
          </h2>
          <Row className="justify-content-center">
            <Col lg={4} md={6} data-aos="fade-right"data-aos-duration="2000">
              <div className="position-relative">
                <div className="team_card transition_3s">
                  <img className="w-100 w_sm_unset h_sm_unset team_card_image" src={dragon1} alt="dragon" />
                </div>
                <div className="position-absolute on_image_text">
                  <h4 className="ff_agnostic fs_4xl fw-normal text-white text-center white_s_nowrap">
                    Omar Gouse
                  </h4>
                  <p className="ff_poppins text-white fw-normal fs_md text-center mb-0">
                    (CEO)
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} data-aos="fade-up"data-aos-duration="2000">
              <div className="position-relative pt-3 pt-md-0">
                <div className="team_card transition_3s">
                  <img className="w-100 w_sm_unset h_sm_unset team_card_image" src={dragon2} alt="dragon" />
                </div>
                <div className="position-absolute on_image_text">
                  <h4 className="ff_agnostic fs_4xl fw-normal text-white text-center white_s_nowrap">
                    Omar Gouse
                  </h4>
                  <p className="ff_poppins text-white fw-normal fs_md text-center mb-0">
                    (CEO)
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} data-aos="fade-left"data-aos-duration="2000">
              <div className="position-relative pt-3 pt-lg-0">
                <div className="team_card transition_3s">
                  <img className="w-100 w_sm_unset h_sm_unset team_card_image" src={dragon3} alt="dragon" />
                </div>
                <div className="position-absolute on_image_text">
                  <h4 className="ff_agnostic fs_4xl fw-normal text-white text-center white_s_nowrap">
                    Omar Gouse
                  </h4>
                  <p className="ff_poppins text-white fw-normal fs_md text-center mb-0">
                    (CEO)
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="position-absolute top_-12 d-md-block d-none right_-5 circle_spin">
          <img
            height={201}
            width={201}
            src={side_circle}
            alt="side_circle_img"
          />
        </div>
        <div className="position-absolute top_-12 right_-5 d-md-block d-none circle_ani">
          <div className="bg_side_circle"></div>
        </div>
        <div className="position-absolute bottom_-12 right_-5 d-lg-block d-none circle_spin">
          <img
            height={201}
            width={201}
            src={side_circle}
            alt="side_circle_img"
          />
        </div>
        <div className="position-absolute bottom_-12 right_-5 d-lg-block d-none circle_ani">
          <div className="bg_side_circle"></div>
        </div>
      </section>
    </>
  );
};

export default Team;

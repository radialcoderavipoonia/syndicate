import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import game from "../assets/images/webp/game_sindicate.webp";
import play_btn from "../assets/images/webp/play_btn.webp"
import side_circle from "../assets/images/png/side_circle_img.png"
const Game = () => {
  return (
    <>
      <section id="game" className="py-5 position-relative">
        <Container className="pt-lg-5 mt-xl-5">
          <Row className="align-items-center justify-content-center pt-5">
            <Col lg={6} data-aos="fade-right"data-aos-duration="2000">
                <h2 className="ff_agnostic fs_6xl fw-normal mb-0 text-white text-center text-lg-start">Syndicate Game</h2>
                <h3 className="ff_agnostic fs_3xl fw-normal mb-0 text-white pt-4 mb-1 text-center text-lg-start">What will the Syndicate game be?</h3>
                <p className="ff_poppins fs_md fw-normal lh_174 text-white text-center text-lg-start mw_539">The syndicate game will be a third person shooter where 4 factions will battle over lands that provide income via the Syndicate token for the faction that owns it.</p>
            </Col>
            <Col lg={6} md={11} data-aos="fade-left"data-aos-duration="2000">
                <div className="game_img position-relative">
                    <img src={game} alt="dragon" className="w-100" />
                    <img className="game_play_btn position-absolute c_pointer" src={play_btn} alt="play_btn" />
                </div>
            </Col>
          </Row>
        </Container>
        <div className="position-absolute top_10 d-xxl-block d-none left_-5 circle_spin">
          <img
            height={201}
            width={201}
            src={side_circle}
            alt="side_circle_img"
          />
        </div>
        <div className="position-absolute top_10 left_-5 d-xxl-block d-none circle_ani">
          <div className="bg_side_circle"></div>
        </div>
        <div className="position-absolute bottom_-22 right_-5 d-lg-block d-none circle_spin z-2">
          <img
            height={201}
            width={201}
            src={side_circle}
            alt="side_circle_img"
          />
        </div>
        <div className="position-absolute bottom_-22 right_-5 d-lg-block d-none circle_ani z-2">
          <div className="bg_side_circle"></div>
        </div>
      </section>
    </>
  );
};

export default Game;

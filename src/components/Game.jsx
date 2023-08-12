import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import game from "../assets/images/webp/game_sindicate.webp";
import play_btn from "../assets/images/webp/play_btn.webp"
const Game = () => {
  return (
    <>
      <section className="py-5 bg-black">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col lg={6}>
                <h2 className="ff_agnostic fs_6xl fw-normal mb-0 text-white text-center text-lg-start">Syndicate Game</h2>
                <h3 className="ff_agnostic fs_3xl fw-normal mb-0 text-white pt-4 mb-1 text-center text-lg-start">What will the Syndicate game be?</h3>
                <p className="ff_poppins fs_md fw-normal lh_174 text-white text-center text-lg-start">The syndicate game will be a third person shooter where 4 factions will battle over lands that provide income via the Syndicate token for the faction that owns it.</p>
            </Col>
            <Col lg={6} md={11}>
                <div className="game_img position-relative">
                    <img src={game} alt="dragon" className="w-100" />
                    <img className="game_play_btn position-absolute c_pointer" src={play_btn} alt="play_btn" />
                </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Game;

import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { Col, Container } from "react-bootstrap/esm";
import { RatCard } from "./common/Helper";
import { ActiveCard } from "./common/Helper";
import side_circle from "../assets/images/png/side_circle_img.png"
const Rarity = () => {
  const [active, setactive] = useState(1);
  return (
    <>
      <section id="rarity" className="py-5 position-relative">
        <Container>
          <div>
            <h2 className="fw-normal fs_7xl text-white ff_agnostic text-center mb-0">
              Rarity
            </h2>
            <div className="overflow-auto w_1200 start-0">
              <div className="d-flex align-items-center justify-content-center mt-4 mt-lg-5 ">
                <div className="py-2">
                  <button
                    onClick={() => {
                      setactive(1);
                    }}
                    className={
                      active === 1
                        ? "rounded-5 border-0 rarity_sec_btn_p px-4 btn_bg text-white ff_agnostic fs_lg fw-normal"
                        : "rounded-5 border-0 rarity_sec_btn_p  px-4 btn_rarity_bg_linier_2 text-white ff_agnostic fs_lg fw-normal"
                    }
                  >
                    Background
                  </button>
                </div>
                <div className="ms-4 ps-1">
                  <button
                    onClick={() => {
                      setactive(2);
                    }}
                    className={
                      active === 2
                        ? "rounded-5 border-0 rarity_sec_btn_p px-4 btn_bg text-white ff_agnostic fs_lg fw-normal"
                        : "rounded-5 border-0 rarity_sec_btn_p px-4 btn_rarity_bg_linier_2 text-white ff_agnostic fs_lg fw-normal"
                    }
                  >
                    Accessories
                  </button>
                </div>
                <div className="ms-4 ps-1">
                  <button className="rounded-5 border-0 rarity_sec_btn_p px-4 btn_rarity_bg_linier text-white ff_agnostic fs_lg fw-normal">
                    Clothes
                  </button>
                </div>
                <div className="ms-4 ps-1">
                  <button className="rounded-5 border-0 rarity_sec_btn_p px-4 btn_rarity_bg_linier text-white ff_agnostic fs_lg fw-normal">
                    Mouths
                  </button>
                </div>
                <div className="ms-4 ps-1">
                  <button className="rounded-5 border-0 rarity_sec_btn_p px-4 btn_rarity_bg_linier text-white ff_agnostic fs_lg fw-normal">
                    Skins
                  </button>
                </div>
                <div className="ms-4 ps-1">
                  <button className="rounded-5 border-0 rarity_sec_btn_p px-4 btn_rarity_bg_linier text-white ff_agnostic fs_lg fw-normal">
                    Head
                  </button>
                </div>
                <div className="ms-4 ps-1">
                  <button className="rounded-5 border-0 rarity_sec_btn_p px-4 btn_rarity_bg_linier text-white ff_agnostic fs_lg fw-normal">
                    Eyes
                  </button>
                </div>
              </div>
            </div>
            <Row className="mt-3 mt-lg-5 pt-md-2">
              {RatCard.map((Raritycard) => {
                return (
                  <Col
                    sm={11}
                    md={6}
                    xl={4}
                    key={Raritycard.id}
                    className={
                      active === 1
                        ? "mt-4 pt-2 pb-1 d-block mx-auto mx-md-0"
                        : "mt-4 pt-2 pb-1 d-none mx-auto mx-md-0"
                    }
                  >
                    <div className="rarity_card_border">
                      <div className="p-4 m-1">
                        <img
                          className="w-100"
                          src={Raritycard.imgcard}
                          alt="card_1"
                        />
                        <h2 className="fw-medium ff_poppins fs_lg text-white pt-4 mt-1 mb-0">
                          {Raritycard.heading}
                        </h2>
                        <div className="mt-3 d-flex justify-content-between">
                          <div>
                            <p className="mb-0 ff_poppins fw-semibold fs_4xl text-white">
                              {Raritycard.para}
                            </p>
                            <p className="mb-0 ff_poppins fw-semibold fs_4xl text_color_linier">
                              {Raritycard.para2}
                            </p>
                          </div>
                          <div className="d-flex align-items-end">
                            <button className="fw-normal ff_agnostic fs_lg text-white btn_bg rarity_btn_buynow_px py_12 border-0 rounded-5">
                              Buy Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                );
              })}
              {ActiveCard.map((Focus) => {
                return (
                  <Col
                    md={6}
                    xl={4}
                    key={Focus.id}
                    className={
                      active === 2
                        ? "mt-4 pt-md-2 pb-1 d-block"
                        : "mt-4 pt-md-2 pb-1 d-none"
                    }
                  >
                    <div className="rarity_card_border ">
                      <div className="p-4 m-1">
                        <img
                          className="w-100"
                          src={Focus.imgcard}
                          alt="card_1"
                        />
                        <h2 className="fw-medium ff_poppins fs_lg text-white pt-4 mt-1 mb-0">
                          {Focus.heading}
                        </h2>
                        <div className="mt-3 d-flex justify-content-between">
                          <div>
                            <p className="mb-0 ff_poppins fw-semibold fs_4xl text-white">
                              {Focus.para}
                            </p>
                            <p className="mb-0 ff_poppins fw-semibold fs_4xl text_color_linier">
                              {Focus.para2}
                            </p>
                          </div>
                          <div className="d-flex align-items-end">
                            <button className="fw-normal ff_agnostic fs_lg text-white btn_bg rarity_btn_buynow_px py_12 border-0 rounded-5">
                              Buy Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
            <div className="pt-xl-5 mt-md-4 mt-lg-5 text-center">
              <button className="border-0 btn_bg fw-normal fs_lg ff_agnostic text-white rounded-5 py_12 px-4 mt-4">
                Explore More
              </button>
            </div>
          </div>
        </Container>
        <div className="position-absolute top_35 left_-5 d-xxl-block d-none circle_spin">
          <img
            height={201}
            width={201}
            src={side_circle}
            alt="side_circle_img"
          />
        </div>
        <div className="position-absolute top_35 left_-5 d-xxl-block d-none circle_ani">
          <div className="bg_side_circle"></div>
        </div>
        <div className="position-absolute bottom-0 d-lg-block d-none right_-5 circle_spin">
          <img
            height={201}
            width={201}
            src={side_circle}
            alt="side_circle_img"
          />
        </div>
        <div className="position-absolute bottom-0 right_-5 d-lg-block d-none circle_ani">
          <div className="bg_side_circle"></div>
        </div>
      </section>
    </>
  );
};

export default Rarity;

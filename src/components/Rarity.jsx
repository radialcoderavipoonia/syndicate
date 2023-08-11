import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { Col, Container } from "react-bootstrap/esm";
import { RatCard } from "./common/Helper";
const Rarity = () => {
  const [active, setactive] = useState(1);
  return (
    <>
      <section className="py-5">
        <Container>
          <div>
            <h2 className="fw-normal fs_7xl text-white ff_agnostic text-center">
              Rarity
            </h2>
            <div className="d-flex align-items-center justify-content-center mt-5">
              <div>
                <button
                  onClick={() => {
                    setactive(1);
                  }}
                  className={
                    active === 1
                      ? "rounded-5 border-0 rarity_sec_btn_p px-4 btn_bg text-white ff_agnostic fs_lg fw-normal"
                      : "rounded-5 border-0 rarity_sec_btn_p px-4 btn_rarity_bg_linier text-white ff_agnostic fs_lg fw-normal"
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
                      : "rounded-5 border-0 rarity_sec_btn_p px-4 btn_rarity_bg_linier text-white ff_agnostic fs_lg fw-normal"
                  }
                >
                  Accessories
                </button>
              </div>
              <div className="ms-4 ps-1">
                <button
                  onClick={() => {
                    setactive(3);
                  }}
                  className={
                    active === 3
                      ? "rounded-5 border-0 rarity_sec_btn_p px-4 btn_bg text-white ff_agnostic fs_lg fw-normal"
                      : "rounded-5 border-0 rarity_sec_btn_p px-4 btn_rarity_bg_linier text-white ff_agnostic fs_lg fw-normal"
                  }
                >
                  Clothes
                </button>
              </div>
              <div className="ms-4 ps-1">
                <button
                  onClick={() => {
                    setactive(4);
                  }}
                  className={
                    active === 4
                      ? "rounded-5 border-0 rarity_sec_btn_p px-4 btn_bg text-white ff_agnostic fs_lg fw-normal"
                      : "rounded-5 border-0 rarity_sec_btn_p px-4 btn_rarity_bg_linier text-white ff_agnostic fs_lg fw-normal"
                  }
                >
                  Mouths
                </button>
              </div>
              <div className="ms-4 ps-1">
                <button
                  onClick={() => {
                    setactive(5);
                  }}
                  className={
                    active === 5
                      ? "rounded-5 border-0 rarity_sec_btn_p px-4 btn_bg text-white ff_agnostic fs_lg fw-normal"
                      : "rounded-5 border-0 rarity_sec_btn_p px-4 btn_rarity_bg_linier text-white ff_agnostic fs_lg fw-normal"
                  }
                >
                  Skins
                </button>
              </div>
              <div className="ms-4 ps-1">
                <button
                  onClick={() => {
                    setactive(6);
                  }}
                  className={
                    active === 6
                      ? "rounded-5 border-0 rarity_sec_btn_p px-4 btn_bg text-white ff_agnostic fs_lg fw-normal"
                      : "rounded-5 border-0 rarity_sec_btn_p px-4 btn_rarity_bg_linier text-white ff_agnostic fs_lg fw-normal"
                  }
                >
                  Head
                </button>
              </div>
              <div className="ms-4 ps-1">
                <button
                  onClick={() => {
                    setactive(7);
                  }}
                  className={
                    active === 7
                      ? "rounded-5 border-0 rarity_sec_btn_p px-4 btn_bg text-white ff_agnostic fs_lg fw-normal"
                      : "rounded-5 border-0 rarity_sec_btn_p px-4 btn_rarity_bg_linier text-white ff_agnostic fs_lg fw-normal"
                  }
                >
                  Eyes
                </button>
              </div>
            </div>
            <Row className="mt-5 pt-2">
              {RatCard.map((Raritycard) => {
                return (
                  <Col md={6} xl={4} key={Raritycard.id} className="mt-4 pt-2 pb-1">
                    <div className="rarity_card_border ">
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
                              <button className="fw-normal ff_agnostic fs_lg text-white btn_bg rarity_btn_buynow_px py_14 border-0 rounded-5">
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
          </div>
        </Container>
      </section>
    </>
  );
};

export default Rarity;

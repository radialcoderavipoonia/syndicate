import React, { useState } from "react";
import { Container } from "react-bootstrap/esm";

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
                <button  onClick={() => {
                    setactive(2);
                  }}
                  className={
                    active === 2
                      ? "rounded-5 border-0 rarity_sec_btn_p px-4 btn_bg text-white ff_agnostic fs_lg fw-normal"
                      : "rounded-5 border-0 rarity_sec_btn_p px-4 btn_rarity_bg_linier text-white ff_agnostic fs_lg fw-normal"
                  }>
                  Accessories
                </button>
              </div>
              <div className="ms-4 ps-1">
                <button  onClick={() => {
                    setactive(3);
                  }}
                  className={
                    active === 3
                      ? "rounded-5 border-0 rarity_sec_btn_p px-4 btn_bg text-white ff_agnostic fs_lg fw-normal"
                      : "rounded-5 border-0 rarity_sec_btn_p px-4 btn_rarity_bg_linier text-white ff_agnostic fs_lg fw-normal"
                  }>
                  Clothes
                </button>
              </div>
              <div className="ms-4 ps-1">
                <button  onClick={() => {
                    setactive(4);
                  }}
                  className={
                    active === 4
                      ? "rounded-5 border-0 rarity_sec_btn_p px-4 btn_bg text-white ff_agnostic fs_lg fw-normal"
                      : "rounded-5 border-0 rarity_sec_btn_p px-4 btn_rarity_bg_linier text-white ff_agnostic fs_lg fw-normal"
                  }>
                  Mouths
                </button>
              </div>
              <div className="ms-4 ps-1">
                <button  onClick={() => {
                    setactive(5);
                  }}
                  className={
                    active === 5
                      ? "rounded-5 border-0 rarity_sec_btn_p px-4 btn_bg text-white ff_agnostic fs_lg fw-normal"
                      : "rounded-5 border-0 rarity_sec_btn_p px-4 btn_rarity_bg_linier text-white ff_agnostic fs_lg fw-normal"
                  }>
                  Skins
                </button>
              </div>
              <div className="ms-4 ps-1">
                <button  onClick={() => {
                    setactive(6);
                  }}
                  className={
                    active === 6
                      ? "rounded-5 border-0 rarity_sec_btn_p px-4 btn_bg text-white ff_agnostic fs_lg fw-normal"
                      : "rounded-5 border-0 rarity_sec_btn_p px-4 btn_rarity_bg_linier text-white ff_agnostic fs_lg fw-normal"
                  }>
                  Head
                </button>
              </div>
              <div className="ms-4 ps-1">
                <button  onClick={() => {
                    setactive(7);
                  }}
                  className={
                    active === 7
                      ? "rounded-5 border-0 rarity_sec_btn_p px-4 btn_bg text-white ff_agnostic fs_lg fw-normal"
                      : "rounded-5 border-0 rarity_sec_btn_p px-4 btn_rarity_bg_linier text-white ff_agnostic fs_lg fw-normal"
                  }>
                  Eyes
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Rarity;

import React from "react";
import { Container } from "react-bootstrap";
import Royalti_tatto_1 from "../assets/images/webp/royalti_tato_1.webp";
import Royalti_tatto_2 from "../assets/images/webp/royalti_tato_2.webp";
import Royalti_tatto_3 from "../assets/images/webp/royalti_tato_3.webp";
import Box_1 from "../assets/images/webp/royality_img_left_box.webp"
import Box_2 from "../assets/images/webp/royality_img_right_box.webp"
const RoyaltyStash = () => {
  return (
    <>
      <section id="stash" className="py-5 royalty_stash_bg_img overflow-hidden mt-5">
        <Container className=" mt-5 pt-lg-5">
          <h2 className="fw-normal text-center ff_agnostic fs_8xl text-white pt-xl-4 mb-0" data-aos="fade-up" data-aos-duration="2000">
            Royalty Stash
          </h2>
          <div className="royalti_stash_linier_bg mx-auto mt-5 position-relative" data-aos="zoom-in" data-aos-duration="2000">
            <img
              className="position-absolute royalty_left_box d-none d-md-block"
              src={Box_2}
              alt="Box_1"
            />
            <img
              className="position-absolute royalty_right_box d-none d-md-block"
              src={Box_1}
              alt="Box_1"
            />
            <div className="text-center pt-4 mt-2 px-3 px-lg-5">
              <p className="ff_poppins fw-normal fs_2xl lh_174 text-white mb-0">
                We charge a 8% royalty fee for every Small Arms Syndicate NFT
                that sells on the market. 2% of that fee is stashed in a
                verifiable wallet that will be distributed back to SAS holders
                when the wallet hits 100k Zoo stashed.
              </p>
              <h3 className="fw-normal ff_agnostic fs_7xl text_color_linier mb-0 mt-2">
                Stashed Amount : 16K
              </h3>
              <div className="d-flex align-items-center justify-content-center mt-5 pt-xxl-3">
                <div className="px-2">
                  <img
                    className="w-100 royalty_dragon_1"
                    height={73}
                    width={73}
                    src={Royalti_tatto_1}
                    alt="Royalti_tatto_1"
                  />
                </div>
                <div className="px-2 d-none d-sm-block">
                  <img
                    className="w-100 royalty_dragon_2"
                    height={84}
                    width={74}
                    src={Royalti_tatto_2}
                    alt="Royalti_tatto_2"
                  />
                </div>
                <div className="px-2">
                  <img
                    className="w-100  royalty_dragon_3"
                    height={73}
                    width={74}
                    src={Royalti_tatto_3}
                    alt="Royalti_tatto_3"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default RoyaltyStash;

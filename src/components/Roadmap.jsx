import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Roadmap_dragon from "../assets/images/webp/roadmap_img.webp";
import side_circle from "../assets/images/png/side_circle_img.png"
const Roadmap = () => {
  return (
    <>
      <section id="roadmap" className="roadmap_section py-lg-5">
        <Container className="py-5 mt-xl-5">
          <h2 className="ff_agnostic text-white fs_7xl fw-normal pb-5 mb-xxl-4 text-center text-lg-start mt-xl-3"data-aos="fade-down">
            RoadMap
          </h2>
          <Row>
            <Col lg={5} data-aos="fade-right"data-aos-duration="1500" >
              <h3 className="mb-2">Phase 1</h3>
              <ul className="ps-3 mb-0">
                <li>Project Concept</li>
                <li> Official Name - Small Arms Syndicate</li>
                <li>Development of NFT art work</li>
                <li> Deployment of SAS social network</li>
                <li> Deployment of the website</li>
                <li> Wanderfuls holders SAS NFT Airdrops</li>
              </ul>
            </Col>
            <Col lg={7} data-aos="fade-left"data-aos-duration="1800">
              <h3 className="mb-2 pt-sm-3 pt-2">Phase 2</h3>
              <ul className="ps-3 mb-0">
                <li>NFT minting on OpenZoo</li>
                <li> Community development</li>
                <li>Grow Small Arms Syndicates development team</li>
                <li> Creation of smart contract for royalty sharing</li>
                <li>
                  Continue selling Small Arms Syndicate NFTs for project funding
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="py-lg-5 pt-sm-3 pt-2 pt-3 mt-xxl-3 justify-content-lg-between justify-content-center">
            <Col lg={6} data-aos="fade-right"data-aos-duration="2000" className="pb-xl-5">
              <h3 className="mb-2">Phase 3 (Funding Plans)</h3>
              <p className="ff_poppins fw-normal fs_md lh_174 mb-0 text-white pb-4">
                Phase 3 will be activated as we find new homes for our Small <span className="d-lg-block"></span>
                Arms Syndicate NFTs
              </p>
              <p className="ff_poppins fs_md fw-normal text-white mb-0 lh_174 pb-1">
                <span className="roadmap_numbers_linear fw-semibold fs_lg">
                  0%
                </span>
                - We’re broke
              </p>
              <p className="ff_poppins fs_md fw-normal text-white mb-0 lh_174 pb-1">
                <span className="roadmap_numbers_linear fw-semibold fs_lg">
                  10%
                </span>
                - We’re no longer broke
              </p>
              <p className="ff_poppins fs_md fw-normal text-white mb-0 lh_174 pb-1">
                <span className="roadmap_numbers_linear fw-semibold fs_lg">
                  20%
                </span>
                - We will begin using funds to ramp up marketing the SAS
                community. (The stashed 2% royalty for SAS holders is not part
                of these funds)
              </p>
              <p className="ff_poppins fs_md fw-normal text-white mb-0 lh_174 pb-1">
                <span className="roadmap_numbers_linear fw-semibold fs_lg">
                  40%
                </span>
                - We begin production for Small Arms Syndicate music video for
                project promotion.
              </p>
              <p className="ff_poppins fs_md fw-normal text-white mb-0 lh_174 pb-1">
                <span className="roadmap_numbers_linear fw-semibold fs_lg">
                  60%
                </span>
                - Token Development and Airdrop to Small Arms Syndicate NFT
                holders will begin.
              </p>
              <p className="ff_poppins fs_md fw-normal text-white mb-0 lh_174 pb-1">
                <span className="roadmap_numbers_linear fw-semibold fs_lg">
                  80%
                </span>
                - We begin development of Small Arms Syndicate third person
                shooter play2Earn video game.
              </p>
              <p className="ff_poppins fs_md fw-normal text-white mb-0 lh_174 pb-1">
                <span className="roadmap_numbers_linear fw-semibold fs_lg">
                  100%
                </span>
                - TBA - Stay tuned!
              </p>
            </Col>
            <Col lg={6} xl={5} sm={10} xs={11} data-aos="fade-left"data-aos-duration="2200" className="pb-xl-5">
              <img
                src={Roadmap_dragon}
                alt="dragon"
                className="w-100 mt-3 mt-lg-0 position-relative z-1"
              />
            </Col>
          </Row>
        </Container>
        <div className="position-absolute top_35 d-xxl-block d-none left_-4 circle_spin">
          <img
            height={201}
            width={201}
            src={side_circle}
            alt="side_circle_img"
          />
        </div>
        <div className="position-absolute top_35 left_-4 d-xxl-block d-none circle_ani">
          <div className="bg_side_circle"></div>
        </div>
      </section>
    </>
  );
};

export default Roadmap;

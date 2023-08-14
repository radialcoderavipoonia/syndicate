import React from"react";
import { Container } from"react-bootstrap";
import MyNav from"./MyNav";
import heroimg1 from"../assets/images/webp/hero_dragon_1.webp";
import heroimg2 from"../assets/images/webp/hero_dragon_2.webp";
import heroimg3 from"../assets/images/webp/hero_dragon_3.webp";
import heroimg4 from"../assets/images/webp/hero_dragon_4.webp";

const MyHero = () => {
  return (
    <>
      <header className="hero_bg min_vh_100_xxl d-flex flex-column position-relative overflow-hidden">
        <MyNav />
        <section className="h-100 flex-grow-1 pt-xl-5 mt-5">
          <Container className="pt-5 mt-5">
            <div className="pb-xl-0 pb-sm-5 mb-xl-0 mb-sm-5" data-aos="fade-up" data-aos-duration="2000"data-aos-delay="2500">
              <h1 className="text-center ff_agnostic fw-normal fs_8xl text-white pt-xl-5 mb-0">
                Small Arms Syndicate
              </h1>
              <div className="mw_941 mb-0 ms-auto me-auto">
                <p className="ff_roboto fs_xl fw-medium text-white text-center pb-5 pb-xl-0">
                  Small Arms Syndicate is a collection of 10,000 unique T-rex
                  Small Arms NFTs— unique digital collectibles minted on the
                  Wanchain blockchain. Your Small Arms NFT is your ticket to
                  members-only perks and is your utility token in the S.A.S
                  ecosystem.
                </p>
              </div>
            </div>
            <div className="pt-xl-4 pt-0 mt-xl-5 mt-0 d-flex flex-column justify-content-end position_absolute bottom-0 trans_70X">
              <div className="d-flex justify-content-between align-items-end pt-xl-0 pt-lg-5 pt-0 mt-xl-0 mt-lg-5 mt-0">
                <img
                  src={heroimg1}
                  alt="hero section dragon img 1"
                  className="hero_dragon1 dragon_height_width object-fit-cover ani_dragons1"
                />
                <img
                  src={heroimg2}
                  alt="hero section dragon img 2"
                  className="object-fit-cover d-none d-lg-block hero_dragon2 dragon_height_width ani_dragons2"
                />
                <img
                  src={heroimg3}
                  alt="hero section dragon img 3"
                  className="object-fit-cover d-none d-md-block hero_dragon3 dragon_height_width ani_dragons3"
                />
                <img
                  src={heroimg4}
                  alt="hero section dragon img 4"
                  className="object-fit-cover hero_dragon4 dragon_height_width ani_dragons4"
                />
              </div>
            </div>
          </Container>
        </section>
      </header>
    </>
  );
};

export default MyHero;

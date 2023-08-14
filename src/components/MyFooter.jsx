import React from "react";
import { Container } from "react-bootstrap";
import footerlogo from "../assets/images/webp/page_Logo.webp";
import twitter_icon from "../assets/images/webp/twitter_icon.webp";
import discord_icon from "../assets/images/webp/discord_icon.webp";
import boat_icon from "../assets/images/webp/boat_icon.webp";
import footer_left_drazon from "../assets/images/webp/footer_left_dragon.webp";
import footer_right_drazon from "../assets/images/webp/footer_right_dragon.webp";
import side_circle from "../assets/images/webp/side_circle_img.webp"

const MyFooter = () => {
  return (
    <>
      <section className="pt-5 mt-md-5 position-relative overflow-hidden">
        <Container
          className="pt-lg-5 mt-xl-5"
          data-aos="zoom-in-down"
          data-aos-duration="2000"
        >
          <div className="text-center pt-xxl-5">
            <a href="#">
              <img
                height={100}
                width={100}
                src={footerlogo}
                alt="footer_page_logo"
              />
            </a>
            <div className="d-flex justify-content-center align-items-center py-sm-5 py-4">
              <a href="https://twitter.com/" target="_blank">
                <img
                  height={47}
                  width={47}
                  src={twitter_icon}
                  alt="twitter_icon_footer"
                  className="mx-2 icon_hover "
                />
              </a>
              <a href="https://discord.com/ " target="_blank">
                <img
                  height={47}
                  width={47}
                  src={discord_icon}
                  alt="discord_icon_footer"
                  className="mx-2 icon_hover"
                />
              </a>
              <a href="https://www.flaticon.com/free-icons/boat" target="_blank">
                <img
                  height={47}
                  width={47}
                  src={boat_icon}
                  alt="boat_icon_footer"
                  className="mx-2 icon_hover"
                />
              </a>
            </div>
            <div className="footer_line"></div>
            <div className="pt-4 pb-3">
              <p className="text-center text-white ff_poppins fs_sm fw-normal opcity_07 mb-0">
                Copyright©Small Arms Syndicate.com
              </p>
            </div>
          </div>
        </Container>
        <div className="position-absolute bottom-0 start-0 d-none d-sm-block ani_dragons2 z-1">
          <img
            src={footer_left_drazon}
            alt="footer_left_drazon "
            className="h_w_dragon_footer"
          />
        </div>
        <div className="position-absolute bottom-0 end-0 d-none d-sm-block ani_dragons4 z-1">
          <img
            src={footer_right_drazon}
            alt="footer_right_drazon "
            className="h_w_dragon_footer"
          />
        </div>
        <div className="position-absolute bottom-0 left_-5 d-lg-block d-none circle_spin ">
          <img
            height={201}
            width={201}
            src={side_circle}
            alt="side_circle_img"
          />
        </div>
        <div className="position-absolute bottom-0 left_-5 d-lg-block d-none circle_ani ">
          <div className="bg_side_circle"></div>
        </div>
      </section>
    </>
  );
};

export default MyFooter;

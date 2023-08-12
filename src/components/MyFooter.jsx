import React from "react";
import { Container } from "react-bootstrap";
import footerlogo from "../assets/images/webp/page_Logo.webp";
import twitter_icon from "../assets/images/png/twitter_icon.png";
import discord_icon from "../assets/images/png/discord_icon.png";
import boat_icon from "../assets/images/png/boat_icon.png";
import footer_left_drazon from "../assets/images/webp/footer_left_dragon.webp";
import footer_right_drazon from "../assets/images/webp/footer_right_dragon.webp";

const MyFooter = () => {
  return (
    <>
      <section className="pt-5 position-relative overflow-hidden">
        <Container className="pt-5">
          <div className="text-center">
            <a href="#">
              <img
                height={149}
                width={149}
                src={footerlogo}
                alt="footer page logo"
              />
            </a>
            <div className="d-flex justify-content-center align-items-center py-5">
              <a href="https://twitter.com/">
                <img
                  height={47}
                  width={47}
                  src={twitter_icon}
                  alt="twitter_icon_footer"
                  className="mx-2 icon_hover"
                />
              </a>
              <a href="https://discord.com/">
                <img
                  height={47}
                  width={47}
                  src={discord_icon}
                  alt="discord_icon_footer"
                  className="mx-2 icon_hover"
                />
              </a>
              <a href="">
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
            <div className="py-4">
              <p className="text-center text-white ff_poppins fs_sm fw-normal opcity_07">
                Copyright©Small Arms Syndicate.com
              </p>
            </div>
          </div>
        </Container>
        <div className="position-absolute bottom-0 start-0 d-none d-sm-block ani_dragons2">
          <img
            src={footer_left_drazon}
            alt="footer_left_drazon "
            className="h_w_dragon_footer"
          />
        </div>
        <div className="position-absolute bottom-0 end-0 d-none d-sm-block ani_dragons4">
          <img
            src={footer_right_drazon}
            alt="footer_right_drazon "
            className="h_w_dragon_footer"
          />
        </div>
     
      </section>
    </>
  );
};

export default MyFooter;

import React from "react";
import { Container } from "react-bootstrap";
import MyNav from "./MyNav";

const MyHero = () => {
  return (
    <>
      <header className="hero_bg min-vh-100 d-flex flex-column">
        <MyNav />
        <section className="py-5 my-5 h-100 f-grow-1">
          <Container className="py-5 my-5">
            <h1 className="text-center ff_agnostic fw-normal fs_8xl text-white ">Small Arms Syndicate</h1>
          </Container>
        </section>
      </header>
    </>
  );
};

export default MyHero;

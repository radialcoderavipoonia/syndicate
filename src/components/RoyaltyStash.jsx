import React from "react";
import { Container } from "react-bootstrap";

const RoyaltyStash = () => {
  return (
    <>
      <section className="py-5 royalty_stash_bg_img">
        <Container className=" mt-5 pt-lg-5">
              <h2 className="fw-normal text-center ff_agnostic fs_8xl text-white pt-xl-4">Royalty Stash</h2>
          <div className="royalti_stash_linier_bg mx-auto mt-5">
            <div className="text-center pt-4 mt-2 px-5">
              <p className="ff_poppins fw-normal fs_2xl lh_174 text-white mb-0">We charge a 8% royalty fee for every Small Arms Syndicate NFT that sells on the market. 2% of that fee is stashed in a verifiable wallet that will be distributed back to SAS holders when the wallet hits 100k Zoo stashed.</p>
              <h3 className="fw-normal ff_agnostic fs_7xl text_color_linier mb-0 mt-2">Stashed Amount : 16K</h3>
          </div>
        </div>
        </Container>
      </section>
    </>
  );
};

export default RoyaltyStash;

import { React, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Nav } from "react-bootstrap";
import nav_logo from "../assets/images/webp/page_Logo.webp";

const MyNav = () => {
  const [Show, setShow] = useState(true);
  function showNav() {
    setShow(
      !Show,
      document.getElementById("nav_bar_animation").classList.toggle("opennav"),
      document.getElementById("button_ani").classList.toggle("opennav"),
      document.getElementById("dis_none").classList.toggle("logo_not_visible")
    );
  }
  if (!Show) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <Nav className=" bg-black position-fixed top-0 w-100 z-3">
        <div className="container d-flex justify-content-between align-items-center py-1">
          <div id="dis_none">
            <a href="#">
              <img
                height={92}
                width={92}
                src={nav_logo}
                alt="page logo"
                className="w-100"
              />
            </a>
          </div>
          <div className="d-lg-flex align-items-center d-none d-lg-block">
            <ul className="d-flex justify-content-between list-unstyled align-items-center mb-0">
              <li className="pe-xl-4 ff_agnostic fw-normal fs_md mb-0">
                <a href="#about" className="text-white">
                  BUY A SAS
                </a>
              </li>
              <li className="ps-2 ms-1 pe-xl-4 ff_agnostic fw-normal fs_md mb-0">
                <a href="#feature" className="text-white">
                  RoadMap
                </a>
              </li>
              <li className="ps-2 ms-1 pe-xl-4 ff_agnostic fw-normal fs_md mb-0">
                <a href="#plans" className="text-white">
                  team
                </a>
              </li>
              <li className="ps-2 ms-1 pe-xl-4 ff_agnostic fw-normal fs_md mb-0">
                <a href="#support" className="text-white">
                  Rarity
                </a>
              </li>
              <li className="ps-2 ms-1 pe-xl-4 ff_agnostic fw-normal fs_md mb-0">
                <a href="#faqs" className="text-white">
                  Stash
                </a>
              </li>
              <li className="ps-2 ms-1 pe-xxl-4 ff_agnostic fw-normal fs_md mb-0">
                <a href="#faqs" className="text-white">
                  Syndicate Game
                </a>
              </li>
            </ul>
            <div className="ps-5 ms-xxl-1">
              <button className="text-white btn_bg ff_agnostic fw-normal fs_lg border-0 py_14 px_20 rounded-5">
                connect wallet
              </button>
            </div>
          </div>

          <div
            className="d-flex justify-content-between flex-column d-lg-none "
            onClick={showNav}
          >
            <h2 className="position-relative text-white">
              {Show ? <HiMenuAlt1 /> : <AiOutlineClose />}
            </h2>
          </div>
          <div className={`d-flex sm_nav d-lg-none ${Show ? "" : "start-0"}`}>
            <ul
              id="nav_bar_animation"
              className="d-flex justify-content-between list-unstyled flex-column gap-3 align-items-center mb-0 ps-0 nav_animation"
            >
              <li className="ff_agnostic fw-normal fs_md mb-0">
                <a href="#about" className="text-white">
                  BUY A SAS
                </a>
              </li>
              <li className="ff_agnostic fw-normal fs_md mb-0">
                <a href="#feature" className="text-white">
                  RoadMap
                </a>
              </li>
              <li className="ff_agnostic fw-normal fs_md mb-0">
                <a href="#plans" className="text-white">
                  team
                </a>
              </li>
              <li className="ff_agnostic fw-normal fs_md mb-0">
                <a href="#support" className="text-white">
                  Rarity
                </a>
              </li>
              <li className="ff_agnostic fw-normal fs_md mb-0">
                <a href="#faqs" className="text-white">
                  Stash
                </a>
              </li>
              <li className="ff_agnostic fw-normal fs_md mb-0">
                <a href="#faqs" className="text-white">
                  Syndicate Game
                </a>
              </li>
            </ul>
            <div
              id="button_ani"
              className="ms-auto me-auto mt-3 button_animation"
            >
              <button className="text-white btn_bg ff_agnostic fw-normal fs_lg border-0 py_14 px_20 rounded-5">
                connect wallet
              </button>
            </div>
          </div>
        </div>
      </Nav>
    </>
  );
};

export default MyNav;

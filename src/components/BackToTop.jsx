import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const back = () => {
    document.documentElement.scrollTop = 0;
  };
  const [First, setFirst] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        setFirst(true);
      } else {
        setFirst(false);
      }
    });
  }, []);
  return (
    <>
      <section>
        {First ? (
          <div className="position-fixed z_index_50 backtotop_icon c_pointer">
            <div onClick={back} className="icon">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.4297 6.42969L20.4997 12.4997L14.4297 18.5697"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterLimit="10"
                  strokeLinecap="round"
                  strokeLineJoin="round"
                />
                <path
                  d="M3.5 12.5H20.33"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLineJoin="round"
                />
              </svg>
            </div>
          </div>
        ) : (
          ""
        )}
      </section>
    </>
  );
};

export default BackToTop;

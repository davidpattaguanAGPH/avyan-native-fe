import React from "react";
import { Link } from "react-router-dom";

import playVideo from "../../../assets/img/Vector-2.png";
import AIALogoWhite from "../../../assets/img/newlogo 1.png";

import "./styles.css";

const LandingPage = () => {
  return (
    <>
      <div className="mt-16">
        <div className="max-w-screen-2xl px-9 md:px-32 mx-auto">
          <section className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
            <div className="xl:w-6/12 flex flex-col lg:text-left xl:px-3">
              <img
                className="object-scale-down h-10 w-10 mb-14 sm:mb-10 md:mb-15 lg:mb-5 xl:mb-10 2xl:mb-24"
                src={AIALogoWhite}
              ></img>
              <h1 className="text-white text-6xl sm:text-6xl md:text-7xl mb-5 md:mb-8 tracking-wide md:mt-14 xl:mt-10 2xl:mt-16 font-aiaregular">
                A life well-lived starts with you
              </h1>
              <p className="lg:w-11/12 text-white xl:text-lg  mb-8 text-left font-aiaregular ">
                Unlock a better you. We want to help you live a life well-lived.
                By taking the test, you'll unlock parts of you that can help you
                become a better version of yourself.
              </p>
              <div className="flex flex-col  md:items-center  sm:flex-row  lg:justify-start gap-2.5">
                <Link
                  to="/test"
                  className=" focus-visible:ring ring-indigo-300 text-black active:text-gray-700 text-sm md:text-base rounded-lg outline-none transition duration-100 px-8 py-3 flex justify-evenly bg-white  items-center gap-3 font-aiaregular"
                >
                  Unlock Better You
                </Link>

                <Link
                  to="/hero-video"
                  className=" focus-visible:ring ring-indigo-300 text-white active:text-gray-700 text-sm md:text-base rounded-lg outline-none transition duration-100 px-7 py-2 flex justify-center sm:justify-evenly bg-black font-aiaregular  sm:bg-transparent items-center gap-3"
                >
                  <img src={playVideo} alt="" /> Play Video
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row  lg:justify-start gap-2.5 pt-5 xl:text-lg">
                <p className="text-white xl:text-lg ">
                  Already taken the test?{" "}
                  <Link to="login" className="text-white underline">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <video autoPlay loop muted id="video">
        <source
          src="https://uploads-ssl.webflow.com/631812e04501c165ff504742/63181906d2ccf7fdd49f7a6a_hero%20section_1-transcode.webm"
          type="video/mp4"
        />
      </video>
    </>
  );
};

export default LandingPage;

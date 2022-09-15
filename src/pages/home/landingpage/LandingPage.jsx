import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import playVideo from "../../../assets/img/Vector-2.png";
import AIALogoWhite from "../../../assets/img/newlogo 1.png";

const LandingPage = () => {
  return (
    <div>
      <video autoPlay loop muted id="video">
        <source
          src="https://uploads-ssl.webflow.com/631812e04501c165ff504742/63181906d2ccf7fdd49f7a6a_hero%20section_1-transcode.webm"
          type="video/mp4"
        />
      </video>
      <div class=" pb-6 pt-9 sm:pb-8 lg:pb-12 lg:pt-9">
        <div class="max-w-screen-2xl px-9 md:px-32 mx-auto">
          <section class="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
            <div class="xl:w-6/12 flex flex-col sm:text-center lg:text-left xl:px-3">
              <img
                className="object-scale-down h-10 w-10 mb-24"
                src={AIALogoWhite}
              ></img>
              <h1 class="text-white text-6xl sm:text-5xl md:text-7xl mb-5 md:mb-8 tracking-wide font-aiaregular">
                A life well-lived starts with you
              </h1>
              <p class="lg:w-11/12 text-white xl:text-lg leading-relaxed mb-8 md:mb-5 text-left font-aiaregular font-thin">
                Unlock a better you. We want to help you live a life well-lived.
                By taking the test, you'll unlock parts of you that can help you
                become a better version of yourself.
              </p>
              <div class="flex  items-center sm:flex-row sm:justify-center lg:justify-start gap-2.5">
                <a
                  href="#"
                  class="inline-block bg-white hover:bg-white hover:text-black  focus-visible:ring ring-indigo-300 text-black text-xs md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3  font-aiaregular"
                >
                  Unlock the Better You
                </a>

                <Link
                  to="/hero-video"
                  class="inline-block  focus-visible:ring ring-indigo-300 text-white active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3 flex justify-evenly items-center gap-3"
                >
                  <img src={playVideo} alt="" /> Play Video
                </Link>
              </div>
              <div class="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5 pt-5 xl:text-lg">
                <p className="text-white xl:text-lg font-light font-aiaregular">
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
    </div>
  );
};

export default LandingPage;

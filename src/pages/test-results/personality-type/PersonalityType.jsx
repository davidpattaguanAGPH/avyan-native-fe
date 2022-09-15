import React from "react";
import PTACTIVE from "../../../assets/img/ptACTIVE.png";

const PersonalityType = () => {
  return (
    <>
      <div class=" mt-10">
        <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
          <section class="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
            <div class="xl:w-7/12 lg:h-auto  rounded-lg">
              <img
                src={PTACTIVE}
                loading="lazy"
                alt="Photo by Fakurian Design"
                class=" object-center"
              />
            </div>
            <div class="xl:w-5/12 flex flex-col justify-center sm:text-center lg:text-left lg:py-6 xl:py-6">
              <p class=" md:text-lg xl:text-md font-regular  mb-4 md:mb-3 text-primary-black">
                Your personality Type is
              </p>

              <h1 class="text-black-800 text-4xl sm:text-5xl md:text-5xl font-semibold mb-4 md:mb-7 text-primary-black">
                The Active
              </h1>

              <p class="lg:w-4/5 text-primary-black xl:text-md leading-relaxed mb-8 md:mb-5">
                For the current you, life is all about exploring the wonders of
                parenthood. You love the moments you share with budding family
                and can’t wait to discover more together. You’re someone who’s
                imaginative and always on-the-go.
              </p>
              <p class="lg:w-4/5 text-primary-black xl:text-md leading-relaxed mb-8 md:mb-12">
                People close to you will never see you sitting still and just
                waiting for things to happen. You’re likely to invite people out
                at 3am for an early breakfast or book flights whenever there’s a
                seat sale. You’re brave, rarely anxious, and not easily
                influenced by people as you tend to go on your own flow.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PersonalityType;

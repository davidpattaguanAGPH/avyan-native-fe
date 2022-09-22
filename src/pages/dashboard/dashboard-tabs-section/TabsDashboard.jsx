import React from "react";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const TabsDashboard = () => {
  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

  return (
    <div className="w-full  px-2 py-16 sm:px-0 max-w-screen-xl mx-auto">
      <Tab.Group>
        <Tab.List className="flex space-x-1 ">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-48  py-2.5 text-sm font-medium leading-5  text-white  rounded-t-md",

                  selected
                    ? "bg-primary-red text-gray-400"
                    : "text-black hover:bg-white/[0.12]  rounded-t-md bg-primary-gray "
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div className="bg-primary-red h-auto">
              <div className="grid grid-cols-2 relative">
                <div className="absolute bottom-0 left-0">
                  <svg
                    width="147"
                    height="287"
                    viewBox="0 0 147 287"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.4">
                      <path
                        d="M-12.5236 19.3886L-40.0994 192.127L6.70321 270.512L126.539 305.731C127.166 305.915 127.427 305.202 127.033 304.382L-9.33915 20.3196C-10.2922 18.3345 -12.2633 17.7582 -12.5236 19.3886Z"
                        fill="#FADEE5"
                      />
                      <path
                        opacity="0.7"
                        d="M124.436 319.474L112.165 183.506C112.007 181.751 110.3 179.979 109.212 180.441L-20.5785 235.63C-21.3735 235.968 -21.6869 237.054 -21.3791 238.404L3.19153 346.18C3.72707 348.529 5.83045 350.587 7.3217 350.22L123.336 321.691C124.122 321.498 124.542 320.651 124.436 319.474Z"
                        fill="#EF8187"
                      />
                      <path
                        d="M-47.7325 217.596L117.551 337.991C119.812 339.637 120.851 344.999 119.383 347.44L28.4813 498.553C26.7022 501.51 23.4254 499.776 21.7396 494.984L-53.3888 281.446C-54.4829 278.336 -55.0089 274.859 -54.8643 271.692L-52.6124 222.35C-52.4128 217.976 -50.1875 215.808 -47.7325 217.596Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </div>
                <div className="flex flex-col mt-20 w-8/12 mx-auto ">
                  <div className="text-2xl text-white font-aiamedium mb-2">
                    On Health & Wellness
                  </div>
                  <div className="text-white font-aiaregular mb-5">
                    How can we come together? That is the question of our era.
                    It applies across domains, across cultures, across the
                    world. Our planet and our society have proven themselves
                    more fragile than we believed, and the past year..
                  </div>
                  <div>
                    <Link
                      to="/hero-video"
                      className=" focus-visible:ring ring-indigo-300 text-black active:text-gray-700 text-sm md:text-base rounded-lg outline-none transition duration-100 w-40 py-3 flex justify-evenly bg-white  items-center gap-3 font-aiaregular"
                    >
                      Unlock Better You
                    </Link>
                  </div>
                </div>

                <div>
                  <img
                    src="https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    alt=""
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="bg-primary-red h-auto">
              <div className="grid grid-cols-2 relative">
                <div className="absolute bottom-0 left-0">
                  <svg
                    width="147"
                    height="287"
                    viewBox="0 0 147 287"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.4">
                      <path
                        d="M-12.5236 19.3886L-40.0994 192.127L6.70321 270.512L126.539 305.731C127.166 305.915 127.427 305.202 127.033 304.382L-9.33915 20.3196C-10.2922 18.3345 -12.2633 17.7582 -12.5236 19.3886Z"
                        fill="#FADEE5"
                      />
                      <path
                        opacity="0.7"
                        d="M124.436 319.474L112.165 183.506C112.007 181.751 110.3 179.979 109.212 180.441L-20.5785 235.63C-21.3735 235.968 -21.6869 237.054 -21.3791 238.404L3.19153 346.18C3.72707 348.529 5.83045 350.587 7.3217 350.22L123.336 321.691C124.122 321.498 124.542 320.651 124.436 319.474Z"
                        fill="#EF8187"
                      />
                      <path
                        d="M-47.7325 217.596L117.551 337.991C119.812 339.637 120.851 344.999 119.383 347.44L28.4813 498.553C26.7022 501.51 23.4254 499.776 21.7396 494.984L-53.3888 281.446C-54.4829 278.336 -55.0089 274.859 -54.8643 271.692L-52.6124 222.35C-52.4128 217.976 -50.1875 215.808 -47.7325 217.596Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </div>
                <div className="flex flex-col mt-20 w-8/12 mx-auto ">
                  <div className="text-2xl text-white font-aiamedium mb-2">
                    On Health & Wellness
                  </div>
                  <div className="text-white font-aiaregular mb-5">
                    How can we come together? That is the question of our era.
                    It applies across domains, across cultures, across the
                    world. Our planet and our society have proven themselves
                    more fragile than we believed, and the past year..
                  </div>
                  <div>
                    <Link
                      to="/hero-video"
                      className=" focus-visible:ring ring-indigo-300 text-black active:text-gray-700 text-sm md:text-base rounded-lg outline-none transition duration-100 w-40 py-3 flex justify-evenly bg-white  items-center gap-3 font-aiaregular"
                    >
                      Unlock Better You
                    </Link>
                  </div>
                </div>

                <div>
                  <img
                    src="https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    alt=""
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="bg-primary-red h-auto">
              <div className="grid grid-cols-2 relative">
                <div className="absolute bottom-0 left-0">
                  <svg
                    width="147"
                    height="287"
                    viewBox="0 0 147 287"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.4">
                      <path
                        d="M-12.5236 19.3886L-40.0994 192.127L6.70321 270.512L126.539 305.731C127.166 305.915 127.427 305.202 127.033 304.382L-9.33915 20.3196C-10.2922 18.3345 -12.2633 17.7582 -12.5236 19.3886Z"
                        fill="#FADEE5"
                      />
                      <path
                        opacity="0.7"
                        d="M124.436 319.474L112.165 183.506C112.007 181.751 110.3 179.979 109.212 180.441L-20.5785 235.63C-21.3735 235.968 -21.6869 237.054 -21.3791 238.404L3.19153 346.18C3.72707 348.529 5.83045 350.587 7.3217 350.22L123.336 321.691C124.122 321.498 124.542 320.651 124.436 319.474Z"
                        fill="#EF8187"
                      />
                      <path
                        d="M-47.7325 217.596L117.551 337.991C119.812 339.637 120.851 344.999 119.383 347.44L28.4813 498.553C26.7022 501.51 23.4254 499.776 21.7396 494.984L-53.3888 281.446C-54.4829 278.336 -55.0089 274.859 -54.8643 271.692L-52.6124 222.35C-52.4128 217.976 -50.1875 215.808 -47.7325 217.596Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </div>
                <div className="flex flex-col mt-20 w-8/12 mx-auto ">
                  <div className="text-2xl text-white font-aiamedium mb-2">
                    On Health & Wellness
                  </div>
                  <div className="text-white font-aiaregular mb-5">
                    How can we come together? That is the question of our era.
                    It applies across domains, across cultures, across the
                    world. Our planet and our society have proven themselves
                    more fragile than we believed, and the past year..
                  </div>
                  <div>
                    <Link
                      to="/hero-video"
                      className=" focus-visible:ring ring-indigo-300 text-black active:text-gray-700 text-sm md:text-base rounded-lg outline-none transition duration-100 w-40 py-3 flex justify-evenly bg-white  items-center gap-3 font-aiaregular"
                    >
                      Unlock Better You
                    </Link>
                  </div>
                </div>

                <div>
                  <img
                    src="https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    alt=""
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default TabsDashboard;

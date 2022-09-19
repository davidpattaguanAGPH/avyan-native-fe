/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function ProfileCreate({ isModalOpen, setIsModalOpen }) {
  const interests = [
    {
      id: 1,
      name: "Fitness",
      imageUrl:
        "https://images.unsplash.com/photo-1627483298606-cf54c61779a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      name: "Technology",
      imageUrl:
        "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    },
    {
      id: 3,
      name: "Sports",
      imageUrl:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 4,
      name: "Literary",
      imageUrl:
        "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 4,
      name: "Literary",
      imageUrl:
        "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 4,
      name: "Literary",
      imageUrl:
        "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 4,
      name: "Literary",
      imageUrl:
        "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 4,
      name: "Literary",
      imageUrl:
        "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 4,
      name: "Literary",
      imageUrl:
        "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
  ];

  useEffect(() => {
    setOpen(isModalOpen);
  }, [isModalOpen]);

  const [open, setOpen] = useState(isModalOpen);

  const [count, setCount] = useState(0);

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 font-aiaregular"
        initialFocus={cancelButtonRef}
        onClose={setIsModalOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg  bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
                <div className="bg-white flex justify-end px-4 pt-2">
                  <div>x</div>
                </div>
                <div className="bg-white px-4 pt-2 text-2xl text-center font-bold text-black">
                  Tell Us What You're Interested In
                </div>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <ul class="grid gap-3 w-full grid-cols-2 md:grid-cols-3  overflow-auto no-scrollbar">
                    {interests.map((interest) => {
                      return (
                        <li className="relative rounded-xl">
                          <input
                            type="checkbox"
                            id={interest.name}
                            value={interest.name}
                            class=" peer absolute right-2 top-2 p-10"
                            name={interest.name}
                            required=""
                          />
                          <div className="invisible peer-checked:visible text-white z-10 absolute right-2 top-1">
                            X
                          </div>

                          <label
                            for={interest.name}
                            class="flex rounded-xl  w-full  bg-white  cursor-pointer   hover:bg-gray-50  peer-checked:brightness-50 brightness-75  peer-checked:border-1 border-black peer-checked:p-1"
                          >
                            <div class="group flex rounded-xl  justify-end items-end bg-gray-100 overflow-hidden  shadow-lg relative">
                              <img
                                src={interest.imageUrl}
                                loading="lazy"
                                alt="Photo by Lorenzo Herrera"
                                class="h-36 object-cover inset-0 group-hover:scale-110 transition duration-200"
                              ></img>
                            </div>
                          </label>
                          <span class=" text-white z-20 text-xs md:text-sm font-bold  absolute bottom-0 p-3 ">
                            {interest.name}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="bg-gray-50 w-full py-3 px-5">
                  {count == 0 ? (
                    <>
                      <button
                        disabled
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-primary-red px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 "
                        onClick={() => setOpen(false)}
                      >
                        Pick 5 More
                      </button>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

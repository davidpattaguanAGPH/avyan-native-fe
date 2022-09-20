import React from "react";

const CustomCheckBox = ({
  id,
  type,
  name,
  imageUrl,
  handleClick,
  isChecked,
}) => {
  return (
    <>
      <li className="relative rounded-xl">
        <input
          type={type}
          id={name}
          value={name}
          class=" peer absolute right-2 top-2 p-10"
          name={name}
          required=""
          onChange={handleClick}
          checked={isChecked}
        />
        <div className="invisible peer-checked:visible text-white z-10 absolute right-2 top-1">
          X
        </div>

        <label
          for={name}
          class="flex rounded-xl  w-full  bg-white  cursor-pointer   hover:bg-gray-50  peer-checked:brightness-50 brightness-75  peer-checked:border-1 border-black peer-checked:p-1"
        >
          <div class="group flex rounded-xl  justify-end items-end bg-gray-100 overflow-hidden  shadow-lg relative">
            <img
              src={imageUrl}
              loading="lazy"
              alt="Photo by Lorenzo Herrera"
              class="h-36 object-cover inset-0 group-hover:scale-110 transition duration-200"
            ></img>
          </div>
        </label>
        <span class=" text-white z-20 text-xs md:text-sm font-bold  absolute bottom-0 p-3 ">
          {name}
        </span>
      </li>
    </>
  );
};

export default CustomCheckBox;

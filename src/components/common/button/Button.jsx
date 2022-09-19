import React from "react";

//-------------------------------------------------------------

const ButtonType = {
  primary:
    "inline-block bg-white hover:bg-white hover:text-black  focus-visible:ring ring-indigo-300 text-black text-xs md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3  font-aiaregular",
  secondary:
    "inline-block bg-primary-red text-white hover:bg-white hover:text-black  focus-visible:ring ring-indigo-300 text-xs md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3  font-aiaregular",
  basic: "bg-white hover:bg-gray-700 text-gray-700 font-bold",
  delete: "bg-red-300 hover:bg-red-500 text-white font-bold",
};

const ButtonSize = {
  sm: "py-2 px-4 text-xs",
  lg: "py-3 px-6 text-lg",
};
//-------------------------------------------------------------

const Button = ({ size, type, children, onClick }) => {
  const classNames =
    ButtonType[type] + " " + ButtonSize[size] + "font-aiaregular";

  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

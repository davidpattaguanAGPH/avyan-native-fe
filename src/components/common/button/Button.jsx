import React from "react";

//-------------------------------------------------------------

const ButtonType = {
  primary:
    "inline-block bg-white hover:bg-white hover:text-black  focus-visible:ring ring-indigo-300 text-black text-xs md:text-base font-medium text-center rounded-lg outline-none transition duration-100 px-full sm:px-10 py-3  font-aiaregular",
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

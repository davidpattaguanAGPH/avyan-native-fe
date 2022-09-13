import React from "react";

//-------------------------------------------------------------

const InputVariant = {
  contained: "bg-blue-500 hover:bg-blue-700 text-white font-bold rounded",
  float: "bg-yellow-500 hover:bg-blue-700 text-white font-bold rounded",
};

const InputSize = {
  sm: "py-2 px-4 text-xs",
  lg: "py-3 px-6 text-lg",
};

const InputDisabled = {
  sm: "py-2 px-4 text-xs",
  lg: "py-3 px-6 text-lg",
};

//-------------------------------------------------------------

const InputField = ({ onChange, name, label, required, disabled }) => {
  return (
    <>
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">
        {label}
      </label>
      <input
        type="email"
        id="email"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="name@flowbite.com"
        required={required}
        onChange
        disabled={disabled}
      ></input>
    </>
  );
};

export default InputField;

import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={` py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]  animate-fade animate-once animate-duration-[1100ms] animate-delay-100 animate-ease-in`}
    >
      Get started
    </button>
  );
};

export default Button;


// animate-fade animate-once animate-duration-[1100ms] animate-delay-100 animate-ease-in
import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`animate-ping py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
    >
      Get started
    </button>
  );
};

export default Button;

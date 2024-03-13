import React from "react";

const Button = ({styles}) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-purple-950 from-emerald-400 text-primary bg-gradient-to-b rounded-[10px] outline-none ${styles} shadow-md hover:from-emerald-500 dark:from-emerald-400 dark:text-purple-400`}
    >
      Get Started
    </button>
  );
};

export default Button;

import React from "react";

const Button = ({styles}) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-purple-950 from-teal-400 text-primary bg-gradient-to-b rounded-[10px] outline-none ${styles} shadow-md hover:from-teal-500 dark:from-teal-400 dark:text-purple-100 dark:shadow-teal-100 dark:shadow-sm`}
    >
      Get Started
    </button>
  );
};

export default Button;

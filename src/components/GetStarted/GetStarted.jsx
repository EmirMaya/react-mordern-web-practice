import React from "react";
import styles from "../../style";
import { arrowUp } from "../../assets";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-gradient-to-r p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-purple-700 w-full h-full rounded-full hover:border-4 hover:border-emerald-400 `}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[22px] leading-[23.4px]">
            <span className="text-emerald-400">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow-up"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>
        <p className="font-poppins font-medium text-[22px] leading-[23.4px]">
          <span className="text-emerald-400 ">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;

import React from "react";
import styles from "../../style";
import { stats } from "../../constants";

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex-1 flex justify-start items-center flex-row m-3"
        >
          <h4 className="font-poppins font-semibold xs:text-[41px text-[31px] xs:leading-[53-px] leading-[43px] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[21px] text-[15px] xs:leading-[26px] leading-[21px] text-sky-300 uppercase ml-2 mt-2">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;

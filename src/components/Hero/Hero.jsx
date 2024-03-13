import styles from "../../style";
import { discount, robot } from "../../assets";
import GetStarted from "../GetStarted/GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 md:${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 md:mx-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4  bg-purple-700 rounded-[10px] mb-2 shadow-lg dark:bg-purple-900 ">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} font-semibold ml-2`}>
            <span className="text-white">20%</span> Discount for{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full sm:mb-0">
          <h1 className="flex-1 font-poppins font-semibold sm:text-[72px] text-[52px] text-emerald-400 sm:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-emrald-500">Generation</span>
          </h1>
          <div className="sm:flex sm:m-0 hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold sm:text-[68px] text-[52px] text-purple-700 sm:leading-[100.8px] leading-[75px] w-full">
          Payment Method.
        </h1>
        <p className={`${styles.paragraphGray} max-w-[470px] my-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 rounded-full bg-gradient-to-b from-violet-600 dark:from-emerald-100" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full  bg-gradient-to-b from-violet-700 bottom-40 dark:from-emerald-300" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 rounded-full  bg-gradient-to-b from-violet-500 dark:from-emerald-300" />
        {/* gradient end */}
      </div>

      <div className={`sm:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;

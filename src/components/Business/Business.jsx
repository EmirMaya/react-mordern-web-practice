import { features } from "../../constants";
import styles, { layout } from "../../style";
import Button from "../Button/Button";
import { Fade } from "react-awesome-reveal";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } hover:bg-gradient-to-b from-purple-400 dark:from-purple-950`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-purple-800 text-[18px] leading-[23.4px] mb-1 dark:text-purple-700">
        {title}
      </h4>
      <p className="font-poppins font-normal text-[16px] leading-[24px] text-gray-700 dark:text-gray-400">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the business, <br className="sm:block hidden" />
        we'll handle the money.
      </h2>
      <p className={`${styles.paragraphGray} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>
      <Button styles={`mt-10`} />
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      <Fade cascade>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </Fade>
    </div>
  </section>
);

export default Business;

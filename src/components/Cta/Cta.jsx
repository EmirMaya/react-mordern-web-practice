import styles from "../../style";
import Button from "../Button/Button";

const Cta = () => (
  <section
    className={`${styles.flexStart} ${styles.marginY} ${styles.padding} flex-col md:w-1/2 rounded-[20px]`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-gray-600`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 md:ml-0 sm:mt-0 mt-10 md:mt-5`}>
      <Button />
    </div>
  </section>
);

export default Cta;

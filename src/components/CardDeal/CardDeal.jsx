import { card } from "../../assets";
import styles, { layout } from "../../style";
import Button from "../Button/Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p
        className={`${styles.paragraphGray} max-w-[470px] mt-5 text-purple-950`}
      >
        Unlock exclusive savings by finding the perfect card deal in just a few
        simple steps. Maximize your benefits with ease!
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;

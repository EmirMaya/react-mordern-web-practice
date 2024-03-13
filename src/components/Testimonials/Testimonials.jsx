import { feedback } from "../../constants";
import styles from "../../style";
import FeedbackCard from "../FeedbackCard/FeedbackCard";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className="absolute z-[0] w-3/5 h-3/5 -left-1/2 rounded-full emerald-gradient bottom-40" />
    <div className="absolute z-[0] w-3/5 h-3/5 -right-1/2 rounded-full emerald-gradient bottom-40" />

    <div className="w-full flex justify-between items-center flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={`${styles.heading2} w-full text-left md:text-center`}>
        Whate People are <br className="sm:block hidden"/> saying about us
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} w-full text-purple-950 text-left md:text-center`}>
            Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>
    </div>

    <div className="flex flex-col md:flex-row md:justify-start justify-center  w-full relative z-[1]">
        {feedback.map((card)=> <FeedbackCard key={card.id} {...card}/>)}
    </div>
  
  </section>
);


export default Testimonials;

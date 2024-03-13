import { apple, bill, google } from "../../assets";
import styles, { layout } from "../../style";

const Billing = () => (
  <section id="product" className={`${layout.sectionReverse} relative`}>
    <div className="absolute z-[0] w-3/5 h-3/5 -left-1/2 rounded-full emerald-gradient bottom-40" />
    <div className="absolute z-[0] w-3/5 h-3/5 -right-1/2 rounded-full emerald-gradient bottom-40" />
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-full h-full relative z-[5]" />
    </div>

    <div className={`${layout.sectionInfo}`}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-purple-950`}>
        Streamline your financial processes with our intuitive billing and
        invoicing solutions. Simplify tracking, managing, and sending invoices
        effortlessly.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="google_play"
          className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="google_play"
          className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Billing;

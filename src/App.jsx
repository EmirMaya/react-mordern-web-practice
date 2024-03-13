import Billing from "./components/Billing/Billing";
import Business from "./components/Business/Business";
import Cta from "./components/Cta/Cta";
import CardDeal from "./components/CardDeal/CardDeal";
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Stats from "./components/Stats/Stats";
import Testimonials from "./components/Testimonials/Testimonials";
import styles from "./style";

const App = () => (
  <div className="overflow-hidden w-full bg-slate-100">
    <div className={` ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} bg-purple-100 w-full px-6 shadow-md fixed z-50 top-0`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-slate-100 ${styles.marginY} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} mt-4`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-slate-100 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <Cta />
      
      </div>
    </div>
    <Footer />
  </div>
);

export default App;

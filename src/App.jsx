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
  <div className="bg-slate-950 overflow-hidden w-full">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-purple-950 ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-purple-950 ${styles.paddingX} ${styles.flexCenter}`}>
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

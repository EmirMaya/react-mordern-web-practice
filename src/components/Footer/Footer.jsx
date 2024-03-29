import styles from "../../style";
import { logo } from "../../assets";
import { footerLinks, socialMedia } from "../../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col px-6 md:px-10 bg-violet-500 border-t border-t-sky-100`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-[1] flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt="hoobank"
            className="w-[266px] h-[72.14px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[312px] text-teal-100`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.title}
              className="flex flex-col sm:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-purple-950">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-base text-gray-100 hover:text-violet-300 cursor-pointer 
                ${index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"} `}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row md:mt-0 my-4">
          {socialMedia.map((social, index)=>(
            <img 
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer  ${
              index!== socialMedia.length - 1? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      <div className="w-full flex justify-center items-center md: flex-row col pt-6 border-t border-t-violet-300">
        <p className="font-poppins font-normal text-center text-sm md:text-md text-[18px] leading-[27px] text-white ">
          Copyright Ⓒ 2024 HooBank. All Rights Reserved.
        </p>
        
      </div>
    </section>
  );
};

export default Footer;

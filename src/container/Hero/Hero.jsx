import React from "react";
import "./Hero.scss";
import chromeLogo from "../../assets/chrome_logo.png";
import heroRockets from "../../assets/hero_rockets.png";
import { ButtonHero } from "../../components";
import { Wrapper } from "../../components";

const Hero = () => {
  return (
    <Wrapper className="heroWrapper">
      <div
        className="heroImage"
        style={{
          //border: "2px solid blue",
          display: "flex",
          height: "45.875rem",
          justifyContent: "center",
          alignItems: "center",
          flex: "1 0 0",
          backgroundImage: `url(${heroRockets})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        className="heroText"
        style={{
          //border: "2px solid green",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          flex: "1 0 0",
          alignSelf: "stretch",
        }}
      >
        <h1
          style={{
            color: "var(--primary-color-header)",
            fontFamily: "var(--font-base)",
            fontSize: "3.56rem",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "120%",
            letterSpacing: "0.036rem",
            textTransform: "none",
            marginTop: "9rem",
          }}
        >
          Navigate the Crypto Universe with Kadet
        </h1>
        <p
          style={{
            color: "var(--secondary-color-text)",
            fontFamily: "var(--font-base)",
            fontSize: "1.44rem",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "120%",
            letterSpacing: "0.014rem",
            textTransform: "none",
            marginTop: "1.6rem",
          }}
        >
          Explore the the world of crypto with Kadet Wallet! The solution to all
          of your cross-chain management, storage, and transaction needs.
        </p>
        <ButtonHero icon={chromeLogo}>Download Extention</ButtonHero>
      </div>
    </Wrapper>
  );
};

export default Hero;

/*
  <img src={chromeLogo} alt="Chrome Icon" />
const [hero_section, setHero_section] = useState([]);

useEffect(() => {
  const query = '*[_type == "hero_section"]';

  client
    .fetch(query)
  .then((data) => setHero_section(data))
   .catch((err) => console.error(err));
}, []);
<div className="app__header app__flex">
      { Mockup! }
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        { <img
          src={
            hero_section?.imgUrl
              ? urlFor(hero_section.imgUrl)
              : images.fallback_image
          }
          alt={hero_section?.title || "Fallback Title"}
        /> }
        <img src={images.create_account_hero} alt="mockup" />
        <motion.img
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <div style={{ marginLeft: 20 }}>
              <h1 className="head-text">
                The first cross-chain crypto wallet on Kadena
              </h1>
              <div style={{ marginTop: 20, marginBottom: 80 }}>
                <p className="p-text">
                  In addition to sending, receiving, and importing tokens, Kadet
                  Wallet simplifies cross-chain transfers with our new Autochain
                  feature
                </p>
              </div>
              <Button />
            </div>
          </div>
        </div>
      </motion.div>
    </div>

*/

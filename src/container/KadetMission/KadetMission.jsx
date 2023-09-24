import React from "react";
import { ButtonHero, Wrapper } from "../../components";
import kadetMission from "../../assets/planet_tokens.png";

const KadetMission = () => {
  return (
    <Wrapper className="wrapper">
      <div
        className="KUText"
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
          className="missionHeader"
          style={{
            color: "var(--primary-color-header)",
            fontFamily: "var(--font-base)",
            fontSize: "3.56rem",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "120%",
            letterSpacing: "0.036rem",
            textTransform: "none",
            marginTop: "6rem",
          }}
        >
          The Kadet Mission
        </h1>
        <p
          className="missionText"
          style={{
            color: "var(--secondary-color-text)",
            fontFamily: "var(--font-base)",
            fontSize: "1.44rem",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "120%",
            letterSpacing: "0.014rem",
            textTransform: "none",
            marginTop: "1.5rem",
          }}
        >
          Kadet Wallet was designed with beginners in mind. To make your
          entrance into the world of digital finance simple and easy.
        </p>
        <ButtonHero>Start Learning -</ButtonHero>
      </div>
      <div
        className="missionImage"
        style={{
          //border: "2px solid blue",
          display: "flex",
          height: "32.5rem",
          justifyContent: "center",
          alignItems: "center",
          flex: "1 0 0",
          backgroundImage: `url(${kadetMission})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </Wrapper>
  );
};

export default KadetMission;

/** const [hero_section, setHero_section] = useState([]);

  useEffect(() => {
    const query = '*[_type == "hero_section"]';

    client
      .fetch(query)
      .then((data) => setHero_section(data))
      .catch((err) => console.error(err));
  }, []); 

  return (
    <div className="app__kadet_university app__flex">
      {/* kadet university content }
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__kadet_university-info"
      >
        <div className="app__kadet_university-badge">
          <div className="badge-cmp app__flex">
            <div style={{ marginLeft: 20 }}>
              <h1 className="head-text">Kadet University</h1>
              <div style={{ marginTop: 20, marginBottom: 80 }}>
                <p className="p-text">
                  From Crypto 101 to your smashout predictions for 2023 and
                  beyond.
                </p>
              </div>
              <ButtonUniversity />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mockup! }
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__kadet_university-img"
      >
        {/* <img
          src={
            hero_section?.imgUrl
              ? urlFor(hero_section.imgUrl)
              : images.fallback_image
          }
          alt={hero_section?.title || "Fallback Title"}
        /> 
        {/*  <img src={images.planet_university} alt="mockup" /> }
        <motion.img
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </div>
  );
};

export default KadetMission;*/

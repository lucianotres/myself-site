import React from "react";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Hero from "@/components/Hero";
import { dataAbout } from "@/public/data";
import TitleArea from "@/components/TitleArea";

const AboutPage = () => {
  return (
    <>
      <Hero />
      <TitleArea
        title={"Projetos"}
        text={"Aqui alguns dos trabalhos realizados mais importantes e recentes."}
      />
      {dataAbout.map((item, index) => (
        <React.Fragment key={index}>
          <AboutSectionOne key={index} {...item} />
          <AboutSectionTwo moreDetails={item.moreDetails} sizeImg2={item.sizeImg2} aspectRatio2={item.aspectRatio2} />
        </React.Fragment>
      ))}
      <TitleArea
        title={""}
        text={"Muitos outros projetos foram realizados ao longo do tempo, mas que hoje em dia já se tornaram obsoletos."}
      />
    </>
  );
};

export default AboutPage;

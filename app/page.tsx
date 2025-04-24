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
        text={"Aqui alguns trabalhos realizados ao longo dos anos"}
      />
      {dataAbout.map((item, index) => (
        <React.Fragment key={index}>
          <AboutSectionOne key={index} {...item} />
          <AboutSectionTwo moreDetails={item.moreDetails} sizeImage={item.sizeImg} aspectRatio={item.aspectRatio} />
        </React.Fragment>
      ))}
    </>
  );
};

export default AboutPage;

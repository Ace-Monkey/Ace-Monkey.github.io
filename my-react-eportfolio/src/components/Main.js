import MainHero from "./MainHero";
import MainNumbers from "./MainNumbers";
import MainExperiences from "./MainExperiences";
import MainFooter from "./MainFooter";

function Main({ info }) {
  const heroimage = info.heroimage;
  const herotitle = info.herotitle;
  const herotext = info.herotext;
  const herobtntext = info.herobtntext;

  const numbersrow = info.numbersrow;

  const experiencestitle = info.experiencestitle
  const experiences = info.experiences;

  const footerleft = info.footerleft;
  const footerright = info.footerright;

  // Main content area -----------------------
  return (
    <main>
      <div className="main-scrollbox">
        <MainHero
          bgimg={heroimage}
          title={herotitle}
          text={herotext}
          btntext={herobtntext}
        />
        <MainNumbers rows={numbersrow} />
        <MainExperiences items={experiences} title={ experiencestitle } />
        <MainFooter left={footerleft} right={footerright} />
      </div>
    </main>
  );
}

export default Main;

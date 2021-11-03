import MainHero from "./MainHero";
import MainNumbers from "./MainNumbers";
import MainExperiences from "./MainExperiences";
import MainFooter from "./MainFooter";
import MainTimelines from "./MainTimelines";

function Main({ info }) {
  const heroimage = info.heroimage;
  const herotitle = info.herotitle;
  const herotext = info.herotext;
  const herobtntext = info.herobtntext;

  const numbersrow = info.numbersrow;

  const experiencestitle = info.experiencestitle
  const experiences = info.experiences;

  const timeline1 = info.timeline1
  const timeline2 = info.timeline2

  const footerleft = info.footerleft;
  const footerright = info.footerright;

  // Main content area -----------------------

  function toggleAsidebar() {
    var element = document.getElementsByClassName("slide")[0];
    var element2 = document.getElementsByClassName("fade")[0];
    if (element)
    {
      element.classList.toggle("slide");
    }
    if (element2)
    {
      element2.classList.toggle("fade");
    }
  }

  return (
    <main className="main" onClick={ toggleAsidebar }>
      <div className="main-scrollbox">
        <MainHero
          bgimg={heroimage}
          title={herotitle}
          text={herotext}
          btntext={herobtntext}
        />
        <MainNumbers rows={numbersrow} />
        <MainExperiences items={experiences} title={experiencestitle} />
        <MainTimelines tl1={timeline1} tl2={timeline2} />
        <MainFooter left={footerleft} right={footerright} />
      </div>
    </main>
  );
}

export default Main;

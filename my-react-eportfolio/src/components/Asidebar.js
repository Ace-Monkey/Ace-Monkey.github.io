import AsideHeader from "./AsideHeader";
import AsideInfo from "./AsideInfo";
import AsideSkills from "./AsideSkills";
import AsideChecks from "./AsideChecks";
import AsideDownloads from "./AsideDownloads";
import AsideSocial from "./AsideSocial";

function Asidebar({ info }) {
  const profileimg = info.avatar;
  const name = info.name;
  const jobtitle = info.jobtitle;

  const rowinfo = info.rowinfo;

  const skills = info.skills;

  const knowledge = info.knowledge;

  const downloads = info.downloads;

  const social = info.social;

  function toggleAsidebar() {
    var element = document.getElementsByClassName("aside")[0];
    if (element)
    {
      element.classList.toggle("slide");
    }
  }

  // Asidebar content -------------
  return (
    <aside className="aside">
      <button className="aside-button" onClick={ toggleAsidebar }>I</button>
      <AsideHeader profileimg={profileimg} name={name} jobtitle={jobtitle} />

      <div className="aside-content">
        <AsideInfo rowinfo={rowinfo} />
        <hr />
        <AsideSkills skills={skills} />
        <hr />
        <AsideChecks knowledge={knowledge} />
        <hr />
        <AsideDownloads downloads={downloads} />
      </div>
      <AsideSocial social={social} />
    </aside>
  );
}

export default Asidebar;

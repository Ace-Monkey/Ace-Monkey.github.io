import { useState, useEffect } from 'react'
import BackendRow from "./BackendRow";

function Backend({ data })
{
    //const currentData = data;

    const [name, setName] = useState(data.name)
    const [jobtitle, setJobtitle] = useState(data.jobtitle)
    const [avatar, setAvatar] = useState(data.avatar)

    // === Other Info Rows ===
    const [otherInfo, setOtherInfo] = useState([])
    useEffect(() =>
    {
        setOtherInfo(data.rowinfo.map((info) => (
            <BackendRow key={info.id} id={info.id} val1={info.label} val2={info.value} onRemove={deleteOtherInfo} />
        )))
        function deleteOtherInfo(id)
        {
            console.log('delete ' + id)
            console.log(otherInfo.filter((info) => info.key !== id))

            setOtherInfo(otherInfo.filter((row) => row.key !== id))
        }
    }, []);
    
    /* // === Skills Rows ===
    const [skills, setSkills] = useState([])
    useEffect(() =>
    {
        setSkills(data.skills.map((skill) => (
            <BackendRow key={skill.id} id={skill.id} val1={skill.skill} onRemove={deleteSkills} />
        )))
    }, []);
    function deleteSkills(id)
    {
        setSkills(skills.filter((row) => row.key !== id))
    }
    
    // === Knowledge Rows ===
    const [knowledge, setKnowledge] = useState([])
    useEffect(() =>
    {
        setKnowledge(data.knowledge.map((know) => (
            <BackendRow key={know.id} id={know.id} val1={know.skill} onRemove={deleteKnowledge} />
        )))
    }, []);
    function deleteKnowledge(id)
    {
        setKnowledge(knowledge.filter((row) => row.key !== id))
    }
    
    // === Downloads Rows ===
    const [downloads, setDownloads] = useState([])
    useEffect(() =>
    {
        setDownloads(data.downloads.map((down) => (
            <BackendRow key={down.id} id={down.id} val1={down.text} val2={down.link} val3={down.icon} onRemove={deleteDownloads} />
        )))
    }, []);
    function deleteDownloads(id)
    {
        setDownloads(downloads.filter((row) => row.key !== id))
    }
    
    // === Socials Rows ===
    const [social, setSocial] = useState([])
    useEffect(() =>
    {
        setSocial(data.social.map((soc) => (
            <BackendRow key={soc.id} id={soc.id} val1={soc.icon} val2={soc.link} onRemove={deleteSocials} />
        )))
    }, []);
    function deleteSocials(id)
    {
        setSocial(social.filter((row) => row.key !== id))
    }
    
    const [heroImage, setHeroImage] = useState(data.heroimage)
    const [heroTitle, setHeroTitle] = useState(data.herotitle)
    const [heroText, setHeroText] = useState(data.herotext)
    const [heroBtn, setHeroBtn] = useState(data.herobtntext)

    // === Numbers Rows ===
    const [numbersRow, setNumbersRow] = useState([])
    useEffect(() =>
    {
        setNumbersRow(data.numbersrow.map((num) => (
            <BackendRow key={num.id} id={num.id} val1={num.label} val2={num.value} val3={num.prefix} val4={num.postfix} onRemove={deletenumbersRow} />
        )))
    }, []);
    function deletenumbersRow(id)
    {
        setNumbersRow(numbersRow.filter((row) => row.key !== id))
    }

    const [expTitle, setExpTitle] = useState(data.experiencestitle)

    const [experiences, setExperiences] = useState(data.experiences.map((exp) => (
        <BackendRow id={exp.id} val1={exp.title} val2={exp.date} val5={exp.text} />
    )))

    const [t1Title, setT1Title] = useState(data.timeline1.title)
    const [timeline1, setTimeline1] = useState(data.timeline1.sections.map((t1) => (
        <BackendRow id={t1.id} val1={t1.title} val2={t1.dates} val5={t1.text} />
    )))

    const [t2Title, setT2Title] = useState(data.timeline2.title)
    const [timeline2, setTimeline2] = useState(data.timeline2.sections.map((t2) => (
        <BackendRow id={t2.id} val1={t2.title} val2={t2.dates} val5={t2.text} />
    )))

    const [footerLeft, setFooterLeft] = useState(data.footerleft)
    const [footerRight, setFooterRight] = useState(data.footerright) */

    return (
        <div className="backend">
            <div className="backend-inner">
                <form>
                <div className="avatar-section">
                    <img src={ avatar } alt="avatar" />
                        <label>Avatar URL
                            <input type="text" name="avatar-url" id="avatar-url" value={ avatar } onChange={(e) => setAvatar(e.target.value)} />
                    </label>
                    </div>
                    <div className="name-jobtitle-section">
                        <label>Name
                            <input type="text" name="name" id="name" value={ name } onChange={(e) => setName(e.target.value)} />
                        </label>
                        <label>Job Title
                            <input type="text" name="name" id="name" value={ jobtitle } onChange={(e) => setJobtitle(e.target.value)} />
                    </label>
                    </div>
                    <div className="other-infos">
                        <div className="other-info-row header">
                            <p>ID</p>
                            <p>Info Label</p>
                            <p>Info Value</p>
                        </div>
                        { otherInfo }
                </div>
                </form>
            </div>
        </div>
    )
}

export default Backend

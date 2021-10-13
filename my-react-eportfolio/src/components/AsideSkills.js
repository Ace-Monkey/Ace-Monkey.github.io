
function AsideSkills({ skills })
{
  const skillsarray = skills
  const skillitems = skillsarray.map((skill) =>
    <li key={ skill.skill }>{ skill.skill }</li>
  );
    return (
        <div className="skills-tags">
          <ul>
          { skillitems }
          </ul>
        </div>
    )
}

export default AsideSkills

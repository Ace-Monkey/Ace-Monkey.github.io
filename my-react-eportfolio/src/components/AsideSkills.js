
function AsideSkills({ skills })
{
  const skillsarray = skills
  const skillitems = skillsarray.map((skill) =>
    <li key={ skill.id }>{ skill.skill }</li>
  );
    return (
      <div className="skills-tags">
        <p>Skills:</p>
          <ul>
          { skillitems }
          </ul>
        </div>
    )
}

export default AsideSkills

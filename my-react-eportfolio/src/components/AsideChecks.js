
function AsideChecks({ knowledge })
{
  const knowledgearray = knowledge
  const skillitems = knowledgearray.map((skill) => 
    <li key={ skill.id }><span className="fa-li"><i className="fas fa-check"></i></span>{ skill.skill }</li>
  );
    return (
        <div className="skills-check">
          <ul>
          { skillitems }
          </ul>
        </div>
    )
}

export default AsideChecks

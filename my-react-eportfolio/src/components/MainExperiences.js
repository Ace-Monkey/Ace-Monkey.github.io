function ExpItem({ exp })
{
  return (
    <div className="experience-item">
      <h5>{exp.title}</h5>
      <span>{exp.date}</span>
      <p dangerouslySetInnerHTML={ {__html: exp.text} } />
    </div>
  );
}

function MainExperiences({ items, title }) {
  const rowsarray = items;
  const expitems = rowsarray.map((exp) => (
    <ExpItem key={exp.id} exp={ exp } />
  ));
  return (
    <div className="experience-grid">
      <h4>{title}</h4>
      <div className="experience-grid-inner">{expitems}</div>
    </div>
  );
}

export default MainExperiences;

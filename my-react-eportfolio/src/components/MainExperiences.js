function MainExperiences({ items, title }) {
  const rowsarray = items;
  const expitems = rowsarray.map((exp) => (
    <div key={ exp.id } className="experience-item">
      <h5>{exp.title}</h5>
      <span>{exp.date}</span>
      <p>{exp.text}</p>
    </div>
  ));
  return (
    <div className="experience-grid">
      <h4>{ title }</h4>
      <div className="experience-grid-inner">{expitems}</div>
    </div>
  );
}

export default MainExperiences;

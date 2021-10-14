
function MainNumbers({ rows })
{
  const rowarray = rows
  const rowitems = rowarray.map((row) =>
    <li key={ row.id }>
      <span>{ row.value }</span>
      { row.label }
    </li>
  );
    return (
        <div className="numbers-row">
            <ul>
          { rowitems }
            </ul>
          </div>
    )
}

export default MainNumbers

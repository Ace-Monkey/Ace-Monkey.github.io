import CountUp from 'react-countup';

function MainNumbers({ rows })
{
  const rowarray = rows
  const rowitems = rowarray.map((row) => 
    <li key={row.id}>
      <span>{ row.prefix }<CountUp start={0} end={row.value} duration={2.75} />{ row.postfix }</span>
      {row.label}
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

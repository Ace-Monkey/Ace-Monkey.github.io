function AsideInfo({ rowinfo }) {
  const rowinfoarray = rowinfo;
  const infoitems = rowinfoarray.map((info) => (
    <div key={info.label} className="info-row">
      <p>{info.label}</p>
      <p>{info.value}</p>
    </div>
  ));
  return <div className="aside-info">{infoitems}</div>;
}

export default AsideInfo;

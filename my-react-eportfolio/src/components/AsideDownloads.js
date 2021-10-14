function AsideDownloads({ downloads }) {
  const downloadarray = downloads;
  const downloaditems = downloadarray.map((download) => (
    <a href={download.link} key={download.id}>
      {download.text} <i className={"fas " + download.icon}></i>
    </a>
  ));
  return <div className="cv-download">{downloaditems}</div>;
}

export default AsideDownloads;

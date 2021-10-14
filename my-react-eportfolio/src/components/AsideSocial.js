
function AsideSocial({ social })
{
  const socialarray = social
  const socialitems = socialarray.map((social) =>
    <a href={ social.link } key={ social.id } rel='noreferrer' target="_blank">
      <i className={ 'fab ' + social.icon }></i>
    </a>
  );
    return (
        <div className="aside-social">
        { socialitems }
        </div>
    )
}

export default AsideSocial

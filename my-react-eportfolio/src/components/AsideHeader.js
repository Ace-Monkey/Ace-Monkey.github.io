
function AsideHeader({ profileimg, name, jobtitle }) {
    return (
        <div className="aside-header">
        <div className="avatar-icon">
          <img src={profileimg} alt="avatar" />
        </div>
        <div className="aside-text">
          <h5>{name}</h5>
          <p dangerouslySetInnerHTML={{ __html: jobtitle }} />
        </div>
      </div>
    )
}

export default AsideHeader

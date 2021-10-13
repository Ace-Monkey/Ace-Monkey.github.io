
function AsideHeader({ profileimg }) {
    return (
        <div className="aside-header">
        <div className="avatar-icon">
          <img src={profileimg} alt="avatar" />
        </div>
        <div className="aside-text">
          <h5>Luke Dixon</h5>
          <p>Front-end Developer,<br/>
            Devops Admin
          </p>
        </div>
      </div>
    )
}

export default AsideHeader

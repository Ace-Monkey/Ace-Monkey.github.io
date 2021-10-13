
function MainHero({ bgimg, title, text, btntext }) {
    return (
        <div className="hero-banner" style={{ backgroundImage: 'url(' + bgimg + ')' }} >
            <div className="hero-content">
          <h1>{ title }</h1>
              <p>{ text }</p>
              <a href="#." className="primary-btn">{ btntext }</a>
            </div>
            <div className="hero-image">
              <img src="/" alt="hero code" />
            </div>
          </div>
    )
}

export default MainHero

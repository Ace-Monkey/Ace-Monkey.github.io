
function App() {
  return (
    <div className="App">

      {/* Aside bar content --------------------------------------------------- */}
      <aside>
        <div className="aside-header">
          <div className="avatar-icon">
            <img src="/" alt="avatar" />
          </div>
          <div className="aside-text">
            <h5>Luke Dixon</h5>
            <p>Front-end Developer,<br/>
              Devops Admin
            </p>
          </div>
        </div>
        <div className="aside-content">
          <div className="skills-tags">
            <ul>
              <li>html</li>
              <li>CSS/SCSS</li>
              <li>JavaScript</li>
              <li>PHP</li>
              <li>Python</li>
              <li>SQL</li>
              <li>React</li>
              <li>Wordpress</li>
            </ul>
          </div>
          <hr/>
          <div className="skills-check">
            <ul>
              <li>GIT knowledge</li>
              <li>Unit Testing</li>
            </ul>
          </div>
          <hr />
          <div className="cv-download">
            <a href="/">Download CV</a>
          </div>
        </div>
        <div className="aside-social">
          <a href="#." target="_blank">in</a>
          <a href="#." target="_blank">gh</a>
          <a href="#." target="_blank">gl</a>
        </div>
      </aside>

      {/* Main content area --------------------------------------------------- */}
      <main>
        <div className="main-scrollbox">

          {/* Hero content area --------------------------------------------------- */}
          <div className="hero-banner">
            <div className="hero-content">
              <h1>Welcome to my E-portfolio!</h1>
              <p>I build websites.</p>
              <a href="#." className="primary-btn">Explore Now</a>
            </div>
            <div className="hero-image">
              <img src="/" alt="hero code" />
            </div>
          </div>

          {/* Numbers row area --------------------------------------------------- */}
          <div className="numbers-row">
            <ul>
              <li>
                <span>4+</span>
                Years Experience
              </li>
              <li>
                <span>27</span>
                Websites Developed
              </li>
              <li>
                <span>27</span>
                Websites Developed
              </li>
              <li>
                <span>27</span>
                Websites Developed
              </li>
            </ul>
          </div>

          {/* Experiences grid area --------------------------------------------------- */}
          <div className="experience-grid">
            <h4>My Experiences</h4>
            <div className="experience-grid-inner">
              <div class="experience-item">
                <h5>Web Development</h5>
                <span>august 2015 - September 2018</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.</p>
              </div>
              <div class="experience-item">
                <h5>Web Development</h5>
                <span>august 2015 - September 2018</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.</p>
              </div>
              <div class="experience-item">
                <h5>Web Development</h5>
                <span>august 2015 - September 2018</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.</p>
              </div>
              <div class="experience-item">
                <h5>Web Development</h5>
                <span>august 2015 - September 2018</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.</p>
              </div>
              <div class="experience-item">
                <h5>Web Development</h5>
                <span>august 2015 - September 2018</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.</p>
              </div>
            </div>
          </div>

          {/* Recommendations area --------------------------------------------------- */}
          <div className="recommendations-slider">
            <h4>Recommendations</h4>
            <div className="recommendations-slider-inner">
              <div class="Recommendations-item">
                <h5>Some Guy</h5>
                <span>Job title</span>
                <img src="/" alt="Some Guy" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.</p>
              </div>
              <div class="Recommendations-item">
                <h5>Some Guy</h5>
                <span>Job title</span>
                <img src="/" alt="Some Guy" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.</p>
              </div>
              <div class="Recommendations-item">
                <h5>Some Guy</h5>
                <span>Job title</span>
                <img src="/" alt="Some Guy" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.</p>
              </div>
              <div class="Recommendations-item">
                <h5>Some Guy</h5>
                <span>Job title</span>
                <img src="/" alt="Some Guy" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.</p>
              </div>
            </div>
          </div>

          {/* Footer area --------------------------------------------------- */}
          <footer>
            <p>© 2021 My Eportfolio</p>
            <p>Created by Lunk Dixon</p>
          </footer>

        </div>
      </main>

    </div>
  );
}

export default App;

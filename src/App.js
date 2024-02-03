function NavBar() {
    return (
        <>
            <svg
                className="svg1"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                // xmlnsXlink="http://www.w3.org/1999/xlink"
                // xmlnsSvgjs="http://svgjs.dev/svgjs"
                viewBox="0 0 1422 800"
            >
                <defs>
                    <linearGradient
                        x1="50%"
                        y1="0%"
                        x2="50%"
                        y2="100%"
                        id="oooscillate-grad"
                    >
                        <stop
                            stop-color="hsl(206, 75%, 49%)"
                            stop-opacity="1"
                            offset="0%"
                        ></stop>
                        <stop
                            stop-color="hsl(331, 90%, 56%)"
                            stop-opacity="1"
                            offset="100%"
                        ></stop>
                    </linearGradient>
                </defs>
                <g
                    stroke-width="2"
                    stroke="url(#oooscillate-grad)"
                    fill="none"
                    stroke-linecap="round"
                >
                    <path
                        d="M 0 572 Q 355.5 -100 711 400 Q 1066.5 900 1422 572"
                        opacity="1.00"
                    ></path>
                    <path
                        d="M 0 550 Q 355.5 -100 711 400 Q 1066.5 900 1422 550"
                        opacity="0.96"
                    ></path>
                    <path
                        d="M 0 528 Q 355.5 -100 711 400 Q 1066.5 900 1422 528"
                        opacity="0.92"
                    ></path>
                    <path
                        d="M 0 506 Q 355.5 -100 711 400 Q 1066.5 900 1422 506"
                        opacity="0.89"
                    ></path>
                    <path
                        d="M 0 484 Q 355.5 -100 711 400 Q 1066.5 900 1422 484"
                        opacity="0.85"
                    ></path>
                    <path
                        d="M 0 462 Q 355.5 -100 711 400 Q 1066.5 900 1422 462"
                        opacity="0.81"
                    ></path>
                    <path
                        d="M 0 440 Q 355.5 -100 711 400 Q 1066.5 900 1422 440"
                        opacity="0.77"
                    ></path>
                    <path
                        d="M 0 418 Q 355.5 -100 711 400 Q 1066.5 900 1422 418"
                        opacity="0.73"
                    ></path>
                    <path
                        d="M 0 396 Q 355.5 -100 711 400 Q 1066.5 900 1422 396"
                        opacity="0.70"
                    ></path>
                    <path
                        d="M 0 374 Q 355.5 -100 711 400 Q 1066.5 900 1422 374"
                        opacity="0.66"
                    ></path>
                    <path
                        d="M 0 352 Q 355.5 -100 711 400 Q 1066.5 900 1422 352"
                        opacity="0.62"
                    ></path>
                    <path
                        d="M 0 330 Q 355.5 -100 711 400 Q 1066.5 900 1422 330"
                        opacity="0.58"
                    ></path>
                    <path
                        d="M 0 308 Q 355.5 -100 711 400 Q 1066.5 900 1422 308"
                        opacity="0.54"
                    ></path>
                    <path
                        d="M 0 286 Q 355.5 -100 711 400 Q 1066.5 900 1422 286"
                        opacity="0.51"
                    ></path>
                    <path
                        d="M 0 264 Q 355.5 -100 711 400 Q 1066.5 900 1422 264"
                        opacity="0.47"
                    ></path>
                    <path
                        d="M 0 242 Q 355.5 -100 711 400 Q 1066.5 900 1422 242"
                        opacity="0.43"
                    ></path>
                    <path
                        d="M 0 220 Q 355.5 -100 711 400 Q 1066.5 900 1422 220"
                        opacity="0.39"
                    ></path>
                    <path
                        d="M 0 198 Q 355.5 -100 711 400 Q 1066.5 900 1422 198"
                        opacity="0.35"
                    ></path>
                    <path
                        d="M 0 176 Q 355.5 -100 711 400 Q 1066.5 900 1422 176"
                        opacity="0.32"
                    ></path>
                    <path
                        d="M 0 154 Q 355.5 -100 711 400 Q 1066.5 900 1422 154"
                        opacity="0.28"
                    ></path>
                    <path
                        d="M 0 132 Q 355.5 -100 711 400 Q 1066.5 900 1422 132"
                        opacity="0.24"
                    ></path>
                    <path
                        d="M 0 110 Q 355.5 -100 711 400 Q 1066.5 900 1422 110"
                        opacity="0.20"
                    ></path>
                    <path
                        d="M 0 88 Q 355.5 -100 711 400 Q 1066.5 900 1422 88"
                        opacity="0.16"
                    ></path>
                    <path
                        d="M 0 66 Q 355.5 -100 711 400 Q 1066.5 900 1422 66"
                        opacity="0.13"
                    ></path>
                    <path
                        d="M 0 44 Q 355.5 -100 711 400 Q 1066.5 900 1422 44"
                        opacity="0.09"
                    ></path>
                </g>
            </svg>
            <nav>
                <div className="container">
                    <div className="logo">
                        {"< "}Ritik {"/>"}
                    </div>
                    <ul>
                        <li className="active">Projects</li>
                        <li>Blogs</li>
                        <li>About</li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

function HeroSection() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero_content">
                    <div className="hero_left">
                        <div className="hero_top">
                            <span className="greet">Hello, I'm</span>
                            <span className="name">Ritik Raj</span>
                        </div>
                        <p>
                            CSE undergrad and a{" "}
                            <span className="highlight"> 🧑‍💻MERN Developer</span>
                            .<br></br>Love to write code with every sip of
                            🍵tea.
                        </p>
                        <div className="hero_bottom">
                            <button className="btn secondary">
                                Download CV
                            </button>
                            {/* <button className="btn secondary">
                                Contact Me
                            </button> */}
                        </div>
                    </div>
                    {/* <img src="/img.jpg" className="hero_img" /> */}
                </div>
            </div>
        </section>
    );
}

function Skills() {
    return (
        <section className="skills">
            {/* <div className="container"> */}
            <div className="skills_content">
                <div className="skills_left">
                    <h2>Skills </h2>
                    <p className="section_summary">
                        Languages, frameworks and tools that I know and have
                        created projects with.
                    </p>
                </div>
                <div className="skills_right">
                    <div className="skills_list">
                        <span className="skill">HTML</span>
                        <span className="skill">CSS</span>
                        <span className="skill">Javascript</span>
                        <span className="skill">React</span>
                        <span className="skill">NodeJs</span>
                        <span className="skill">MongoDb</span>
                        <span className="skill">ExpressJS</span>
                        <span className="skill">Python</span>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </section>
    );
}

function Projects() {
    return (
        <section className="projects">
            <div className="container">
                <div className="projects_content">
                    <h2>Projects</h2>
                    <div className="project_list">
                        <div className="project">
                            <div className="project_img">
                                <img src="/images/linkify.png" alt="" />
                            </div>
                            <div className="project_detail">
                                <div className="project_title">
                                    Linkify Text
                                </div>
                                <a href="https://linkifytext.onrender.com" target="_blank" rel="noreferrer">
                                    <img src="/images/link.svg" alt="" />
                                </a>
                                <a href="https://github.com/ritik48/linkifytext">
                                    <img src="/images/github.svg" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="project">
                            <div className="project_img">
                                <img src="/images/movie.png" alt="" />
                            </div>
                            <div className="project_detail">
                                <div className="project_title">MoviePedia</div>

                                <a href="https://moviepedia-tech.vercel.app/" target="_blank" rel="noreferrer">
                                    <img src="/images/link.svg" alt="" />
                                </a>
                                <a href="https://github.com/ritik48/MoviePedia">
                                    <img src="/images/github.svg" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="project">
                            <div className="project_img">
                                <img src="/images/yelp.png" alt="" />
                            </div>
                            <div className="project_detail">
                                <div className="project_title">YelpCamp</div>

                                <img src="/images/link.svg" alt="" />
                                <img src="/images/github.svg" alt="" />
                            </div>
                        </div>
                       
                        {/* <div className="project">
                            <div className="project_img"></div>
                            <div className="project_title"></div>
                        </div>
                        <div className="project">
                            <div className="project_img"></div>
                            <div className="project_title"></div>
                        </div> */}
                    </div>
                    <button className="btn primary">All Projects</button>
                </div>
            </div>
        </section>
    );
}

function App() {
    return (
        <>
            <NavBar />
            <HeroSection />
            <Skills />
            <Projects />
        </>
    );
}

export default App;

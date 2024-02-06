import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import gsap from "gsap";

import { useRef, useState, useLayoutEffect, useEffect } from "react";

const BACKEND = "http://192.168.1.10:3001";

function NavBar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    const [showLogo, setShowLogo] = useState(true);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();

        if (latest > 20) {
            setShowLogo(false);
        } else {
            setShowLogo(true);
        }

        if (latest > previous && latest > 20) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

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
            <motion.nav
                initial="initial"
                variants={{
                    initial: {
                        x: "-50%",
                    },
                    visible: { y: 0 },
                    hidden: { y: "-140%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
            >
                <div className="container">
                    {showLogo && (
                        <div className="logo">
                            {"< "} R {"/>"}
                        </div>
                    )}
                    <ul>
                        <li className="active">Projects</li>
                        <li>Blogs</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </motion.nav>
        </>
    );
}

function HeroSection() {
    const comp = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline();
            t1.from(["#greet", "#name"], {
                opacity: 0,
                y: "+=30",
                stagger: 0.5,
            });
        }, comp);

        return () => ctx.revert();
    }, []);

    async function downloadResume() {
        const a = document.createElement("a");
        a.setAttribute("href", `${BACKEND}/resume`);
        a.click();
        a.remove();
    }

    return (
        <section className="hero" ref={comp}>
            <div className="container">
                <div className="hero_content">
                    <div className="hero_left">
                        <div className="hero_top">
                            <span className="greet" id="greet">
                                Hello, I'm
                            </span>
                            <span className="name" id="name">
                                Ritik Raj
                            </span>
                        </div>
                        <p>
                            CSE undergrad and a{" "}
                            <span className="highlight"> 🧑‍💻MERN Developer</span>
                            .<br></br>Love to write code with every sip of
                            🍵tea.
                        </p>
                        <div className="hero_bottom">
                            <button
                                className="btn secondary"
                                onClick={downloadResume}
                            >
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
                        <div className="skill">
                            <img
                                src="/icons/html.png"
                                alt=""
                                className="skill_icon"
                            />
                            <span>HTML</span>
                        </div>
                        <div className="skill">
                            <img
                                src="/icons/css.png"
                                alt=""
                                className="skill_icon"
                            />
                            <span>CSS</span>
                        </div>
                        <div className="skill">
                            <img
                                src="/icons/js.png"
                                alt=""
                                className="skill_icon"
                            />
                            <span>Javascript</span>
                        </div>
                        <div className="skill">
                            <img
                                src="/icons/react.png"
                                alt=""
                                className="skill_icon"
                            />
                            <span>React</span>
                        </div>
                        <div className="skill">
                            <img
                                src="/icons/nodejs.png"
                                alt=""
                                className="skill_icon"
                            />
                            <span>NodeJs</span>
                        </div>
                        <div className="skill">
                            <img
                                src="/icons/mongodb.png"
                                alt=""
                                className="skill_icon"
                            />
                            <span>MongoDb</span>
                        </div>
                        <div className="skill">
                            <img
                                src="/icons/react.png"
                                alt=""
                                className="skill_icon"
                            />
                            <span>ExpressJS</span>
                        </div>
                        <div className="skill">
                            <img
                                src="/icons/python.png"
                                alt=""
                                className="skill_icon"
                            />
                            <span>Python</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Projects() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setError(false);
        setLoading(true);
        async function fetchProjects() {
            try {
                const res = await fetch(`${BACKEND}`, {
                    method: "GET",
                });

                if (!res.ok) {
                    return alert("Error fetching projects");
                }
                const data = await res.json();

                setProjects(data);
            } catch (error) {
                setError("Unable to fetch projects");
            } finally {
                setLoading(false);
            }
        }
        fetchProjects();
    }, []);

    return (
        <section className="projects">
            <div className="container">
                <div className="projects_content">
                    <h2>Projects</h2>
                    <div className="project_list">
                        {error && <p className="info error">{error}</p>}
                        {loading && (
                            <p className="info">Fetching projects...</p>
                        )}
                        {!loading && !error && projects.length < 1 && (
                            <p className="info">Currently no projects.</p>
                        )}

                        {projects.map((project) => {
                            return (
                                <div className="project" key={project}>
                                    <div className="project_img">
                                        <img
                                            src={`${BACKEND}${project.image}`}
                                            alt=""
                                        />
                                    </div>
                                    <div className="project_detail">
                                        <div className="project_title">
                                            {project.title}
                                        </div>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <img
                                                src="/images/link.svg"
                                                alt=""
                                            />
                                        </a>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <img
                                                src="/images/github.svg"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                </div>
                            );
                        })}

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

function Blogs() {
    return (
        <section className="blogs">
            <div className="container">
                <h2>Latest Blog</h2>

                <div className="blogs_content">
                    <div className="blog_left">
                        <h3 className="blog_title">
                            Controlled Elements in React
                        </h3>
                        <span className="blog_date">25th December, 2023</span>
                        <div className="blog_tags">
                            <span>react</span>
                            <span>useState</span>
                            <span>hooks</span>
                        </div>
                        <div className="blog_read">
                            <button className="btn secondary">
                                Read{" "}
                                <img
                                    src="/images/link.svg"
                                    alt=""
                                    className="icon"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="blog_right">
                        <img src="/images/blog.webp" alt="" />
                    </div>
                </div>
                <button className="btn primary more_blogs">More Blogs</button>
            </div>
        </section>
    );
}

function Socials() {
    return (
        <section className="socials">
            <div className="container">
                <h2>
                    <span className="highlight2">
                        Have a project in mind ?{" "}
                    </span>{" "}
                    Let's talk.
                </h2>
                {/* <img src="/icons/t1.svg" className="test" alt="" /> */}
                <img src="/icons/t2.svg" className="svg_float" alt="" />
                <img src="/icons/t3.svg" className="svg_float" alt="" />
                <div className="social_container">
                    <div>
                        <img
                            className="social_icon"
                            src="/icons/linkedin.png"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="social_icon"
                            src="/icons/gmail.png"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="social_icon"
                            src="/icons/github.svg"
                            alt=""
                        />
                    </div>
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
            <Blogs />
            <Socials />
        </>
    );
}

export default App;

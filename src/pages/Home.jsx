import gsap from "gsap";

import { useRef, useState, useLayoutEffect, useEffect } from "react";
import { Link } from "react-router-dom";

import Project from "../components/Project";
import Blog from "../components/Blog";
import Socials from "../components/Socials";
import Ticker from "framer-motion-ticker";

const BACKEND = process.env.REACT_APP_BACKEND;

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
                                <span className="highlight">
                                    {" "}
                                    🧑‍💻MERN Developer
                                </span>
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

const skills = [
    { name: "HTML", icon: "/icons/html.png" },
    { name: "CSS", icon: "/icons/css.png" },
    { name: "Javascript", icon: "/icons/js.png" },
    { name: "React", icon: "/icons/react.png" },
    { name: "NodeJs", icon: "/icons/nodejs.png" },
    { name: "MongoDb", icon: "/icons/mongodb.png" },
    { name: "ExpressJS", icon: "/icons/react.png" }, // Assuming this is intentional
    { name: "Python", icon: "/icons/python.png" },
];

function SkillsList({ duration }) {
    return (
        <div className="skills_list">
            <Ticker duration={duration}>
                {skills.map((skill, index) => (
                    <div key={index} className="skill">
                        <img src={skill.icon} alt="" className="skill_icon" />
                        {/* <span>{skill.name}</span> */}
                    </div>
                ))}
            </Ticker>
        </div>
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
                    <SkillsList duration={20} />
                    {/* <SkillsList duration={10}/> */}
                </div>
            </div>
        </section>
    );
}

function ProjectList() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setError("");
        setLoading(true);
        async function fetchProjects() {
            try {
                const res = await fetch(`${BACKEND}/projects?priority=HIGH`, {
                    method: "GET",
                });

                if (!res.ok) {
                    return setError("Unable to fetch projects");
                }
                const data = await res.json();

                setProjects(data);
                setLoading(false);
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
                                <Project
                                    title={project.title}
                                    github={project.github}
                                    live={project.live}
                                    image={`${BACKEND}${project.image}`}
                                    key={project.live}
                                />
                            );
                        })}
                    </div>
                    {!error && !loading && projects && (
                        <Link
                            className="btn primary"
                            to={"/projects"}
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            More Projects
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}

function LatestBlog() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        setError("");
        setLoading(true);
        async function fetchBlogs() {
            try {
                const res = await fetch(`${BACKEND}/blogs`, {
                    method: "GET",
                });

                if (!res.ok) {
                    return setError("Unable to fetch blogs");
                }
                const data = await res.json();
                console.log(data.tags);
                setBlogs(data);
                setLoading(false);
            } catch (error) {
                setError("Unable to fetch blogs");
            } finally {
                setLoading(false);
            }
        }
        fetchBlogs();
    }, []);

    return (
        <section className="blogs">
            <div className="container">
                <h2>Latest Blog</h2>

                <div className="blogs_content">
                    {error && <p className="info error">{error}</p>}
                    {loading && <p className="info">Fetching Blogs...</p>}
                    {!loading && !error && !blogs && (
                        <p className="info">Currently no blogs.</p>
                    )}

                    {!loading && !error && blogs && (
                        <Blog
                            title={blogs.title}
                            image={blogs.image}
                            link={blogs.link}
                            createdAt={blogs.createdAt}
                            tags={blogs.tags}
                        />
                    )}
                </div>
                {!error && !loading && blogs && (
                    <Link
                        className="btn primary more_blogs"
                        to={"/blogs"}
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        More Blogs
                    </Link>
                )}
            </div>
        </section>
    );
}

export default function Home() {
    // change page title
    useEffect(() => {
        document.title = "Ritik Raj | Web Developer";
    }, []);
    return (
        <>
            <HeroSection />
            <Skills />
            <ProjectList />
            <LatestBlog />
            <Socials />
        </>
    );
}

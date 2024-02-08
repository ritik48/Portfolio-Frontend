import gsap from "gsap";

import { useRef, useState, useLayoutEffect, useEffect } from "react";

import NavBar from "../components/NavBar";
import Project from "../components/Project";
import Blog from "../components/Blog";
import Socials from "../components/Socials";

const BACKEND = "http://192.168.1.9:3001";
// const BACKEND = "http://127.0.0.1:3001";

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

function ProjectList() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setError("");
        setLoading(true);
        async function fetchProjects() {
            try {
                const res = await fetch(`${BACKEND}/projects`, {
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
                        <button className="btn primary">All Projects</button>
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
                    <button className="btn primary more_blogs">
                        More Blogs
                    </button>
                )}
            </div>
        </section>
    );
}

export default function Home() {
    return (
        <>
            <NavBar />
            <HeroSection />
            <Skills />
            <ProjectList />
            <LatestBlog />
            <Socials />
        </>
    );
}

import gsap from "gsap";

import { useRef, useState, useLayoutEffect, useEffect } from "react";
import { Link } from "react-router-dom";
import Ticker from "framer-motion-ticker";

import Project from "../components/Project";
import Blog from "../components/Blog";
import Socials from "../components/Socials";
import Loader from "../components/Loader";

import { IoIosArrowRoundForward } from "react-icons/io";

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
        a.setAttribute("href", `${BACKEND}/resume?type=FullStack`);
        a.click();
        a.remove();
    }

    return (
        <>
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
                            <p className="hero-text">
                                <span>Full Stack Web Developer ✨</span>
                            </p>
                            <div className="hero_bottom">
                                <button
                                    className="btn primary resume"
                                    onClick={downloadResume}
                                >
                                    Resume
                                    <span>
                                        <IoIosArrowRoundForward size={22} />
                                    </span>
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
                        {loading && <Loader message={"Fetching projects..."} />}
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
                                    id={project._id}
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
                    {loading && <Loader message={"Fetching Blogs..."} />}
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

import gsap from "gsap";

import { useRef, useState, useLayoutEffect, useEffect } from "react";

import NavBar from "./components/NavBar";
import Project from "./components/Project";

const BACKEND = "http://192.168.1.7:3001";
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
                            return <Project
                                title={project.title}
                                github={project.github}
                                live={project.live}
                                image={`${BACKEND}${project.image}`}
                                key={project.live}
                            />;
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

function Blogs() {
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

    function getFormattedDate(date) {
        // Assuming your JSON data is loaded into a variable called jsonData
        const createdAt = date;

        // Parse the ISO 8601 formatted date string
        const parsedDate = new Date(createdAt);

        // Function to get the suffix for the day (e.g., 'st', 'nd', 'rd', 'th')
        function getDaySuffix(day) {
            if (day >= 11 && day <= 13) {
                return "th";
            }
            switch (day % 10) {
                case 1:
                    return "st";
                case 2:
                    return "nd";
                case 3:
                    return "rd";
                default:
                    return "th";
            }
        }

        // Format the date as "14th Jan, 2024"
        const formattedDate = `${parsedDate.getDate()}${getDaySuffix(
            parsedDate.getDate()
        )} ${parsedDate.toLocaleString("default", {
            month: "short",
        })}, ${parsedDate.getFullYear()}`;

        return formattedDate;
    }

    const publishedDate = blogs ? getFormattedDate(blogs.createdAt) : "";

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
                        <>
                            <div className="blog_left">
                                <h3 className="blog_title">{blogs.title}</h3>
                                <span className="blog_date">
                                    {publishedDate}
                                </span>
                                <div className="blog_tags">
                                    {blogs.tags &&
                                        blogs.tags.map((tag, index) => (
                                            <span key={index}>{tag}</span>
                                        ))}
                                </div>
                                <div className="blog_read">
                                    <a
                                        href={blogs.link}
                                        className="btn secondary"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Read{" "}
                                        <img
                                            src="/images/link.svg"
                                            alt=""
                                            className="icon"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="blog_right">
                                <img src={blogs.image} alt="" />
                            </div>
                        </>
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
            <ProjectList />
            <Blogs />
            <Socials />
        </>
    );
}

export default App;

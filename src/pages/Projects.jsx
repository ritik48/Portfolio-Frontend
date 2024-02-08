import styles from "./Projects.module.css";

import Project from "../components/Project";
import Socials from "../components/Socials";

import { useState, useEffect } from "react";

const BACKEND = "http://192.168.1.9:3001";
// const BACKEND = "http://127.0.0.1:3001";

function ProjectList() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [projects, setProjects] = useState([]);

    const [search, setSearch] = useState("");
    const [searchProject, setSearchProject] = useState([]);

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

    useEffect(() => {
        const controller = new AbortController();
        async function fetchProjects() {
            setError("");
            setLoading(true);

            try {
                const res = await fetch(
                    `${BACKEND}/projects/search?q=${search}`,
                    {
                        signal: controller.signal,
                    }
                );

                if (!res.ok) {
                    return setError("Something went wrong. Try again");
                }

                const data = await res.json();
                console.log(search, " = ", data);
                // console.log("data = ", data)
                setSearchProject(data);

                setError("");
            } catch (error) {
                if (error.name !== "AbortError") {
                    setError(error.message);
                }
                
            } finally {
                setLoading(false);
            }
        }

        if (search.length < 2) {
            setSearchProject([]);
            return;
        }

        setSearchProject([]);
        fetchProjects();

        return function () {
            controller.abort();
        };
    }, [search]);

    return (
        <section className={styles.projects_section}>
            <div className="container">
                <div className={styles.project_content}>
                    <div className={styles.project_top}>
                        <h2>My Projects</h2>
                    </div>
                    <div className={styles.project_controls}>
                        <input
                            placeholder="Seacrh"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <div className={styles.project_tags}>
                            <span>Python</span>
                            <span>React</span>
                            <span>Nodejs</span>
                            <span>Expressjs</span>
                            <span>EJS</span>
                            <span>MERN</span>
                            <span>Html/Css</span>
                        </div>
                    </div>
                    <div className={styles.project_list}>
                        {error && <p className="info error">{error}4564...</p>}
                        {loading && (
                            <p className="info">Fetching projects...</p>
                        )}
                        {!loading && !error && projects.length < 1 && (
                            <p className="info">Currently no projects.</p>
                        )}

                        {!loading && search && searchProject.length < 1 && (
                            <p className="info">No project for this search</p>
                        )}

                        {search && searchProject.length > 0 && (
                            <>
                                {searchProject.map((project) => {
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
                            </>
                        )}

                        {!search && (
                            <>
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
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function Projects() {
    return (
        <>
            <ProjectList />
            <Socials />
        </>
    );
}

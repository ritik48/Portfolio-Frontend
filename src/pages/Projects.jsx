import styles from "./Projects.module.css";

import Project from "../components/Project";
import Socials from "../components/Socials";

import { useState, useEffect } from "react";

const BACKEND = process.env.REACT_APP_BACKEND;

const project_tags = [
    "Python",
    "Reactjs",
    "Nodejs",
    "Expressjs",
    "EJS",
    "MERN",
    "Html/Css",
];

function ProjectList() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [projects, setProjects] = useState([]);

    const [search, setSearch] = useState("");
    const [searchProject, setSearchProject] = useState([]);
    const [selectedProject, setSelectedProject] = useState([]);

    const [selectedTopic, setSelectedTopic] = useState(null);

    function handleSelectTopic(topic) {
        setSelectedTopic((selected) => (selected !== topic ? topic : null));
    }

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

    // fecth project on search
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

        setSelectedTopic(null);
        setSearchProject([]);
        fetchProjects();

        return function () {
            controller.abort();
        };
    }, [search]);

    // fetch project on tag

    useEffect(() => {
        async function fetchProjects() {
            setError("");
            setLoading(true);
            try {
                const res = await fetch(
                    `${BACKEND}/projects/tags?tag=${selectedTopic}`
                );

                if (!res.ok) {
                    return setError("Invalid response");
                }

                const data = await res.json();
                setSelectedProject(data);

                setError("");
            } catch (err) {
                setError("Something went wrong");
            } finally {
                setLoading(false);
            }
        }
        if (selectedTopic == null) return;

        setSearchProject([]);
        setSelectedProject([]);
        fetchProjects();
    }, [selectedTopic]);

    // change page title
    useEffect(() => {
        document.title = "Ritik Raj | Projects";
    }, []);

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
                            {project_tags.map((tag) => (
                                <span
                                    className={
                                        selectedTopic !== null
                                            ? selectedTopic === tag
                                                ? styles.selected_tag
                                                : ""
                                            : ""
                                    }
                                    onClick={() => handleSelectTopic(tag)}
                                >
                                    {tag}
                                </span>
                            ))}
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

                        {!loading &&
                            !error &&
                            !selectedTopic &&
                            search &&
                            searchProject.length < 1 && (
                                <p className="info">
                                    No project for this search
                                </p>
                            )}

                        {!loading &&
                            !error &&
                            selectedTopic &&
                            selectedProject.length < 1 && (
                                <p className="info">No project for this Tag</p>
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

                        {selectedTopic && !loading && !error && (
                            <>
                                {selectedProject.map((project) => {
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

                        {!search && !selectedTopic && !loading && !error && (
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

import { useEffect, useReducer } from "react";

import styles from "./Projects.module.css";

import Project from "../components/Project";
import Socials from "../components/Socials";
import Loader from "../components/Loader";

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

const initial_state = {
    show_by: "all",
    status: "loading",
    projects: [],
    selectedTopic: null,
    search: "",
    message: "fecthing your projects...",
};

function reducer(state, action) {
    switch (action.type) {
        case "project/all":
            return {
                ...initial_state,
            };
        case "project/search":
            if (action.payload.length < 1) {
                return { ...initial_state, search: action.payload };
            }
            return {
                ...initial_state,
                show_by: "search",
                search: action.payload,
            };
        case "project/topic":
            return {
                ...initial_state,
                show_by: "topic",
                selectedTopic:
                    state.selectedTopic !== action.payload
                        ? action.payload
                        : null,
            };
        case "projectFetched":
            return {
                ...state,
                status: "active",
                projects: action.payload,
                message: "",
            };
        case "projectFailed":
            return {
                ...state,
                status: "error",
                projects: [],
                message: action.payload,
            };
        default:
            throw new Error("Wrong action type");
    }
}

function ProjectList() {
    const [
        { status, message, projects, selectedTopic, search, show_by },
        dispatch,
    ] = useReducer(reducer, initial_state);

    useEffect(() => {
        async function fetchProjects() {
            console.log("data = ");
            try {
                const res = await fetch(`${BACKEND}/projects`, {
                    method: "GET",
                });

                if (!res.ok) {
                    throw new Error("Cannot fetch projects");
                }
                const data = await res.json();

                dispatch({ type: "projectFetched", payload: data });
            } catch (error) {
                dispatch({ type: "projectFailed", payload: error.message });
            }
        }
        if (show_by !== "all") return;

        fetchProjects();
    }, [show_by]);

    // fecth project on search
    useEffect(() => {
        const controller = new AbortController();
        async function fetchProjects() {
            try {
                const res = await fetch(
                    `${BACKEND}/projects/search?q=${search}`,
                    {
                        signal: controller.signal,
                    }
                );

                if (!res.ok) {
                    throw new Error("Something went wrong. Try again");
                }
                const data = await res.json();
                dispatch({ type: "projectFetched", payload: data });
            } catch (error) {
                if (error.name !== "AbortError") {
                    dispatch({ type: "projectFailed", payload: error.message });
                }
            }
        }

        if (search.length < 1) {
            return;
        }

        fetchProjects();

        return function () {
            controller.abort();
        };
    }, [search]);

    // fetch project on tag
    useEffect(() => {
        async function fetchProjects() {
            try {
                const res = await fetch(
                    `${BACKEND}/projects/tags?tag=${selectedTopic}`
                );

                if (!res.ok) {
                    throw new Error("Invalid response");
                }

                const data = await res.json();

                dispatch({ type: "projectFetched", payload: data });
            } catch (error) {
                dispatch({ type: "projectFailed", payload: error.message });
            }
        }
        console.log("yes 1");
        if (show_by !== "topic") {
            return;
        }

        if (selectedTopic == null && show_by === "topic") {
            console.log("yes 2");
            return dispatch({ type: "project/all" });
        }

        fetchProjects();
    }, [selectedTopic, show_by]);

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
                            onChange={(e) =>
                                dispatch({
                                    type: "project/search",
                                    payload: e.target.value,
                                })
                            }
                        />
                        <div className={styles.project_tags}>
                            {project_tags.map((tag) => {
                                return (
                                    <span
                                        className={
                                            selectedTopic !== null
                                                ? selectedTopic === tag
                                                    ? styles.selected_tag
                                                    : ""
                                                : ""
                                        }
                                        onClick={() =>
                                            dispatch({
                                                type: "project/topic",
                                                payload: tag,
                                            })
                                        }
                                        key={Date.now() + Math.random() * 1000}
                                    >
                                        {tag}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                    <div className={styles.project_list}>
                        {status === "error" && (
                            <p className="info error">{message} 4564...</p>
                        )}
                        {status === "loading" && <Loader message={message} />}
                        {status === "active" && projects.length < 1 && (
                            <p className="info">Currently no projects.</p>
                        )}

                        {status === "active" && projects.length > 0 && (
                            <>
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

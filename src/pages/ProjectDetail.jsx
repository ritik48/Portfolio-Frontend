import { useParams } from "react-router-dom";
import styles from "./ProjectDetail.module.css";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

const BACKEND = process.env.REACT_APP_BACKEND;

export default function ProjectDetail() {
    const { id: project_id } = useParams();

    const [project, setProject] = useState(null);

    useEffect(() => {
        async function getProject() {
            const res = await fetch(BACKEND + "/projects/" + project_id, {
                method: "GET",
            });
            const data = await res.json();
            setProject(data);
        }
        getProject();
    }, [project_id]);

    // if (!project) return <h1>loading...</h1>;
    return (
        <section className={styles.project_detail}>
            <div className={styles.project_content}>
                {!project && <Loader message={"Please wait..."} />}
                {project && (
                    <>
                        <div className={styles.project_top}>
                            <img
                                src={BACKEND + project.image}
                                alt="project-img"
                            />
                        </div>
                        <div className={styles.project_bottom}>
                            <h3 className={styles.title}>{project.title}</h3>
                            <div className={styles.updated}>
                                <span className={styles.key}>
                                    Last updated:{" "}
                                    <span className={styles.date}>
                                        12th Dec 2023
                                    </span>
                                </span>
                            </div>
                            <div
                                className={styles.description}
                                dangerouslySetInnerHTML={{
                                    __html: project.description,
                                }}
                            />
                            {/* Linkify Text is a simple and convenient{" "}
                        <span className={styles.highlight}>text pasting </span>
                        service with customizable{" "} */}
                            {/* {project.description} */}
                            {/* <span className={styles.highlight}>
                            expiry options{" "}
                        </span>
                        , allowing you to control how long your links remain
                        active. */}

                            <div className={styles.tech_used}>
                                <span>Tech used:</span>
                                <div className={styles.tech_list}>
                                    {project &&
                                        project?.tags?.map((tag) => (
                                            <span className={styles.tech} key={tag}>
                                                {tag}
                                            </span>
                                        ))}
                                </div>
                            </div>
                            <a href={project.live} target="_blank" rel="noreferrer">
                                <button className={styles.btn}>
                                    Try it Now ↗️
                                </button>
                            </a>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}

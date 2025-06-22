import { useParams } from "react-router-dom";
import styles from "./ProjectDetail.module.css";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Socials from "../components/Socials";

const BACKEND = process.env.REACT_APP_BACKEND;

export default function ProjectDetail() {
  const { id: project_id } = useParams();
  const [project, setProject] = useState(null);
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    async function getProject() {
      const res = await fetch(BACKEND + "/projects/" + project_id);
      const data = await res.json();
      setProject(data);
    }
    getProject();
  }, [project_id]);

  const renderMedia = () => {
    // if (project.video && playVideo) {
    // Convert Google Drive file ID to embeddable URL

    // const embedUrl = "https://drive.google.com/file/d/1i4D9JDiMYlFb4dnl7pchad4WvvGamdY7/preview";

    if (playVideo && project.video) {
      return (
        <div className={styles.video_modal}>
          <div className={styles.close_btn} onClick={() => setPlayVideo(false)}>
            ✖
          </div>
          <iframe
            className={styles.video_iframe_modal}
            src={`${project.video}`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Project Video"
          ></iframe>
        </div>
      );
    }

    return (
      <div className={styles.image_wrapper} onClick={() => setPlayVideo(true)}>
        <img
          src={`${BACKEND}/images/${project.image}`}
          alt="project-img"
          className={styles.image}
        />
        {project.video && <div className={styles.overlay}>▶</div>}
      </div>
    );
  };

  return (
    <div className={styles.project_detail_outer}>
      <section className={styles.project_detail}>
        <div className={styles.project_content}>
          {!project && <Loader message={"Please wait..."} />}
          {project && (
            <>
              <div className={styles.project_top}>{renderMedia()}</div>
              <div className={styles.project_bottom}>
                <h3 className={styles.title}>{project.title}</h3>
                <div className={styles.updated}>
                  <span className={styles.key}>
                    Last updated:{" "}
                    <span className={styles.date}>
                      {new Date(project.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                        day: "numeric",
                      })}
                    </span>
                  </span>
                </div>
                <div
                  className={styles.description}
                  dangerouslySetInnerHTML={{
                    __html: project.description,
                  }}
                />

                <div className={styles.tech_used}>
                  <span>Tech used:</span>
                  <div className={styles.tech_list}>
                    {project.tags?.map((tag) => (
                      <span className={styles.tech} key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={styles.action_button}>
                  <a
                    href={project.github}
                    className={styles.source_code}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/github.svg" alt="" />
                  </a>
                  <a
                    href={project.live}
                    className={styles.btn}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Try it Now ↗️
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      <Socials />
    </div>
  );
}

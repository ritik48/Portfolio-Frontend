export default function Project({ github, live, title, image }) {
    return (
        <div className="project">
            <div className="project_img">
                <img
                    src={`${image}`}
                    alt=""
                />
            </div>
            <div className="project_detail">
                <div className="project_title">
                    {title}
                </div>
                <a
                    href={live}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src="/images/link.svg"
                        alt=""
                    />
                </a>
                <a
                    href={github}
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
}
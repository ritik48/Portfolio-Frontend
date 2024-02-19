import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Project({ github, live, title, image, id }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    const mainControl = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControl.start("visible");
        } else {
            mainControl.start("hidden");
        }
    }, [isInView, mainControl]);

    return (
        <motion.div
            className="project"
            ref={ref}
            variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
            }}
            initial="hidden"
            animate={mainControl}
            transition={{ duration: 0.5, delay: 0 }}
        >
            <Link to={"/projects/" + id} className="project_img">
                <img src={`${image}`} alt="" />
            </Link>
            <div className="project_detail">
                <Link to={"/projects/" + id}>
                    <div className="project_title">{title}</div>
                </Link>
                <a href={live} target="_blank" rel="noreferrer">
                    <img src="/images/link.svg" alt="" />
                </a>
                <a href={github} target="_blank" rel="noreferrer">
                    <img src="/images/github.svg" alt="" />
                </a>
            </div>
        </motion.div>
    );
}

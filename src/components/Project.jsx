import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Project({ github, live, title, image }) {
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
            <div className="project_img">
                <img src={`${image}`} alt="" />
            </div>
            <div className="project_detail">
                <div className="project_title">{title}</div>
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

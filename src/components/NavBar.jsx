import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

import { NavLink, Link } from "react-router-dom";

export default function NavBar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    const [showLogo, setShowLogo] = useState(true);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();

        if (latest > 20) {
            setShowLogo(false);
        } else {
            setShowLogo(true);
        }

        if (latest > previous && latest > 20) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <>
           
            <motion.nav
                initial="initial"
                variants={{
                    initial: {
                        x: "-50%",
                    },
                    visible: { y: 0 },
                    hidden: { y: "-140%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
            >
                <div className="container">
                    {showLogo && (
                        <Link className="logo" to={"/"}>
                             RR {""}
                        </Link>
                    )}
                    <ul>
                        <NavLink to={"/projects"}>
                            <li>Projects</li>
                        </NavLink>
                        <NavLink to={"/blogs"}>
                            <li>Blogs</li>
                        </NavLink>

                        <li>Contact</li>
                    </ul>
                </div>
            </motion.nav>
        </>
    );
}

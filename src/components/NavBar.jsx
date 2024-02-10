import {
    motion,
    useScroll,
    useMotionValueEvent,
    useInView,
    useAnimation,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { NavLink, Link } from "react-router-dom";

export default function NavBar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    const [showLogo, setShowLogo] = useState(true);


    // animate logo
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    const animateLogo = useAnimation();

    useEffect(() => {
        if (isInView || showLogo) {
            animateLogo.start("visible");
        } else {
            animateLogo.start("hidden");
        }
    }, [isInView, animateLogo, showLogo]);

    // animate nav bar show and hide
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
                            <motion.div
                                ref={ref}
                                variants={{
                                    hidden: { opacity: 0, x: "-40px" },
                                    visible: { opacity: 1, x: 0 },
                                }}
                                initial="hidden"
                                animate={animateLogo}
                            >
                                RR {""}
                            </motion.div>
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

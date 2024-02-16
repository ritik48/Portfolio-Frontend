import { useState, useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";

import styles from "./Blogs.module.css";
import Socials from "../components/Socials";
import Loader from "../components/Loader";

const BACKEND = process.env.REACT_APP_BACKEND;

function Blog({ title, tags, createdAt, link, image }) {
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

    function getFormattedDate() {
        const parsedDate = new Date(createdAt);

        // Function to get the suffix for the day (e.g., 'st', 'nd', 'rd', 'th')
        function getDaySuffix(day) {
            if (day >= 11 && day <= 13) {
                return "th";
            }
            switch (day % 10) {
                case 1:
                    return "st";
                case 2:
                    return "nd";
                case 3:
                    return "rd";
                default:
                    return "th";
            }
        }

        // Format the date as "14th Jan, 2024"
        const formattedDate = `${parsedDate.getDate()}${getDaySuffix(
            parsedDate.getDate()
        )} ${parsedDate.toLocaleString("default", {
            month: "short",
        })}, ${parsedDate.getFullYear()}`;

        return formattedDate;
    }

    const publishedDate = getFormattedDate(createdAt);
    return (
        <motion.div
            className={styles.blogs_content}
            ref={ref}
            variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
            }}
            initial="hidden"
            animate={mainControl}
            transition={{ duration: 0.5, delay: 0 }}
        >
            <div className={styles.blog_left}>
                <h3 className={styles.blog_title}>{title}</h3>
                <span className={styles.blog_date}>{publishedDate}</span>
                <div className={styles.blog_tags}>
                    {tags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                    ))}
                </div>
                <div className={styles.blog_read + " btn secondary"}>
                    <a
                        href={link}
                        className=""
                        target="_blank"
                        rel="noreferrer"
                    >
                        Read{" "}
                    </a>
                    <img
                        src="/images/link.svg"
                        alt=""
                        className={styles.icon}
                    />
                </div>
            </div>
            <div className={styles.blog_right}>
                <img src={image} alt="" />
            </div>
        </motion.div>
    );
}

function BlogList() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        setError("");
        setLoading(true);
        async function fetchBlogs() {
            try {
                const res = await fetch(`${BACKEND}/blogs?fetch=all`, {
                    method: "GET",
                });

                if (!res.ok) {
                    return setError("Unable to fetch blogs");
                }
                const data = await res.json();
                console.log(data);
                setBlogs(data);
                setLoading(false);
            } catch (error) {
                setError("Unable to fetch blogs");
            } finally {
                setLoading(false);
            }
        }
        fetchBlogs();
    }, []);

    // change page title
    useEffect(() => {
        document.title = "Ritik Raj | Blogs";
    }, []);

    return (
        <section className={styles.blogs_section}>
            <div className="container">
                <h2 className={styles.heading}>Blogs</h2>

                {error && (
                    <p className={`info error ${styles.info}`}>{error}</p>
                )}
                {loading && (
                    <Loader message={"fetching blogs..."}/>
                )}
                {!loading && !error && !blogs && (
                    <p className={`info ${styles.info}`}>Currently no blogs.</p>
                )}

                {!loading && !error && blogs.length && (
                    <>
                        {blogs.map((blog) => {
                            return (
                                <Blog
                                    title={blog.title}
                                    image={blog.image}
                                    link={blog.link}
                                    createdAt={blog.createdAt}
                                    tags={blog.tags}
                                    key={blog.image}
                                />
                            );
                        })}
                    </>
                )}
            </div>
        </section>
    );
}

export default function Blogs() {
    return (
        <>
            <BlogList />
            <Socials />
        </>
    );
}

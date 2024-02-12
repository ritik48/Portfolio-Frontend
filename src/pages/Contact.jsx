import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./Contact.module.css";
import { sendMail } from "../helper/sendMail";

export default function Contact() {
    const [user, setUser] = useState("");
    const [message, setMessage] = useState("");

    async function handleSend() {
        if (!user || !message) return;
        const mail = { user, message };
        try {
            await toast.promise(
                sendMail({ mail }),
                {
                    pending: "Email being sent...",
                    success: {
                        render({ data }) {
                            return data.message;
                        },
                    },
                    error: {
                        render({ data }) {
                            return data.message;
                        },
                    },
                },
                {
                    autoClose: 2000,
                }
            );
        } catch (error) {
            console.log("error");
        }
        setUser("");
        setMessage("");
    }

    return (
        <section className={styles.contact_section}>
            <div className="container">
                <h2>
                    Get in <span className={styles.title}>touch</span> 🤝
                </h2>
                <div className={styles.contact_content}>
                    <div className={styles.contact_message}>
                        <input
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            placeholder="Your Email"
                            className={`${styles.input} ${styles.email}`}
                        />
                        <input
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Your Message"
                            className={styles.input}
                        />
                    </div>
                    <button onClick={handleSend} className={styles.btn}>
                        Send Message {">"}
                    </button>
                </div>
            </div>
            <ToastContainer className={styles.toast} />
        </section>
    );
}

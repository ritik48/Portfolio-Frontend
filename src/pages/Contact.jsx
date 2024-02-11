import styles from "./Contact.module.css";

export default function Contact() {
    return (
        <section className={styles.contact_section}>
            <div className="container">
                <h2 >Get in <span className={styles.title}>touch</span> 🤝</h2>
                <div className={styles.contact_content}>
                    <div className={styles.contact_message}>
                        <input
                            placeholder="Your Email"
                            className={`${styles.input} ${styles.email}`}
                        />
                        <input placeholder="Message" className={styles.input} />
                    </div>
                    <button className={styles.btn}>Send Message {">"}</button>
                </div>
            </div>
        </section>
    );
}

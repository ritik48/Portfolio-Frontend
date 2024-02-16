import styles from "./Loader.module.css";

export default function Loader({ message }) {
    return (
        <div className={styles.loader_content}>
            <div className={styles.loader}>
                <div className={styles.square} id={styles.sq1}></div>
                <div className={styles.square} id={styles.sq2}></div>
                <div className={styles.square} id={styles.sq3}></div>
                <div className={styles.square} id={styles.sq4}></div>
                <div className={styles.square} id={styles.sq5}></div>
                <div className={styles.square} id={styles.sq6}></div>
                <div className={styles.square} id={styles.sq7}></div>
                <div className={styles.square} id={styles.sq8}></div>
                <div className={styles.square} id={styles.sq9}></div>
            </div>
            <p className="info">{message}</p>
        </div>
    );
}

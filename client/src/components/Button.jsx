import styles from "./../styles/Button.module.css";

function Button({ children }) {
    return (
        <button type="submit" className={styles.submitButton}>
            {children}
        </button>
    );
}

export default Button;

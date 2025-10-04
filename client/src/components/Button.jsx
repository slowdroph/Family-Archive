import styles from "./../styles/Button.module.css"

function Button({ children, variant = "primary", href }) {
    return (
        <a href={href} className={`${styles.button} ${styles[variant]}`}>
            {children}
        </a>
    );
}

export default Button;

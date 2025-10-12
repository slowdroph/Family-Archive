import { Link } from "react-router";
import styles from "./../styles/Logo.module.css";

function Logo({ size = "" }) {
    return (
        <Link
            to="/"
            className={`${styles.logo} `}
            style={{ fontSize: `${size}` }}
        >
            🖼️ family archive
        </Link>
    );
}

export default Logo;

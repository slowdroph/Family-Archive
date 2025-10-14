import { Link } from "react-router";
import styles from "./../styles/Navbar.module.css";

function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                {/* <img src="/logo.png" alt="logo" className={styles.icon} /> */}
                🖼️
                <span>Family Archive</span>
            </div>

            <ul className={styles.links}>
                <li>
                    <Link to="albumpage">Explore Albums</Link>
                </li>
                <li>
                    <Link to="login">Login</Link>
                </li>
                <li>
                    <Link className={styles.signup} to="register">
                        Sign up
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

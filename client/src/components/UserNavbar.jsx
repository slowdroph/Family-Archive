import styles from "./../styles/UserNavbar.module.css";
import Logo from "./Logo";

function UserNavbar() {
    return (
        <nav className={styles.navBar}>
            <Logo size="2.8rem" />
            <div className={styles.user_container}>
                <p>caique estrela</p>
                <span className={styles.userImageContainer}>
                    <img
                        src="/images/user_icon.png"
                        alt="user's profile photo"
                    />
                </span>
            </div>
        </nav>
    );
}

export default UserNavbar;

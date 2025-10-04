import Button from "../components/Button";
import Navbar from "../components/Navbar";
import styles from "./../styles/pages/Homepage.module.css";

function Homepage() {
    return (
        <header className={styles.header}>
            <Navbar />
            <div className={styles.hero}>
                <h1>Your family's memories, all in one place.</h1>
                <p>
                    Enjoy unlimited photo storage and share your favorite
                    moments with loved ones, effortlessly. Never worry about
                    running out of space again.
                </p>
                <div className={styles.actions}>
                    <Button href="#">
                        Sign Up for Free
                    </Button>
                    <Button href="#" variant="secondary">
                        Explore Family Albums
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Homepage;

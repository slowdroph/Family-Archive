import Button from "../components/Button";
import Navbar from "../components/Navbar";
import styles from "./../styles/pages/Homepage.module.css";

function Homepage() {
    return (
        <>
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
                        <Button href="#">Sign Up for Free</Button>
                        <Button href="#" variant="secondary">
                            Explore Family Albums
                        </Button>
                    </div>
                </div>
            </header>

            <section className={styles.section_services}>
                <div className={styles.heading_container}>
                    <h2>your memories, safe and sound</h2>
                    <p>
                        We offer a suite of services designed to make photo
                        storage and sharing a breeze for your family.
                    </p>
                </div>

                <div className={styles.services_box}>
                    <div className={styles.services_container}>
                        <span>
                            <svg
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                ></path>
                            </svg>
                        </span>
                        <h3>secure cloud storage</h3>
                        <p>
                            Keep your photos safe in our secure cloud. Access
                            them from anywhere, at any time, on any device.
                        </p>
                    </div>
                    <div className={styles.services_container}>
                        <span>
                            <svg
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.368a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                ></path>
                            </svg>
                        </span>
                        <h3>easy sharing</h3>
                        <p>
                            Share albums with family and friends with a simple
                            link. They can view, download, and even add their
                            own photos.
                        </p>
                    </div>
                    <div className={styles.services_container}>
                        <span>
                            <svg
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                ></path>
                            </svg>
                        </span>
                        <h3>free up device space</h3>
                        <p>
                            With unlimited storage, you can safely remove photos
                            from your devices to free up precious space.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.section_aside}>
                <div className={styles.aside_box}>
                    <div className={styles.image_container}>
                        <img src="/images/family_album_01.jpg" alt="family viewing old photos" />
                    </div>

                    <div className={styles.aside_container}>
                        <h2>preserve you family's legacy</h2>
                        <p className={styles.aside_desc}>
                            Digital photos are fragile. Hard drives fail, phones
                            get lost. Our service ensures your family's memories
                            are not just stored, but preserved for generations
                            to come.
                        </p>
                        <p className={styles.paragraph_desc}>
                            ✔️ Create a digital time capsule of your family's
                            history.
                        </p>
                        <p className={styles.paragraph_desc}>
                            ✔️ Collaborate with family members to build a
                            complete collection.
                        </p>
                        <p className={styles.paragraph_desc}>
                            ✔️ Pass down your albums to future generations.
                        </p>
                    </div>
                </div>
            </section>

            <footer className={styles.footer}>
                <p>&copy; {new Date().getUTCFullYear()} Family Archive. All rights reserved.</p>
            </footer>
        </>
    );
}

export default Homepage;

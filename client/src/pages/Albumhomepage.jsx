import { useState } from "react";
import { Link } from "react-router";
import UserNavbar from "../components/UserNavbar";
import AlbumCreateModal from "../components/AlbumCreateModal";
import styles from "./../styles/pages/Albumhomepage.module.css";

function Albumhomepage() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <header>
                <UserNavbar />
            </header>

            <main className={styles.album_section}>
                <div className={styles.album_container}>
                    <div>
                        <h1>
                            <span className={styles.heading}>
                                your photo albums
                            </span>
                            <span className={styles.heading}>
                                A collection of your cherished memories.
                            </span>
                        </h1>
                    </div>

                    <button
                        className={styles.btn}
                        type="button"
                        onClick={() => setShowModal(true)}
                    >
                        <span>+ create new album</span>
                    </button>
                </div>

                <div className={styles.photos_container}>
                    {/* mock de álbuns */}
                    {[...Array(8)].map((_, i) => (
                        <Link
                            key={i}
                            to="/album/1"
                            className={styles.photo_box}
                        >
                            <img src="/images/cover.jpg" alt="" />
                            <h3>family vacation 2025</h3>
                            <p>2 photos</p>
                        </Link>
                    ))}
                </div>
            </main>

            {showModal && (
                <AlbumCreateModal onClose={() => setShowModal(false)} />
            )}
        </>
    );
}

export default Albumhomepage;

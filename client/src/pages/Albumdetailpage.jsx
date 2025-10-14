import { useState } from "react";
import UserNavbar from "../components/UserNavbar";
import styles from "./../styles/pages/Albumdetailpage.module.css";
import { Link } from "react-router";

function Albumdetailpage() {
    // dados mockados temporários
    const album = {
        title: "Family Vacation 2025",
        description: "A wonderful trip full of unforgettable moments.",
        photos: [
            { id: 1, src: "/images/cover.jpg", caption: "At the beach" },
            { id: 2, src: "/images/family_01.jpg", caption: "Mountain hike" },
            { id: 3, src: "/images/family_02.jpg", caption: "Family dinner" },
            { id: 4, src: "/images/family_album_01.jpg", caption: "City tour" },
        ],
    };

    const [selectedPhoto, setSelectedPhoto] = useState(null);

    function openModal(photo) {
        setSelectedPhoto(photo);
    }

    function closeModal() {
        setSelectedPhoto(null);
    }

    return (
        <>
            <header>
                <UserNavbar />
            </header>

            <main className={styles.album_detail_section}>
                <div className={styles.album_header_box}>
                    <div className={styles.album_header}>
                        <h1>{album.title}</h1>
                        <p>{album.description}</p>
                    </div>

                    <Link
                        className={styles.photo_link}
                        to={`/album/1/add`}
                    >
                        + add a photo
                    </Link>
                </div>

                <div className={styles.gallery_grid}>
                    {album.photos.map((photo) => (
                        <div
                            key={photo.id}
                            className={styles.photo_card}
                            onClick={() => openModal(photo)}
                        >
                            <img src={photo.src} alt={photo.caption} />
                            <p>{photo.caption}</p>
                        </div>
                    ))}
                </div>

                {selectedPhoto && (
                    <div className={styles.modal_overlay} onClick={closeModal}>
                        <div
                            className={styles.modal_content}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedPhoto.src}
                                alt={selectedPhoto.caption}
                            />
                            <p>{selectedPhoto.caption}</p>
                            <button
                                className={styles.close_button}
                                onClick={closeModal}
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </>
    );
}

export default Albumdetailpage;

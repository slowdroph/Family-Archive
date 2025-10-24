import { useState } from "react";
import { Link } from "react-router";
import UserNavbar from "../components/UserNavbar";
import AlbumCreateModal from "../components/AlbumCreateModal";
import styles from "./../styles/pages/Albumhomepage.module.css";
import { useQuery } from "@tanstack/react-query";
import { getUserAlmbums } from "../utils/apiUserAlbums";

function Albumhomepage() {
    const [showModal, setShowModal] = useState(false);

    const userId = 1;

    const {
        data: albums,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["albums", userId],
        queryFn: () => getUserAlmbums(userId),
    });

    if (error) return <p>Erro: {error.message}</p>;
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
                    {isLoading ? (
                        <p>Carregando álbuns...</p>
                    ) : (
                        albums.map((album) => (
                            <Link
                                key={album.id}
                                to={`album/${album.id}`}
                                className={styles.photo_box}
                            >
                                <img src="/images/cover.jpg" alt="" />
                                <h3>{album.title}</h3>
                                <p>{album.description}</p>
                            </Link>
                        ))
                    )}
                </div>
            </main>

            {showModal && (
                <AlbumCreateModal onClose={() => setShowModal(false)} />
            )}
        </>
    );
}

export default Albumhomepage;

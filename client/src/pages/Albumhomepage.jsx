import { useState } from "react";
import { Link } from "react-router";
import UserNavbar from "../components/UserNavbar";
import AlbumCreateModal from "../components/AlbumCreateModal";
import styles from "./../styles/pages/Albumhomepage.module.css";
import { useQueryClient } from "@tanstack/react-query";
import { useAlbums } from "../hooks/useAlbums";

function Albumhomepage() {
    const [showModal, setShowModal] = useState(false);

    const queryClient = useQueryClient();
    const user = queryClient.getQueryData(["user"]);
    const userId = user?.id;

    const { data: albums, isLoading, error } = useAlbums(userId);

    if (!userId) return <p>Você precisa estar logado.</p>;
    if (isLoading) return <p>Carregando álbuns...</p>;
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

import { useState } from "react";
import styles from "./../styles/AlbumCreateModal.module.css";

function AlbumCreateModal({ onClose }) {
    const [albumData, setAlbumData] = useState({
        title: "",
        description: "",
        cover: null,
    });

    const [preview, setPreview] = useState(null);

    function handleChange(e) {
        const { name, value } = e.target;
        setAlbumData((prev) => ({ ...prev, [name]: value }));
    }

    function handleFileChange(e) {
        const file = e.target.files[0];
        if (file) {
            setAlbumData((prev) => ({ ...prev, cover: file }));
            setPreview(URL.createObjectURL(file));
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Album created:", albumData);
        onClose(); 
    }

    function handleBackdropClick(e) {
        if (e.target === e.currentTarget) onClose(); 
    }

    return (
        <div className={styles.backdrop} onClick={handleBackdropClick}>
            <div className={`${styles.modal} ${styles.show}`}>
                <button onClick={onClose} className={styles.closeBtn}>
                    ✕
                </button>
                <h2>Create New Album</h2>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Album Title</label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        placeholder="e.g. Summer Trip 2025"
                        value={albumData.title}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Describe your album..."
                        value={albumData.description}
                        onChange={handleChange}
                    />

                    <label htmlFor="cover">Album Cover</label>
                    <input
                        id="cover"
                        name="cover"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                    />

                    {preview && (
                        <div className={styles.previewBox}>
                            <img src={preview} alt="Album cover preview" />
                        </div>
                    )}

                    <button type="submit" className={styles.submitBtn}>
                        Create Album
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AlbumCreateModal;

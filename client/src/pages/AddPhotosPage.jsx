import { useState } from "react";
import { useParams, Link } from "react-router";
import styles from "../styles/pages/AddPhotosPage.module.css";

function AddPhotosPage() {
    // const { albumId } = useParams();
    const [photos, setPhotos] = useState([]);
    const [preview, setPreview] = useState([]);

    function handleFileChange(e) {
        const files = Array.from(e.target.files);
        setPhotos(files);

        const previews = files.map((file) => URL.createObjectURL(file));
        setPreview(previews);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Fotos adicionadas:", photos);
    }

    return (
        <section className={styles.container}>
            <header className={styles.header}>
                <Link to={`/album/1`} className={styles.backBtn}>
                    ← Back to Album
                </Link>
                <h1>Add Photos to Album</h1>
            </header>

            <form onSubmit={handleSubmit} className={styles.uploadForm}>
                <label htmlFor="photos" className={styles.uploadBox}>
                    <p>Click or drag & drop photos here</p>
                    <input
                        id="photos"
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleFileChange}
                    />
                </label>

                {preview.length > 0 && (
                    <div className={styles.previewGrid}>
                        {preview.map((src, index) => (
                            <img key={index} src={src} alt={`Preview ${index}`} />
                        ))}
                    </div>
                )}

                {photos.length > 0 && (
                    <button type="submit" className={styles.submitBtn}>
                        Add {photos.length} photo{photos.length > 1 ? "s" : ""}
                    </button>
                )}
            </form>
        </section>
    );
}

export default AddPhotosPage;

import { useState } from "react";
import styles from "./../styles/pages/Loginpage.module.css";
import { Link } from "react-router";

function Loginpage() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setError("");
        console.log("Form data:", formData);
    }

    return (
        <section className={styles.register_section}>
            <div className={styles.register_box}>
                <div className={styles.intro_box}>
                    <h1>Connecting your ife's best moments</h1>
                </div>

                <div className={styles.form_box}>
                    <div className={styles.return_box}>
                        <Link to="/">🖼️ family archive</Link>
                        <p>
                            Sign into your account below to start using Family
                            Archive.
                        </p>
                    </div>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />

                        {error && <p className={styles.error}>{error}</p>}

                        <button type="submit" className={styles.submitButton}>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Loginpage;

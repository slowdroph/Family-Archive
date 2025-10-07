import { useState } from "react";
import styles from "./../styles/pages/Registerpage.module.css";
import { Link } from "react-router";

function Registerpage() {
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
                    <h1>Join today and keep connected to your memories</h1>
                </div>

                <div className={styles.form_box}>
                    <div className={styles.return_box}>
                        <Link to="/">🖼️ family archive</Link>
                        <p>create an account and start storing your photos.</p>
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

                        <label htmlFor="email">Email Address:</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={formData.email}
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

                        <label htmlFor="confirmPassword">
                            Confirm Password:
                        </label>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />

                        {error && <p className={styles.error}>{error}</p>}

                        <button type="submit" className={styles.submitButton}>
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Registerpage;

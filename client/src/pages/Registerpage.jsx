import { useState } from "react";
import styles from "./../styles/pages/Registerpage.module.css";
import { Link } from "react-router";
import Button from "../components/Button";
import Logo from "../components/Logo";
import axios from "axios";
function Registerpage() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            setSuccess("");
            return;
        }

        setError("");
        setSuccess("");

        try {
            // Envia os dados para o backend
            const response = await axios.post("http://localhost:3001/register", {
                name: formData.username, // O backend espera "name"
                email: formData.email,
                password: formData.password,
            });

            setSuccess(response.data.message);
            setFormData({
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
        } catch (err) {
            setError(
                err.response?.data?.message ||
                "Erro ao registrar. Tente novamente."
            );
            setSuccess("");
        }
    }

    return (
        <section className={styles.register_section}>
            <div className={styles.register_box}>
                <div className={styles.intro_box}>
                    <h1>Join today and keep connected to your memories</h1>
                </div>

                <div className={styles.form_box}>
                    <div className={styles.return_box}>
                        <Logo size="2.8rem" />
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
                        {success && <p className={styles.success}>{success}</p>}

                        <Button>Register</Button>

                        <p className={styles.switchForm}>
                            Already have an account?{" "}
                            <Link to="/login" className={styles.switchLink}>
                                Log in here.
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
export default Registerpage;

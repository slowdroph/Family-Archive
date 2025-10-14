import { useState } from "react";
import styles from "./../styles/pages/Loginpage.module.css";
import { Link } from "react-router";
import Button from "../components/Button";
import Logo from "../components/Logo";
import axios from "axios";

function Loginpage() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");
        setSuccess("");

        try {
            const response = await axios.post("http://localhost:3001/login", {
                email: formData.email,
                password: formData.password,
            });

            setSuccess(response.data.message);
            // Aqui você pode salvar o usuário logado no estado global/contexto/localStorage se quiser
            setFormData({
                email: "",
                password: "",
            });
        } catch (err) {
            setError(
                err.response?.data?.message ||
                "Erro ao fazer login. Tente novamente."
            );
            setSuccess("");
        }
    }

    return (
        <section className={styles.login_section}>
            <div className={styles.login_box}>
                <div className={styles.intro_box}>
                    <h1>Welcome back!</h1>
                </div>

                <div className={styles.form_box}>
                    <div className={styles.return_box}>
                        <Logo size="2.8rem" />
                        <p>Log in to access your albums and photos.</p>
                    </div>
                    <form className={styles.form} onSubmit={handleSubmit}>
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

                        {error && <p className={styles.error}>{error}</p>}
                        {success && <p className={styles.success}>{success}</p>}

                        <Button>Login</Button>

                        <p className={styles.switchForm}>
                            Don't have an account?{" "}
                            <Link to="/register" className={styles.switchLink}>
                                Register here.
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Loginpage;

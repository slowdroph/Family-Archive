import { useState } from "react";
import styles from "./../styles/pages/Loginpage.module.css";
import { Link } from "react-router";
import Button from "../components/Button";
import Logo from "../components/Logo";
import { useLogin } from "../features/authentication/useLogin";

function Loginpage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, isLoading } = useLogin();

    function handleSubmit(e) {
        e.preventDefault();
        if (!email || !password) return;
        login(
            { email, password },
            {
                onSettled: () => {
                    setEmail("");
                    setPassword("");
                },
            }
        );
    }

    return (
        <section className={styles.register_section}>
            <div className={styles.register_box}>
                <div className={styles.intro_box}>
                    <h1>Connecting your Life's best moments</h1>
                </div>

                <div className={styles.form_box}>
                    <div className={styles.return_box}>
                        <Logo size="2.8rem" />
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isLoading}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={isLoading}
                            required
                        />

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

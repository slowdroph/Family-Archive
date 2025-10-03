import styles from "./../styles/Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        {/* <img src="/logo.png" alt="logo" className={styles.icon} /> */}
        🖼️
        <span>Family Archive</span>
      </div>

      <ul className={styles.links}>
        <li>
          <a href="#">Explore Albums</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <a href="#" className={styles.signup}>Sign up</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

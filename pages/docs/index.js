import styles from "../../styles/docs.module.css";
import Image from "next/image";
import Link from "next/link";
import VunshLogo from "../../public/Vunsh.svg";
import SearchIcon from "../../public/Search.svg";
import DiscordIcon from "../../public/Discord.svg";

export default function DocsPage() {
  return (
    <div className={styles.page}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        {/* Left: Logo */}
        <div className={styles.navLeft}>
          <Image src={VunshLogo} alt="Vunsh" width={40} height={40} />
        </div>

        {/* Center: Search bar */}
        <div className={styles.navCenter}>
          <div className={styles.searchWrapper}>
            <Image
              src={SearchIcon}
              alt="Search"
              width={18}
              height={18}
              className={styles.searchIcon}
            />
            <input
              type="text"
              placeholder="Search..."
              className={styles.searchInput}
            />
          </div>
        </div>

<div className={styles.navRight}>
  <Link href="/" className={styles.navButton}>
    Home
  </Link>
  <Link href="/commands" className={styles.navButton}>
    Commands
  </Link>

  {/* Disabled but highlighted Documentation button */}
  <span className={`${styles.navButton} ${styles.active} ${styles.disabledButton}`}>
    Documentation
  </span>

  <Link href="/status" className={styles.navButton}>
    Status
  </Link>
  <Link
    href="/support"
    className={`${styles.navButton} ${styles.supportButton}`}
    style={{ color: "#1a0d2f" }}
  >
    <Image
      src={DiscordIcon}
      alt="Discord"
      width={18}
      height={18}
      style={{ marginRight: "6px" }}
    />
    Support
  </Link>
</div>


      </nav>

      <div className={styles.separator}></div>
    </div>
  );
}

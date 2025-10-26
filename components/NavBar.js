"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import DiscordIcon from "../public/Discord.svg";
import styles from "../styles/navbar.module.css";

export default function NavBar() {
  const router = useRouter();
  const currentPage = router.pathname;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Commands", path: "/commands" },
    { name: "Documentation", path: "/docs" },
    { name: "Status", path: "/status" },
    { name: "Support", path: "https://discord.gg/jfkFJXjVnx", external: true, isSupport: true },
  ];

  return (
    <nav className={styles.navbar}>
      <ul>
        {navItems.map((item) => {
          const linkClass = `${item.isSupport ? styles.support : ""} ${
            !item.external && currentPage === item.path ? styles.active : ""
          }`;

          return (
            <li key={item.path}>
              {item.external ? (
                <a
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {item.isSupport && (
                    <Image
                      src={DiscordIcon}
                      alt="Discord"
                      width={18}
                      height={18}
                      style={{ marginRight: "6px" }}
                    />
                  )}
                  {item.name}
                </a>
              ) : (
                <Link href={item.path} className={linkClass}>
                  {item.isSupport && (
                    <Image
                      src={DiscordIcon}
                      alt="Discord"
                      width={18}
                      height={18}
                      style={{ marginRight: "6px" }}
                    />
                  )}
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

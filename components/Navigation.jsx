import Link from "next/link";

export default function Navigation({ styles, navigationLinks }) {
  return (
    <nav className={styles["navigation-bar"]}>
      <div className={styles["navigation-logo"]}>
        <img src={navigationLinks.logo.src} alt={navigationLinks.logo.alt} />
      </div>
      <div className={styles["navigation-links"]}>
        {navigationLinks.links.map((link) => (
          <Link href={link.href}>
            <a>{link.display}</a>
          </Link>
        ))}
      </div>
    </nav>
  );
}

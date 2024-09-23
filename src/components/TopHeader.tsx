import styles from "./TopHeader.module.scss";

const socialMedia = [
  {
    link: "https://www.facebook.com/OtotoEditions/",
    name: "facebook",
    icon: "icons/facebook.svg",
  },
  {
    link: "https://twitter.com/ototoedition",
    name: "twitter",
    icon: "icons/twitter.svg",
  },
  {
    link: "https://www.instagram.com/ototoeditions/",
    name: "instagram",
    icon: "icons/instagram.svg",
  },
];

function TopHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {socialMedia.map((site) => (
          <a href={site.name} className={styles.social}>
            <img src={site.icon} alt={`logo of ${site.name} `} />
          </a>
        ))}
      </div>
    </header>
  );
}

export default TopHeader;

import { useState, useEffect } from "react";
import styles from "./SocialStickyLink.module.scss";
import Loader from "./Loader";

type socialType = { link: string; name: string; icon: string };

async function fetchSocialMedia(): Promise<socialType[]> {
  return [
    {
      link: "https://www.facebook.com/OtotoEditions/",
      name: "facebook",
      icon: "/icons/facebook.svg",
    },
    {
      link: "https://twitter.com/ototoedition",
      name: "twitter",
      icon: "/icons/twitter.svg",
    },
    {
      link: "https://www.instagram.com/ototoeditions/",
      name: "instagram",
      icon: "/icons/instagram.svg",
    },
  ];
}

function SocialStickyLink() {
  const [socialMedia, setSocialMedia] = useState<socialType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSocialMedia()
      .then((data) => {
        setSocialMedia(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load social media icons.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <header className={styles.header}>
        <Loader />
      </header>
    );
  }

  if (error) {
    return (
      <header className={styles.header}>
        <Loader />
      </header>
    );
  }

  return (
    <header className={styles.topHeader}>
      <div className={styles.container}>
        {socialMedia.map((site, i) => (
          <a
            href={site.link}
            className={`${styles.social} ${i == 0 ? styles.left : ""} ${
              i == socialMedia.length - 1 ? styles.right : ""
            }`}
            key={site.name + i}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={site.icon} alt={`logo of ${site.name}`} />
          </a>
        ))}
      </div>
    </header>
  );
}

export default SocialStickyLink;

import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: (
      <>
        <a href="https://www.youtube.com/channel/UC8OOBdn0YNSUszZV98a3CLA">
          YouTube
        </a>
      </>
    ),
    imageUrl: "img/gb/youtube_cube.png",
    description: (
      <>
        Subscribe to us on Youtube and follow us as we search for the ultimate
        in geeky passion that lights the great beacon!
      </>
    ),
  },
  {
    title: (
      <>
        <a href="https://www.twitch.tv/nixiepixel">Twitch</a>
      </>
    ),
    imageUrl: "img/gb/gaming_cube.png",
    description: (
      <>
        Join us on Twitch and see our shenanigans live! Come and geek out with
        us live and join our new geeky Twitch gaming community!
      </>
    ),
  },
  {
    title: (
      <>
        <a href="https://discord.gg/geekbeacon">Discord</a>
      </>
    ),
    imageUrl: "img/gb/discord_cube.png",
    description: (
      <>
        Come join us live on Discord! Be involved with our community and join in
        with our Geeky Shenanigans live on Discord! Come join our squirrels.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="GeekBeacon Community Documentation and News"
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <img src="/img/official.png" width="40%" height="40%" />
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <p className="hero__subtitle">
            <a href="/docs/welcome">Getting Started</a>
          </p>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;

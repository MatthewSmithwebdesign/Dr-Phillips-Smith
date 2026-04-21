import Image from 'next/image';
import styles from './Hero.module.css';

interface Profile {
  name: string;
  title?: string;
  institution?: string;
  tagline?: string;
  heroImage?: string;
}

export default function Hero({ profile }: { profile: Profile }) {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.greeting}>Hello, I&apos;m</h1>
          <h1 className={styles.name}>{profile.name}</h1>
          {(profile.title || profile.institution) && (
            <p className={styles.title}>
              {profile.title}{profile.title && profile.institution && ' • '}{profile.institution}
            </p>
          )}
          <p className={styles.tagline}>{profile.tagline}</p>
          <div className={styles.buttons}>
            <a href="#publications" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Get in Touch
            </a>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src={profile.heroImage || '/images/halima-hero.jpeg'}
              alt={profile.name}
              width={400}
              height={500}
              className={styles.image}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
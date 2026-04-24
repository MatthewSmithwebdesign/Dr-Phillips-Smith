import Image from 'next/image';
import styles from './About.module.css';

interface Education {
  degree: string;
  institution: string;
  year: string;
}

interface Profile {
  name: string;
  bio: string | string[];
  education: Education[];
  researchInterests: string[];
  heroImage?: string;
  title?: string;
  institution?: string;
  tagline?: string;
}

export default function About({ profile }: { profile: Profile }) {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <h2 className="section-title">About Me</h2>
        
        <div className={styles.content}>
          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <Image
                src={profile.heroImage || '/images/hero.jpg'}
                alt={profile.name}
                fill
                className={styles.image}
              />
            </div>
          </div>
          
          <div className={styles.bioSection}>
            {Array.isArray(profile.bio) ? (
              profile.bio.map((paragraph, i) => (
                <p key={i} className={styles.bio}>{paragraph}</p>
              ))
            ) : (
              <p className={styles.bio}>{profile.bio}</p>
            )}
            
            <div className={styles.education}>
              <h3>Education</h3>
              <div className={styles.timeline}>
                {profile.education.map((edu, index) => (
                  <div key={index} className={styles.timelineItem}>
                    <span className={styles.year}>{edu.year}</span>
                    <div className={styles.details}>
                      <strong>{edu.degree}</strong>
                      <span>{edu.institution}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={styles.interests}>
              <h3>Research Interests</h3>
              <div className={styles.tags}>
                {profile.researchInterests.map((interest, index) => (
                  <span key={index} className="tag">{interest}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
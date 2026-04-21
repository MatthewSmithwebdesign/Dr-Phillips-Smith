import styles from './Certifications.module.css';

interface Certification {
  id: number;
  name: string;
  issuer: string;
  year?: string;
  credentialId?: string;
  expires?: string;
  skills?: string[];
}

export default function Certifications({ certifications }: { certifications: Certification[] }) {
  return (
    <section className={styles.certifications} id="certifications">
      <div className={styles.container}>
        <h2 className="section-title">Certifications</h2>
        
        <div className={styles.grid}>
          {certifications.map((cert) => (
            <div key={cert.id} className={styles.card}>
              <h3 className={styles.name}>{cert.name}</h3>
              <p className={styles.issuer}>{cert.issuer}</p>
              {cert.credentialId && (
                <p className={styles.credential}>Credential ID: {cert.credentialId}</p>
              )}
              {cert.year && (
                <p className={styles.year}>Issued {cert.year}</p>
              )}
              {cert.expires && (
                <p className={styles.year}>Expires {cert.expires}</p>
              )}
              {cert.skills && cert.skills.length > 0 && (
                <div className={styles.skills}>
                  {cert.skills.map((skill, index) => (
                    <span key={index} className="tag">{skill}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
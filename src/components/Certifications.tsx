'use client';

import { useState } from 'react';
import styles from './Certifications.module.css';

interface Certification {
  id: number;
  name: string;
  issuer: string;
  year?: string;
  credentialId?: string;
}

const INITIAL_SHOWN = 10;

export default function Certifications({ certifications }: { certifications: Certification[] }) {
  const [showAll, setShowAll] = useState(false);
  const shown = showAll ? certifications : certifications.slice(0, INITIAL_SHOWN);
  const remaining = certifications.length - INITIAL_SHOWN;

  return (
    <section className={styles.certifications} id="certifications">
      <div className={styles.container}>
        <h2 className="section-title">Certifications</h2>
        
        <div className={styles.grid}>
          {shown.map((cert) => (
            <div key={cert.id} className={styles.card}>
              <h3 className={styles.name}>{cert.name}</h3>
              <p className={styles.issuer}>{cert.issuer}</p>
              {cert.credentialId && (
                <p className={styles.credential}>Credential ID: {cert.credentialId}</p>
              )}
              {cert.year && (
                <p className={styles.year}>Issued {cert.year}</p>
              )}
            </div>
          ))}
        </div>

        {!showAll && remaining > 0 && (
          <button onClick={() => setShowAll(true)} className={styles.showMore}>
            Show {remaining} more certifications
          </button>
        )}
      </div>
    </section>
  );
}
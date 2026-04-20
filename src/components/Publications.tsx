import styles from './Publications.module.css';

interface Publication {
  id: number;
  title: string;
  journal: string;
  year: string;
  abstract: string;
  url: string;
}

export default function Publications({ publications }: { publications: Publication[] }) {
  return (
    <section className={styles.publications} id="publications">
      <div className={styles.container}>
        <h2 className="section-title">Publications / Lit</h2>
        
        <div className={styles.list}>
          {publications.map((pub) => (
            <article key={pub.id} className={styles.card}>
              <div className={styles.header}>
                <span className={styles.year}>{pub.year}</span>
                <span className={styles.journal}>{pub.journal}</span>
              </div>
              <h3 className={styles.title}>{pub.title}</h3>
              <p className={styles.abstract}>{pub.abstract}</p>
              <a 
                href={pub.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.link}
              >
                Read Article &rarr;
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
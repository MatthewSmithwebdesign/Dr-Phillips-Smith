import styles from './Contact.module.css';

interface Settings {
  email: string;
  siteUrl?: string;
  linkedin?: string;
}

export default function Contact({ settings }: { settings: Settings }) {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <h2 className="section-title">Get In Touch</h2>
        
        <div className={styles.content}>
          <div className={styles.emailCard}>
            <div className={styles.iconWrapper}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <h3>Email Me</h3>
            <p>Feel free to reach out for collaborations, questions, or just to say hello.</p>
            <a href={`mailto:${settings.email}`} className={styles.emailLink}>
              {settings.email}
            </a>
          </div>

          <div className={styles.links}>
            {settings.linkedin && (
              <a 
                href={settings.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            )}
            
            
          </div>
        </div>
      </div>
    </section>
  );
}
import styles from './Footer.module.css';

interface FooterProps {
  name?: string;
}

export default function Footer({ name = "Dr. Halima Phillips-Smith" }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
    </footer>
  );
}
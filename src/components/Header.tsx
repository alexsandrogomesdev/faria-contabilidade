import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <section className={styles.header_section}>
        <div>
          <p>FARIA</p>
          <span>GESTÃO CONTÁBIL</span>
        </div>
        <nav>
          <span>Diferenciais</span>
          <span>Soluções</span>
          <span>Institucional</span>
          <span>Contato</span>
        </nav>
        <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
          Falar com especialista
        </a>
      </section>
    </header>
  );
}

"use client";

import { RefObject } from "react";
import styles from "./Header.module.css";

interface Refs {
  differentials: React.RefObject<HTMLDivElement | null>;
}
interface Props {
  scrollTo: (target: string) => void;
}

export default function Header({ scrollTo }: Props) {
  return (
    <header className={styles.header}>
      <section className={styles.header_section}>
        <div>
          <p>FARIA</p>
          <span>GESTÃO CONTÁBIL</span>
        </div>
        <nav>
          <span onClick={() => scrollTo("Diferenciais")}>Diferenciais</span>
          <span onClick={() => scrollTo("Soluções")}>Soluções</span>
          <span onClick={() => scrollTo("Institucional")}>Institucional</span>
          <span onClick={() => scrollTo("Contato")}>Contato</span>
        </nav>
        <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
          Falar com especialista
        </a>
      </section>
    </header>
  );
}

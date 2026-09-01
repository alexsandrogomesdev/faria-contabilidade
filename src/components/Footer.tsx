import { Building2, Mail, MessageCircle } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.footer_section}>
        <div>
          <b>
            FARIA <span>gestão contábil e trubutária</span>
          </b>
          <p>
            Engenharia tributária, contabilidade consultiva e governança financeira para empresas de alta complexidade.
          </p>
        </div>
        <div>
          <span>Navegação</span>
          <nav>
            <span>Diferenciais</span>
            <span>Soluções</span>
            <span>Institucional</span>
            <span>Contato</span>
          </nav>
        </div>
        <div>
          <span>Canais diretos</span>
          <ul className={styles.ul_contact}>
            <li>
              <Mail />
              <span>contato@faria.contabilidade</span>
            </li>
            <li>
              <MessageCircle />
              <span>+55 (11) 99999-9999</span>
            </li>
            <li>
              <Building2 />
              <span>Atendimento executivo em todo o Brasil</span>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <span>© 2026 Faria Gestão Contábil e Tributária. CRC ativo.</span>
        <div>
          <span>Política de privacidade</span>
          <span>Termos de uso</span>
          <span>LGPD</span>
        </div>
      </section>
    </footer>
  );
}

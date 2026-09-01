import { Building2, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <section>
        <div>
          <span>
            FARIA <span>gestão contábil e trubutária</span>
          </span>
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
          <ul>
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

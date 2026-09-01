"use client";

import Image from "next/image";
import styles from "./page.module.css";
import {
  ArrowUpRight,
  Building2,
  ChartColumn,
  CircleCheck,
  Landmark,
  Mail,
  MessageCircle,
  ScrollText,
  ShieldCheck,
  Users,
  Wallet,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  return (
    <main className={styles.page}>
      <section className={styles.presentation}>
        <div>
          <div>
            <p>Consultoria tributária de alta performance</p>
            <h1>
              Gestão tributária de alta precisão para empresas que operam no <span>Lucro Real</span>.
            </h1>
            <span>
              Transformamos complexidade fiscal em segurança jurídica, eficiência operacional e inteligência financeira
              para o seu negócio.
            </span>
            <div>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                Falar com um especialista <ArrowUpRight width={16} height={16} />
              </a>
              <a href="#solution">Conhecer Nossas Soluções</a>
            </div>
          </div>
          <figure>
            <Image src="/image-1.jpg" alt="people" width={560} height={520} />
          </figure>
        </div>
        <ul className={styles.ul_presentation}>
          <li>
            <p>+15</p>
            <span>Anos de expertise em operações de alta complexidade</span>
          </li>
          <li>
            <p>100%</p>
            <span>Foco em conformidade, redução legal de riscos e governança</span>
          </li>
          <li>
            <p>Sênior</p>
            <span>Atendimento executivo direto com especialistas</span>
          </li>
          <li>
            <p>Sob medida</p>
            <span>Engenharia tributária em Lucro Real & Presumido</span>
          </li>
        </ul>
      </section>

      <section className={styles.differentials}>
        <div>
          <p>POR QUE A FARIA?</p>
          <h2>A contabilidade tradicional olha para o passado. Nós orientamos o futuro da sua empresa.</h2>
          <ul className={styles.ul_differentials}>
            <li>
              <Landmark />
              <h3>Especialização em Lucro Real</h3>
              <p>Domínio profundo das especificidades e oportunidades fiscais do regime mais complexo do país.</p>
            </li>

            <li>
              <ChartColumn />
              <h3>Visão Estratégica & Executiva</h3>
              <p>Relatórios claros, dados acionáveis e suporte direto à tomada de decisão da diretoria.</p>
            </li>
            <li>
              <ShieldCheck />
              <h3>Compliance & Proteção</h3>
              <p>Rigor técnico absoluto na adequação às exigências da Receita Federal e órgãos reguladores.</p>
            </li>
            <li>
              <Users />
              <h3>Atendimento Próximo e Exclusivo</h3>
              <p>Sem robôs ou respostas genéricas. Comunicação fluida e ágil com quem entende do seu negócio.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.solutions}>
        <div>
          <p>Ecossistema de soluções</p>
          <h2>Módulos estratégicos combináveis conforme a maturidade da sua operação.</h2>
          <ul className={styles.ul_solutions}>
            <li>
              <div>
                <Landmark />
                <span>01</span>
              </div>
              <h3>Gestão Tributária Avançada</h3>
              <p>Planejamento fiscal, apuração e recuperação de créditos no Lucro Real.</p>
            </li>

            <li>
              <div>
                <ScrollText />
                <span>02</span>
              </div>
              <h3>Contabilidade Consultiva</h3>
              <p>DREs estratégicos, balancetes comentados e inteligência patrimonial.</p>
            </li>
            <li>
              <div>
                <ShieldCheck />
                <span>03</span>
              </div>
              <h3>Gestão Fiscal & Governança</h3>
              <p>Blindagem operacional, obrigações acessórias e auditoria preventiva.</p>
            </li>
            <li>
              <div>
                <Wallet />
                <span>04</span>
              </div>
              <h3>BPO Financeiro & Estratégico</h3>
              <p>Controle de fluxo de caixa e relatórios financeiros de alto padrão.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.institutional}>
        <div>
          <figure>
            <Image src="image-2.jpg" alt="people 2" width={500} height={520} />
          </figure>
          <div>
            <p>LIDERANçA INSTITUCIONAL</p>
            <h2>Liderança técnica e compromisso com o crescimento do seu negócio.</h2>
            <p>
              Mais de uma década conduzindo operações fiscais de empresas em Lucro Real, com vivência prática em
              indústrias, serviços de alta complexidade e grupos econômicos. A filosofia é simples: profundidade técnica
              absoluta somada a uma relação próxima, humana e transparente com a diretoria.
            </p>
            <p>
              Cada cliente é conduzido por um especialista sênior, com leitura de mercado, disciplina de compliance e
              foco permanente em eficiência tributária dentro da lei.
            </p>
            <ul className={styles.ul_institutional}>
              <li>
                <CircleCheck />
                <span>Diagnóstico tributário antes de qualquer proposta</span>
              </li>
              <li>
                <CircleCheck />
                <span>Interlocução direta, sem intermediários</span>
              </li>
              <li>
                <CircleCheck />
                <span>Governança documental e auditoria preventiva contínua</span>
              </li>
            </ul>
            <div className={styles.div_founder}>
              <p>Rodrigo Faria</p>
              <span>Fundador & Contador Responsável</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contact}>
        <div>
          <div>
            <p>Diagnóstico estratégico</p>
            <h2>Sua empresa está pronta para um novo patamar de gestão tributária?</h2>
            <p>Agende uma reunião estratégica inicial sem compromisso e avalie a eficiência da sua operação atual.</p>
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
          <form className={styles.contact_form}>
            <div className={styles.div_input}>
              <label htmlFor="name">Nome Completo</label>
              <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <div className={styles.div_input}>
                <label htmlFor="email">E-mail corporativo</label>
                <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className={styles.div_input}>
                <label htmlFor="phone">Telefone / WhatsApp</label>
                <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
            </div>
            <div className={styles.div_input}>
              <label htmlFor="company">Empresa & regime tributário(opcional)</label>
              <input type="text" name="company" value={company} onChange={(e) => setCompany(e.target.value)} />
            </div>
            <div className={styles.div_input}>
              <label htmlFor="message">Mensagem rápida</label>
              <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>

            <button>Solicitar Diagnóstico Estratégico</button>

            <span>Seus dados são tratados conforme a LGPD e utilizados apenas para contato comercial.</span>
          </form>
        </div>
      </section>
    </main>
  );
}

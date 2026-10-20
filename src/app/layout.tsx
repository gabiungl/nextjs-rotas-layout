import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brasa & Grão | Hamburgueria e Cafeteria Artesanal",
  description: "Sabor defumado na brasa, crosta perfeita e cafés de torrefação própria.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="site-wrapper">
          {/* CABEÇALHO COMPARTILHADO */}
          <header className="site-header">
            <div className="container site-header-inner">
              <Link href="/" className="brand-logo">
                <span className="logo-flame">🔥</span>
                <span className="brand-text">
                  Brasa <span>&</span> Grão
                </span>
              </Link>

              <nav className="site-nav">
                <Link href="/" className="site-nav-link">
                  Início
                </Link>
                <Link href="/cardapio" className="site-nav-link">
                  Cardápio Completo
                </Link>
              </nav>

              <div className="header-actions">
                <span className="badge badge-success">
                  <span className="badge-dot"></span>
                  Aberto • 25-35 min
                </span>
                <button className="btn-header-admin" type="button">
                  Painel Gestor
                </button>
              </div>
            </div>
          </header>

          {/* CONTEÚDO DINÂMICO DE CADA PÁGINA (page.tsx) */}
          <main className="site-main">{children}</main>

          {/* RODAPÉ COMPARTILHADO */}
          <footer className="site-footer">
            <div className="container">
              <div className="footer-top">
                <div className="footer-brand">
                  <Link href="/" className="brand-logo">
                    <span className="logo-flame">🔥</span>
                    <span className="brand-text">
                      Brasa <span>&</span> Grão
                    </span>
                  </Link>
                  <p>
                    Hamburgueria e cafeteria artesanal. Carnes nobres na brasa de verdade e grãos selecionados com torra fresca.
                  </p>
                </div>

                <div>
                  <h4 className="footer-heading">Navegação</h4>
                  <ul className="footer-links">
                    <li>
                      <Link href="/">Início</Link>
                    </li>
                    <li>
                      <Link href="/cardapio">Cardápio Completo</Link>
                    </li>
                    <li>
                      <a href="#diferenciais">Nossos Diferenciais</a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="footer-heading">Atendimento & Endereço</h4>
                  <div className="footer-info-item">
                    <strong>Endereço:</strong>
                    <br />
                    Rua dos Pinheiros, 450 — Pinheiros, São Paulo - SP
                  </div>
                  <div className="footer-info-item">
                    <strong>Horário de Funcionamento:</strong>
                    <br />
                    Terça a Domingo • 18h às 23h30
                  </div>
                </div>
              </div>

              <div className="footer-bottom">
                <p>© 2026 Brasa & Grão Artesanal. Todos os direitos reservados.</p>
                <p>Feito com paixão pela brasa e pelo café.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Movies App Next",
  description: "Aplicación de películas con Next.js y SSR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <section className="app">
          <header className="navbar">
            <h1 className="logo">🎬 Movies App Next</h1>

            <nav className="navigation">
              <Link href="/" className="nav-link">
                Inicio
              </Link>

              <Link href="/search" className="nav-link">
                Buscar
              </Link>
            </nav>
          </header>

          <main className="main-content">{children}</main>

          <footer className="footer">
            <p>Proyecto Next.js App Router - Aplicación de películas</p>
          </footer>
        </section>
      </body>
    </html>
  );
}
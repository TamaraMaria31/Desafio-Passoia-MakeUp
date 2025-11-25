import { useState } from "react";
import "/src/Styles.CSS";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">

        {/* LOGO COMO IMAGEM */}
        <a href="#" className="logo">
          <img 
            src="/IMG/logo.png"  
            alt="Logo Passoia Make Up"
            className="logo-img"
          />
        </a>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <a href="#">Looks</a>
          <a href="#lancamentos">Lançamentos</a>
          <a href="#novidades">Novidades</a>
        </nav>

        <button
          className={`hamburger ${menuOpen ? "is-active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}


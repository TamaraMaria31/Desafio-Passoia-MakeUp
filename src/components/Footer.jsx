export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* COLUNA 1 – Atendimento */}

        <div className="footer-column">
          <h4>ATENDIMENTO</h4>
          <a href="#">Fale Conosco</a>
          <a href="#">Perguntas Frequentes</a>
          <a href="#">Meus Pedidos</a>
          <a href="#">Nossas Lojas</a>
        </div>

        {/* COLUNA 2 – Pagamento */}

       <div className="footer-column">
          <h4>FORMAS DE PAGAMENTO</h4>
          <div className="pay-methods">
            <img src="/IMG/mastercard.png" alt="Mastercard" />
            <img src="/IMG/visa.png" alt="Visa" />
            <img src="/IMG/pix.png" alt="Pix" />
            <img src="/IMG/boleto.png" alt="Boleto" />
          </div>
        </div>

        {/* COLUNA 3 – Redes sociais */}
        
        <div className="footer-column">
          <h4>SIGA-NOS NAS REDES SOCIAIS</h4>
          <div className="socials">
            <a href="#"><img src="/IMG/instagram.png" alt="Instagram" /></a>
            <a href="#"><img src="/IMG/facebook.png" alt="Facebook" /></a>
            <a href="#"><img src="/IMG/youtube.png" alt="youtube" /></a>
              <a href="#"><img src="/IMG/x.png" alt="x" /></a>
          </div>
        </div>

      </div>

      <p className="footer-copy">© 2025 Passoia Make Up — Todos os direitos reservados.</p>
    </footer>
  );
}

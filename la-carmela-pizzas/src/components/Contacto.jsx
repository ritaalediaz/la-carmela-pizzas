export default function Contacto() {
  return (
    <section id="contacto" className="contacto">
      <h2 className="contacto-title">Contacto</h2>
      <p className="contacto-text">
        Podés comunicarte con nosotros por WhatsApp o seguirnos en Instagram para ver todas nuestras novedades.
      </p>
      <div className="contacto-icons">
        <a
          href="https://wa.me/542284516131" // reemplazá con tu número real
          target="_blank"
          rel="noopener noreferrer"
          className="contacto-icon whatsapp"
        >
          <img src="/imagen/whatsapp.png" alt="WhatsApp" />
          <span>WhatsApp</span>
        </a>
        <a
          href="https://www.instagram.com/lacarmelapizzas/?hl=es-la"
          target="_blank"
          rel="noopener noreferrer"
          className="contacto-icon instagram"
        >
          <img src="/imagen/instagram.png" alt="Instagram" />
          <span>Instagram</span>
        </a>
      </div>
    </section>
  );
}

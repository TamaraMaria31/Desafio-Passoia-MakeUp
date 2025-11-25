import "../Styles.CSS";

export default function Gallery() {
  const imgs = [
    { src: "/IMG/Labios.png", label: "Lábios" },
    { src: "/IMG/Olhos.jpg", label: "Olhos" },
    { src: "/IMG/Rosto.png", label: "Rosto" },
    { src: "/IMG/Tendencia.png", label: "Tendência" },
  ];

  return (
    <div className="galeria-horizontal">
      {imgs.map((img, index) => (
        <div className="galeria-item" key={index}>
          <img src={img.src} alt={img.label} />
          <div className="galeria-label">{img.label}</div>
        </div>
      ))}
    </div>
  );
}

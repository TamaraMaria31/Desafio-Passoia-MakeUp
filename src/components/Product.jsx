import { useState } from "react";


export default function Product() {
  const fotos = {
    nude: "/IMG/Batom nude.png",
    vermelho: "/IMG/Batom vermelho.png",
    azul: "/IMG/Batom azul.png",
    marrom: "/IMG/Batom marrom.png",
  };

  const [foto, setFoto] = useState(fotos.nude);

  return (
    <div id="lancamentos" className="product-wrap">
      

      <div className="product-main">
        <img src={foto} alt="batom principal" className="product-img" />
      </div>

      <div className="product-info">
        <h3>Matte Premium</h3>
        <div className="cores">
          <button
            className="color-dot"
            style={{ background: "#ec719b" }}
            onClick={() => setFoto(fotos.nude)}
            aria-label="nude"
          />
          <button
            className="color-dot"
            style={{ background: "#b4141b" }}
            onClick={() => setFoto(fotos.vermelho)}
            aria-label="vermelho"
          />
          <button
            className="color-dot"
            style={{ background: "#5230cdff" }}
            onClick={() => setFoto(fotos.azul)}
            aria-label="nude"
          />
          <button
            className="color-dot"
            style={{ background: "#522f32" }}
            onClick={() => setFoto(fotos.marrom)}
            aria-label="marrom"
          />
        </div>

        <p className="desc">
          O Batom Matte possui fórmula inovadora, acabamento aveludado e longa
          duração. Clique nas cores para ver o batom na modelo.
        </p>
      </div>
    </div>
  );
}

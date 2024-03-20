export const Ticket = ({ send }) => {
  return (
    <article className="passengers">
      <h2 className="text-2xl font-bold text-left mb-3">Ticket</h2>
      <p className="text-left">
        Aquí esta su ticket de vuelo, acuda con las personas seleccionadas en el
        dia acordado
      </p>
      <button className="bg-white text-black ml-4">Finalizar</button>
    </article>
  );
};

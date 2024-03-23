export const Tickets = ({ state, send }) => {
  const passengers = state.context.passengers;

  const endProcess = () => {
    send({ type: "FINISH" });
  };

  return (
    <article className="passengers">
      <h2 className="text-2xl font-bold text-left mb-3">Ticket</h2>
      <p className="text-left">
        Aquí esta su ticket de vuelo, acuda con las personas seleccionadas en el
        dia acordado
      </p>
      <div className="flex items-stretch justify-center my-8">
        <span className="bg-white bg-opacity-80 text-black font-bold text-xl w-48 flex-shrink flex items-center justify-center">
          {state.context.selectedCountry}
        </span>
        <ul className="bg-white bg-opacity-40 text-black flex-1 text-left text-black px-8 py-3 list-decimal">
          {passengers.map((passenger, index) => (
            <li key={index}>{passenger}</li>
          ))}
        </ul>
      </div>

      <button className="bg-white text-black ml-4" onClick={endProcess}>
        Finalizar
      </button>
    </article>
  );
};

export const Search = ({ send }) => {
  const goToPassengers = () => {
    send({ type: "CONTINUE" });
  };

  return (
    <article className="container">
      <h2 className="text-2xl font-bold text-left mb-3">Buscar</h2>
      <p className="text-left">Selecciona un destino</p>
      <select
        name="destino"
        id="destino"
        className="block mt-2 py-1 px-2 w-[200px]"
      >
        <option value=""></option>
        <option value="Panama">Panama</option>
        <option value="Mexico">Mexico</option>
        <option value="Venezuela">Venezuela</option>
      </select>
      <button
        onClick={goToPassengers}
        className="Welcome-cancel button bg-white text-black mt-6"
      >
        Continuar
      </button>
    </article>
  );
};

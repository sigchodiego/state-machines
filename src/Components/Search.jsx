import { useState } from "react";

export const Search = ({ send }) => {
  const [selectedCountry, setSelectedCountry] = useState(""); // Estado local para almacenar el país seleccionado
  console.log(selectedCountry);
  const goToPassengers = () => {
    send({ type: "CONTINUE", selectedCountry }); // Pasar selectedCountry como parte del evento
  };

  const handleSelectedChange = (event) => {
    const country = event.target.value; // Obtener el país seleccionado del evento
    setSelectedCountry(country); // Actualizar el estado local con el país seleccionado
  };

  const options = ["Mexico", "Venezuela", "Colombia"];

  return (
    <article className="container">
      <h2 className="text-2xl font-bold text-left mb-3">Buscar</h2>
      <p className="text-left">Selecciona un destino</p>
      <select
        id="destino"
        className="block mt-2 py-1 px-2 w-[200px]"
        onChange={handleSelectedChange}
        value={selectedCountry} // Asignar el valor seleccionado al estado local del componente
      >
        <option value="" disabled>
          Escoge un país
        </option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
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

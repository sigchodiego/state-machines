import { useState } from "react";

export const Passengers = ({ state, send }) => {
  const [value, setValue] = useState("");
  const [user, setUser] = useState([]);
  const addUser = (e) => {
    e.preventDefault();
    setUser((prevUser) => [...prevUser, value]);
    send({ type: "ADD", value });
    setValue("");
  };

  const isDisabled = () => {
    if (state.context.passengers.length === 0) {
      return "pointer-events-none opacity-45";
    } else {
      return "";
    }
  };

  const goToTicker = () => {
    console.log("go to ticket");
    send({ type: "DONE" });
  };
  return (
    <article className="passengers">
      <h2 className="text-2xl font-bold text-left mb-3">
        Agrega los pasajeros
      </h2>
      <ol className="text-left list-decimal pl-8 mb-2">
        {user?.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ol>
      <p className="text-left">
        Ingresa los nombres de las personas que van a viajar contigo
      </p>
      <form onSubmit={(e) => addUser(e)}>
        <input
          type="text"
          name="pasajero"
          id="pasajero"
          value={value}
          className="block w-[250px] px-3 py-2 mt-2 mb-4"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Agregar pasajero</button>
        <button
          type="button"
          className={`bg-white text-black ml-4 ${isDisabled()}`}
          onClick={goToTicker}
          disabled={false}
        >
          Continuar
        </button>
      </form>
    </article>
  );
};

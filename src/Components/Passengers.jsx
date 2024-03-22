import { useState } from "react";

export const Passengers = ({ send }) => {
  const [value, setValue] = useState("");
  const [user, setUser] = useState([]);
  const addUser = (e) => {
    e.preventDefault();
    setUser((prevUser) => [...prevUser, value]);
    console.log(user);
  };

  const goToTicker = () => {
    send("DONE");
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
        <button className="bg-white text-black ml-4" onClick={goToTicker}>
          Continuar
        </button>
      </form>
    </article>
  );
};

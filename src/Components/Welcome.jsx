import React from "react";

export const Welcome = ({ send }) => {
  const startBooking = () => {
    send({ type: "START" });
  };

  return (
    <div className="Welcome">
      <h2 className="text-2xl font-bold text-left mb-3">¡Hoy es el día!</h2>
      <p className="Welcome-description description text-left">
        Compra tu vuelo y conoce un nuevo rincón del mundo, te va a sorprender
        las maravillas que hay para explorar
      </p>
      <button
        onClick={startBooking}
        className="Welcome-cancel button bg-white text-black mt-6"
      >
        Comenzar
      </button>
    </div>
  );
};

import React from "react";
import { Welcome } from "../Components/Welcome";
import { Search } from "../Components/Search";
import { Passengers } from "../Components/Passengers";
// import { Tickets } from "../Components/Tickets";

export const StepsLayout = ({ state, send }) => {
  const renderContent = () => {
    if (state.matches("inicial")) return <Welcome send={send} />;
    if (state.matches("search")) return <Search send={send} />;
    if (state.matches("passengers")) return <Passengers send={send} />;
    // if (state.matches("tickets")) return <Tickets send={send} />;
    return null;
  };

  return <div className="StepsLayout">{renderContent()}</div>;
};

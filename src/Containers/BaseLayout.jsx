import React from "react";
import { useMachine } from "@xstate/react";
import { StepsLayout } from "./StepsLayout";
import { bookingMachine } from "../Machines/bookingMachine";

export const BaseLayout = () => {
  const [state, send] = useMachine(bookingMachine);

  console.log("nuestra maquina", state.value, "contexto: ", state.context);

  return (
    <div className="BaseLayout p-6">
      <StepsLayout state={state} send={send} />
    </div>
  );
};

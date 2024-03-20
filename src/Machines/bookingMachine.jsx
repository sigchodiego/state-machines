import { createMachine, assign } from "xstate";

export const bookingMachine = createMachine({
  id: "buy plane tickets",
  initial: "inicial",
  states: {
    inicial: {
      on: {
        // Declara los eventos que van a generar una transicion
        START: "search",
      },
    },
    search: {
      on: {
        CONTINUE: "passengers",
        CANCEL: "inicial", // La cantidad de eventos pueden ser los que se necesiten
      },
    },
    passengers: {
      on: {
        DONE: "tickets",
        CANCEL: "inicial",
      },
    },
    tickets: {
      on: {
        FINISH: "inicial",
      },
    },
  },
});

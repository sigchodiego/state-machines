import { createMachine, assign } from "xstate";

export const bookingMachine = createMachine({
  id: "buy plane tickets",
  initial: "inicial",
  context: {
    passengers: [],
    selectedCountry: "a",
  },
  states: {
    inicial: {
      on: {
        START: "search",
      },
    },
    search: {
      on: {
        CONTINUE: {
          target: "passengers",
          actions: assign({
            selectedCountry: ({ event }) => event.selectedCountry,
            // Acceder a selectedCountry desde el evento o mantener el valor actual
          }),
        },
        CANCEL: "inicial",
      },
    },
    passengers: {
      on: {
        DONE: "tickets",
        CANCEL: "inicial",
        ADD: {
          target: "passengers",
          actions: assign(({ context, event }) =>
            context.passengers.push(event.value)
          ),
        },
      },
    },
    tickets: {
      on: {
        FINISH: "inicial",
      },
    },
  },
});

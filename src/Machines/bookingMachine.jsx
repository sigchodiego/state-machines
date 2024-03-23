import { createMachine, assign, fromPromise } from "xstate";

export const fetchCountries = async () => {
  const response = await fetch("https://restcountries.com/v3.1/region/ame");

  const data = await response.json();

  return data;
};

const fillCountries = {
  initial: "loading",
  states: {
    loading: {
      invoke: {
        id: "getCountries",
        src: fromPromise(() => fetchCountries()), // Pasar la función como referencia, no llamarla
        onDone: {
          target: "success",
          actions: assign({
            countries: ({ event }) => {
              // console.log(event);
              return event.output;
            },
            // Usar un guión bajo (_) para indicar que no se usa el contexto
          }),
        },
        onError: {
          target: "failure",
          actions: assign({
            error: ({ event }) => {
              // console.log(event);
              return event.data.message || "Fallo el request";
            },
          }),
        },
      },
    },
    success: {},
    failure: {
      on: {
        RETRY: { target: "loading" },
      },
    },
  },
};

const bookingMachine = createMachine(
  {
    id: "buy plane tickets",
    initial: "inicial",
    context: {
      passengers: [],
      selectedCountry: "",
      countries: [],
      error: "",
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
        ...fillCountries,
      },
      passengers: {
        on: {
          DONE: "tickets",
          CANCEL: {
            target: "inicial",
            actions: "cleanContext",
          },
          ADD: {
            target: "passengers",
            actions: assign(({ context, event }) =>
              context.passengers.push(event.value)
            ),
          },
        },
      },
      tickets: {
        after: {
          5000: {
            target: "inicial",
            actions: "cleanContext",
          },
        },
        on: {
          FINISH: "inicial",
        },
      },
    },
  },
  {
    actions: {
      cleanContext: assign({
        selectedCountry: "",
        passengers: [],
        countries: [],
        error: "",
      }),
    },
  }
);

export { bookingMachine };

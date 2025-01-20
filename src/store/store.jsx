import React, { createContext, useContext, useReducer } from "react";

// Estado inicial
const initialState = {
  data: null,
};

// Reducer para manejar las acciones
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      throw new Error(`Acción desconocida: ${action.type}`);
  }
};

// Crear el contexto
const StoreContext = createContext();

// Proveedor del contexto
export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
};

// Hook para usar el contexto en componentes
export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore debe usarse dentro de un StoreProvider");
  }
  return context;
};

import React, { createContext, useContext, useReducer } from 'react';

// Estado inicial
const initialState = {
  user: null, 
  isAuthenticated: false, 
};

// Reducer para manejar las acciones
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case 'LOGOUT':
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

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

// Hook para usar el contexto en componentes
export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore debe usarse dentro de un StoreProvider');
  }
  return context;
};

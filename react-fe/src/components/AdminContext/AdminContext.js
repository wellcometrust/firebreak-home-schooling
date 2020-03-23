import React, { createContext, useState } from 'react';

const defaultState = {
  isAdminActive: false,
  toggleAdmin: () => {}
};

export const AdminContext = createContext(defaultState);

export const AdminContextProvider = ({ children }) => {
  const [state, setState] = useState({
    isAdminActive: false,
    toggleAdmin: bool =>
      setState(prevState => ({ ...prevState, isAdminActive: bool }))
  });

  return <AdminContext.Provider value={state}>{children}</AdminContext.Provider>;
};

export default AdminContext;

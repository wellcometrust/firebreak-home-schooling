import React, { createContext, useState } from 'react';

const defaultState = {
  adminPIN: '',
  setAdminPIN: () => {},
  isAdminActive: false,
  setAdminActive: () => {}
};

export const AdminContext = createContext(defaultState);

export const AdminContextProvider = ({ children }) => {
  const [state, setState] = useState({
    adminPIN: '',
    isAdminActive: false,
    setAdminPIN: newPIN => 
      setState(prevState => ({ ...prevState, adminPIN: newPIN })),
    setAdminActive: bool =>
      setState(prevState => ({ ...prevState, isAdminActive: bool }))
  });

  return <AdminContext.Provider value={state}>{children}</AdminContext.Provider>;
};

export default AdminContext;

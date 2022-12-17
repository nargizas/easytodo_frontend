/* eslint-disable react/prop-types */
import { React, createContext, useState } from 'react';

const [sid, setSid] = useState('');

const LoginContext = createContext({ sid, setSid });

function LoginContextProvider({ children }) {
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <LoginContext.Provider value={{ sid, setSid }}>
      {children}
    </LoginContext.Provider>
  );
}

export { LoginContext, LoginContextProvider };

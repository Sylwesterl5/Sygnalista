import { createContext, useContext, useState } from "react";

const WiadomosciContext = createContext([]);
const CodeContext = createContext(null);

const WiadomosciProvider = ({ children }) => {
  const state = useState([]);
  const codeState = useState(null);

  return (
    <CodeContext.Provider value={codeState}>
      <WiadomosciContext.Provider value={state}>
        {children}
      </WiadomosciContext.Provider>
    </CodeContext.Provider>
  );
};

export const useWiadomosci = () => {
  return useContext(WiadomosciContext);
};

export const useCode = () => {
  return useContext(CodeContext);
};

export default WiadomosciProvider;

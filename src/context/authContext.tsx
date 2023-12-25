import { createContext, ReactNode } from "react";

interface AuthContextData{

};

export const AuthContext = createContext({} as AuthContextData);

export default function AuthProvider({ children }: { children: ReactNode }){
  return(
    <AuthContext.Provider value={{  }} >
      { children }
    </AuthContext.Provider>
  );
};
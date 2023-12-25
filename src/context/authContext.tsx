import { createContext, ReactNode, useState } from "react";

interface UserProps{
  uid: string | null,
  name: string | null,
  email: string | null,
  password: string | null,
};

interface AuthContextData{
  signed: boolean,
  user: UserProps | null,
};

interface SignInUserProps{
  email: string,
  password: string,
};

export const AuthContext = createContext({} as AuthContextData);

export default function AuthProvider({ children }: { children: ReactNode }){
  const [user, setUser] = useState<UserProps | null>(null);

  // function SignIn({ email, password }: SignInUserProps){

  // };

  return(
    <AuthContext.Provider value={{ signed: !!user, user }} >
      { children }
    </AuthContext.Provider>
  );
};
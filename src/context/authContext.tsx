import { createContext, ReactNode, useState } from "react";

import { auth, db } from "../service/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";

interface AuthContextData{
  signed: boolean,
  user: UserProps | null,
  signUp: ({name, email, password}: SignUpUserProps) => void,
  signIn: ({ email, password }: SignInUserProps) => void,
};

interface SignInUserProps{
  email: string,
  password: string,
};

interface SignUpUserProps{
  name: string,
  email: string,
  password: string,
};

interface UserProps{
  uid: string | null,
  name: string | null,
  email: string | null,
};

export const AuthContext = createContext({} as AuthContextData);

export default function AuthProvider({ children }: { children: ReactNode }){
  const navigate = useNavigate();

  const [user, setUser] = useState<UserProps | null>(null);

  async function signUp({name, email, password}: SignUpUserProps){
    await createUserWithEmailAndPassword(auth, email, password)
    .then(async (value) => {
      let uid = value.user.uid;
      const docRef = doc(db, "users", uid);

      await setDoc(docRef, {
        name,
        email,
      })
      .then(() => {
        let data = {
          uid,
          name,
          email: value.user.email,
        };

        setUser(data);
        navigate('/');
      });
    })
    .catch((error) => {
      console.log('Erro ao tentar criar cadastro', error);
    });
  };

  async function signIn({ email, password }: SignInUserProps){
    await signInWithEmailAndPassword(auth, email, password)
    .then(async (value) => {
      let uid = value.user.uid;

      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      let data = {
        uid,
        name: docSnap.data()?.name,
        email: value.user.email,
      };

      setUser(data);
      navigate('/start');
    })
    .catch((error) => {
      console.log('Erro ao tentar efetuar login', error);
    });
  };

  function setLocalStorage(data: UserProps){
    localStorage.setItem('@userData', JSON.stringify(data));
  };

  return(
    <AuthContext.Provider value={{ signed: !!user, user, signUp, signIn }} >
      { children }
    </AuthContext.Provider>
  );
};
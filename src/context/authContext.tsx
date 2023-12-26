import { createContext, ReactNode, useEffect, useState } from "react";

import { auth, db } from "../service/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface AuthContextData{
  signed: boolean,
  user: UserProps | null,
  signUp: ({ name, email, password }: SignUpUserProps) => void,
  signIn: ({ email, password }: SignInUserProps) => void,
  authLoading: boolean,
  screenSize: any,
  activePageIndicator: string,
  setActivePageIndicator: any,
  openCloseNav: boolean,
  setOpenCloseNav: any,
  logOut: () => void,
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
  const [authLoading, setAuthLoading] = useState(false);

  const [screenSize, setScreenSize] = useState<any>(null);
  const [activePageIndicator, setActivePageIndicator] = useState<string>('');
  const [openCloseNav, setOpenCloseNav] = useState(false);

  useEffect(() => {
    handleScreenSize();
    const hasUser = localStorage.getItem('@userData');

    if(hasUser){
      setUser(JSON.parse(hasUser));
    };
  }, []);

  window.addEventListener('resize', handleScreenSize);

  function handleScreenSize(){
    window.innerWidth >= 1024 ? setScreenSize(true) : setScreenSize(false);
  };

  async function signUp({ name, email, password }: SignUpUserProps){
    setAuthLoading(true);

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
        setLocalStorage(data);
        setAuthLoading(false);
        navigate('/');
        toast.success('Cadastrado com sucesso!');
      });
    })
    .catch((error) => {
      setAuthLoading(false);
      console.log('Erro ao tentar criar cadastro', error);
      toast.error('Ocorreu um erro inesperado!');
    });
  };

  async function signIn({ email, password }: SignInUserProps){
    setAuthLoading(true);

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
      setLocalStorage(data);
      setAuthLoading(false);
      navigate('/start');
      toast.success('Bem-vindo(a)');
    })
    .catch((error) => {
      setAuthLoading(false);
      console.log('Erro ao tentar efetuar login', error);
      toast.error('Ocorreu um erro inesperado!');
    });
  };

  function setLocalStorage(data: UserProps){
    localStorage.setItem('@userData', JSON.stringify(data));
  };

  async function logOut(){
    await signOut(auth)
    .then(() => {
      localStorage.removeItem('@userData');
      setUser(null);
      toast.success('Volte sempre!');
    })
    .catch((error) => {
      console.log('Erro ao tentar efetuar logOut.', error);
      toast.error('Ocorreu um erro inesperado.');
    });
  };

  return(
    <AuthContext.Provider 
    value={{ 
      signed: !!user, 
      user, 
      signUp, 
      signIn, 
      authLoading, 
      screenSize, 
      activePageIndicator, 
      setActivePageIndicator,
      openCloseNav,
      setOpenCloseNav,
      logOut, 
    }} 
    >
      { children }
    </AuthContext.Provider>
  );
};
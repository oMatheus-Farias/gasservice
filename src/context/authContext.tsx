import { createContext, ReactNode, useEffect, useState } from "react";

import { auth, db } from "../service/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import p13Image from '../assets/p13.png';
import p20Image from '../assets/p20.png';
import p45Image from '../assets/p45.png';

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
  loading: boolean,
  products: any,
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
  const [ loading, setLoading ] = useState(true);

  const products = [
    {
      image: p13Image,
      alternative: 'Imagem cilindro de gás p13',
      title: 'P13',
      description: 'O botijão de 13 quilos, popularmente conhecido como “gás de cozinha” ou “botijão doméstico”, é o formato mais conhecido de comercialização do GLP e destina-se basicamente aos lares para preparação de alimentos.',
    },
    {
      image: p20Image,
      alternative: 'Imagem cilindro de gás p20',
      title: 'P20',
      description: 'Utilizado em empilhadeiras da área industrial, o P20 (20 kg) serve como um combustível eficiente e se diferencia por ficar na posição horizontal, e não na vertical, como os demais modelos.',
    },
    {
      image: p45Image,
      alternative: 'Imagem cilindro de gás p45',
      title: 'P45',
      description: 'Com 3,5 vezes mais conteúdo que o P13, é o mais utilizado em estabelecimentos comerciais, principalmente restaurantes e cozinhas industriais, em que a utilização do gás é intensa.',
    },
  ];

  useEffect(() => {
    handleScreenSize();
    const hasUser = localStorage.getItem('@userData');

    if(hasUser){
      setUser(JSON.parse(hasUser));
      setLoading(false);
    };

    setLoading(false);
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
      loading,
      products, 
    }} 
    >
      { children }
    </AuthContext.Provider>
  );
};
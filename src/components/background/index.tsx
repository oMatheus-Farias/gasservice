import { ReactNode } from 'react';

export default function Background({ children }: { children: ReactNode }){
  return(
    <div className="bg-bgImage bg-cover bg-center w-full min-h-screen" >
      { children }
    </div>
  );
};
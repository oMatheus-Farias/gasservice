import { ReactNode } from 'react';

export default function Container({ children }: { children: ReactNode }){
  return(
    <div className='px-4' >
      { children }
    </div>
  );
};
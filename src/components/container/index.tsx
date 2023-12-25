import { ReactNode } from 'react';

export default function Container({ children }: { children: ReactNode }){
  <div className='px-4' >
    { children }
  </div>
};
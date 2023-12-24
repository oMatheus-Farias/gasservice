import { Link } from 'react-router-dom';
import logoImage01 from '../../assets/logo2.svg';

export default function Login(){
  return(
    <div className="w-full min-h-screen px-4 " >
      <section className='w-full min-h-screen flex flex-col justify-center items-center' >
        <div className="w-full bg-bgImage bg-cover bg-center flex flex-col items-center rounded-t" >
          <img
            src={ logoImage01 }
            alt='Logo Gas Service Company'
            className='mt-4 rounded-sm'
          />

          <h1 className='mt-8 text-whiteColor text-xl font-semibold' >Bem-vindo à Gás Service</h1>

          <div className='my-9 px-3 py-2 bg-redColor rounded-sm' >
            <p className='font-bold text-base text-whiteColor' >Venha conhecer!</p>
          </div>
        </div>

        <div className='px-4 py-6 bg-offWhite w-full rounded-b flex flex-col items-center' >
          <h2 className='text-2xl text-redColor font-bold' >Conecte-se</h2>

          <form className='w-full flex flex-col' >
            <div className='flex mt-8' >
              <div className='h-10 w-1 bg-redColor rounded-l-sm' ></div>
              <input 
                type='email'
                placeholder='seu melhor email...'
                className='h-10 w-full px-3 rounded-r-sm outline-none'
              />
            </div>

            <div className='flex mt-6' >
              <div className='h-10 w-1 bg-redColor rounded-l-sm' ></div>
              <input 
                type='password'
                placeholder='sua senha...'
                className='h-10 w-full px-3 rounded-r-sm outline-none'
              />
            </div>

            <button className='w-full bg-redColor mt-6 rounded-sm py-2 text-whiteColor font-bold text-lg' >Entrar</button>
          </form>

          <Link 
            to='/register'
            className='text-sm underline mt-6'
          >
            Ainda não possuí uma conta? Cadastre-se
          </Link>
        </div>
      </section>
    </div>
  );
};
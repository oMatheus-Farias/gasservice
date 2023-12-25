import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

import { Link } from 'react-router-dom';
import logoImage01 from '../../assets/logo2.svg';
import Input from '../../components/Input';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email('Digite um email válido'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres').nonempty('A senha é obrogatória'),
});

type FormData = z.infer<typeof schema>;

export default function Login(){
  const { signIn, authLoading, screenSize } = useContext(AuthContext);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  function onSubmit(data: FormData){
    signIn({
      email: data.email,
      password: data.password,
    });
  };

  return(
    <div className="w-full min-h-screen px-4 lg:px-12 lg:flex lg:justify-center" >
      <section className='w-full min-h-screen flex flex-col justify-center items-center lg:flex-row lg:max-w-[63.7em]' >
        <div className="w-full bg-bgImage bg-cover bg-center flex flex-col items-center rounded-t lg:px-5 lg:pb-[7.87em] lg:rounded-t-none lg:rounded-l" >
          <img
            src={ logoImage01 }
            alt='Logo Gas Service Company'
            className='mt-4 rounded-sm'
          />

          <section className='lg:flex lg:flex-col lg:items-start lg:w-full lg:mt-14' >
            <h1 className='mt-8 text-whiteColor text-xl font-semibold' >Bem-vindo à Gás Service</h1>

            { screenSize && (
              <p className='mt-4 text-whiteColor font-normal max-w-[19em] text-justify' >
                Ao acessar a plataforma Gás Service, você estará prestes a entrar em um universo de excelência no engarrafamento, distribuição e comercialização de Gás Liquefeito de Petróleo (GLP).<br/> 
                Somos mais que uma empresa,somos um padrão de qualidade.
              </p>
            ) }

            <div className='my-9 px-3 py-2 bg-redColor rounded-sm' >
              <p className='font-bold text-base text-whiteColor text-center' >Venha conhecer!</p>
            </div>
          </section>
        </div>

        <div className='px-4 py-6 bg-offWhite w-full rounded-b flex flex-col items-center lg:min-h-[39em] lg:rounded-b-none lg:justify-center lg:px-16 lg:rounded-r' >
          <h2 className='text-2xl text-redColor font-bold' >Conecte-se</h2>

          <form 
            className='w-full flex flex-col max-w-[37.5em]' 
            onSubmit={ handleSubmit(onSubmit) }
          >
            <Input
              type='email'
              name='email'
              placeholder='seu melhor email...'
              register={ register }
              error={ errors.email?.message }
            />

            <Input
              type='password'
              name='password'
              placeholder='sua senha...'
              register={ register }
              error={ errors.password?.message }
            />

            <button 
              className='w-full bg-redColor mt-6 rounded-sm py-2 text-whiteColor font-bold text-lg' 
              type='submit'
            > { authLoading ? 'Carregando...' : 'Entrar' }
            </button>
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
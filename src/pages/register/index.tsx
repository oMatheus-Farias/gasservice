import { Link } from 'react-router-dom';
import logoImage01 from '../../assets/logo2.svg';

import Input from '../../components/Input';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().nonempty('O nome é obrigatório'),
  email: z.string().email('Digite um email válido'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres').nonempty('A senha é obrogatória'),
});

type FormData = z.infer<typeof schema>;

export default function Register(){
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  function onSubmit(){
    alert('TESTE');
  };

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

        <div className='px-4 py-4 bg-offWhite w-full rounded-b flex flex-col items-center' >
          <h2 className='text-2xl text-redColor font-bold' >Cadastre-se</h2>

          <form 
            className='w-full flex flex-col' 
            onSubmit={ handleSubmit(onSubmit) }
          >
            <Input
              type='text'
              name='name'
              placeholder='qual o seu nome?...'
              register={ register }
              error={ errors.name?.message }
            />

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
            > Cadastrar
            </button>
          </form>

          <Link 
            to='/'
            className='text-sm underline mt-6'
          >
            Já possuí uma conta? Faça login!
          </Link>
        </div>
      </section>
    </div>
  );
};


{/* <div className='flex mt-8' >
  <div className='h-10 w-1 bg-redColor rounded-l-sm' ></div>
  <input 
    type='text'
    placeholder='qual o seu nome?...'
    className='h-10 w-full px-3 rounded-r-sm outline-none'
  />
</div>

<div className='flex mt-6' >
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
</div> */}
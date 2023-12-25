import { UseFormRegister, RegisterOptions } from "react-hook-form"

interface InputProps{
  type: string,
  name: string,
  placeholder: string,
  register: UseFormRegister<any>,
  error?: string,
  rules?: RegisterOptions, 
};

export default function Input({ type, name, placeholder, register, error, rules }: InputProps){
  <div>
    <div className='flex mt-8' >
      <div className='h-10 w-1 bg-redColor rounded-l-sm' ></div>
      <input 
        className='h-10 w-full px-3 rounded-r-sm outline-none'
        type={ type }
        placeholder={ placeholder }
        { ...register(name, rules) }
        id={ name }
      />
    </div>
    { error && <p className="p-0 text-redColor mr-auto" >{ error }</p> }
  </div>
};  
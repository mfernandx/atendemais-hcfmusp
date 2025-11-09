import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import personagemchatbot from '/personagemchatbot.png'



export default function Login(){

    const {login} = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [error, setError] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target
        if(name === 'email') setEmail(value)
        if(name === 'senha') setSenha(value)
    }

    const handleLogin = async (e: React.FormEvent)=>{
        e.preventDefault()
        if(!email || !senha){
            setError('Preencha todos os campos.')
            return
        }
        const res = await login(email, senha)
        if(res){
            setError(res)
            setEmail('')
            setSenha('')
            return
        }
        navigate('/home')
    }    


    return(
        <>
        <div className="min-h-screen flex">
            <div className="bg-[url('/hcfmusp-img.png')] bg-cover bg-center w-2/4 flex flex-col justify-center items-center">

                
            </div>
            <div className="w-2/4  mim-h-screen flex flex-col justify-center items-center">
                <form className="m-auto w-96 p-6 border-2 border-gray-400 rounded-md" onSubmit={handleLogin}>

                    <h1 className="text-5xl text-center text-[#0077C8] font-bold m-6">Conecte-se</h1>
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-md" type="email"
                    placeholder="Digite o seu e-mail:" name="email" value={email} onChange={handleChange} />
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-md" type="password" 
                    placeholder="Digite sua senha:" name="senha" value={senha} onChange={handleChange}/>
                    <span className="block m-3 text-red-500 text-center">{error}</span>
                    <button className="block m-auto bg-[#0077C8] hover:bg-indigo-600 py-2 px-14 rounded-md  text-white font-bold"
                    type="submit">Entrar</button>

                    <div>
                    <section className="justify-self-center">
                        <span className="inline-block mt-4 me-3 ">Não tem uma conta?</span>
                        <Link className="text-blue-600 " to={'/cadastro'}>Criar uma conta</Link>
                    </section>
                    </div>
                    <img className="w-50 justify-self-center" src={personagemchatbot} />
                </form>
            </div>
        </div>
        </>
    )

}
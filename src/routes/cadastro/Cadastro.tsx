import {useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function Cadastro(){
    const [nome, setNome] = useState ('')
    const [cpf, setCPF] = useState ('')
    const [dtNascimento, setDtNascimento] = useState ('')
    const [email, setEmail] = useState('')
    const [emailConfirm, setEmailConfirm] = useState('')
    const [senha, setSenha] = useState('')
    const [telefone, setTelefone] = useState ('')
    const [error, setError] = useState('')

    const {cadastro} = useAuth()
    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target
        if(name === 'nome') setNome (value)
        if(name === 'cpf') setCPF (value)
        if(name === 'dtNascimento') setDtNascimento (value)
        if(name === 'email') setEmail(value)
        if(name === 'emailConfirm') setEmailConfirm(value)
        if(name === 'senha') setSenha(value)
        if(name === 'telefone') setTelefone (value)
    }

    const handleCadastro = (e: React.FormEvent)=>{
        e.preventDefault()
        if(!nome || !cpf || !dtNascimento || !email || !emailConfirm || !senha || !telefone){
            setError('Todos os campos são obrigatórios.')
            return
        }else if(email !== emailConfirm){
            setError('Os e-mails não são iguais.')
            return
        }
        const res = cadastro(nome,cpf,new Date (dtNascimento),email, senha, Number (telefone))
        if(res){
            setError(res)
            return
        }
        alert('Conta criada com sucesso!')
        navigate('/login')

    }

    return(
        <>
        <div className="min-h-screen flex">
            <div className="bg-[url('/hcfmusp-img.png')] bg-cover bg-center w-2/4 flex flex-col justify-center items-center text-white">
                

            </div>
            <div className="w-2/4 min-h-screen flex flex-col justify-center items-center">
                <form className="m-auto w-96 p-6 border-2 border-gray-400 rounded-md" onSubmit={handleCadastro} >
                    <h1 className="text-5xl text-center text-[#0077C8] font-bold m-6">Criar conta</h1>
                    
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-md" type="text"
                    placeholder="Digite seu nome completo:" name="nome" value={nome} onChange={handleChange}/>
                    
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-md" type="number"
                    placeholder="Digite seu CPF:" name="cpf" value={cpf} onChange={handleChange}/>
                    
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-md" type="date"
                    placeholder="Digite sua data de nascimento:" name="dtNascimento" value={dtNascimento} onChange={handleChange}/>
                    
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-md" type="email"
                    placeholder="Digite seu e-mail:" name="email" value={email} onChange={handleChange}/>
                    
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-md" type="email"
                    placeholder="Confirme o seu e-mail:" name="emailConfirm" value={emailConfirm} onChange={handleChange}/>
                    
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-md" type="password"
                    placeholder="Digite sua senha:" name="senha" value={senha} onChange={handleChange}/>

                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-md" type="tel"
                    placeholder="Digite seu telefone:" name="telefone" value={telefone} onChange={handleChange}/>
                    
                    <span className="block m-3 text-red-500 text-center">{error}</span>
                    <button className="block m-auto bg-[#0077C8] hover:bg-indigo-600 py-2 px-14 rounded-md text-white font-bold"
                    type="submit">Cadastrar</button>
                    <div className="text-center">
                        <span className="inline-block mt-4 me-3">Já possui uma conta?</span>
                        <Link className="text-blue-600" to={'/login'}>Ir para o login</Link>
                    </div>
                    

                </form>

            </div>
        </div>
        </>
    )
}
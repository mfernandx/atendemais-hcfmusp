import { useState } from 'react';
import Navegador from '../../components/Navegador';
import Rodape from '../../components/Rodape';
import personagemchatbot from '/personagemchatbot.png'
import {useForm} from "react-hook-form";

type Formulario = {nomeAvaliador:string;emailAvaliador:string;observacao:string};

export default function Contato(){

    const {register,handleSubmit} = useForm <Formulario>();
    const [mensagem, setMensagem] = useState<string | null>(null);
    const [tipoMensagem, setTipoMensagem] = useState<"sucesso" | "erro" | null>(null);

    const onSubmit = async (dados:Formulario) => {
        console.log("Dados do form:",dados);

        try {
            const response = await fetch("http://localhost:8080/avaliacoes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    nomeUsuario: dados.nomeAvaliador,
                    emailUsuario: dados.emailAvaliador,
                    mensagem: dados.observacao
                 }),
            });

            const data = await response.json();

            if (response.ok) {
                setMensagem(data.mensagem || "Mensagem registrada com sucesso!");
                setTipoMensagem("sucesso");
                
            } else {
                setMensagem(data.erro || "Erro ao enviar avaliação.");
                setTipoMensagem("erro");
            }

        } catch (error) {
            console.error(error);
            setMensagem("Erro ao comunicar com o servidor.");
            setTipoMensagem("erro");
        }
    };
    
    return(
        <>
        <Navegador/>

        <header className="h-35 bg-[url('/hcfmusp-aerea.jpg')] bg-cover bg-center flex justify-center text-7xl text-white p-6">
            <h1 className="font-bold"> CONTATO </h1>
        </header>

        <section className='flex'>

            <section className='block p-15'>

                <section className=" items-center w-[800] flex justify-center">
                    <h2 className="text-6xl font-semibold w-[800] text-justify"> Nossa equipe valoriza sua<br></br> opinião. Aguardamos seu Feedback.</h2>
                </section>

                <section className=" w-[700] flex justify-center mt-[25px] ml-[5px]">
                    <h4 className="text-2xl w-[700px] text-justify font-light"> Nossa equipe responsável pela <span className='font-bold text-[#54b3b4]'>ATENDE+HC</span> está comprometida em fornecer suporte e assistência para garantir
            que você obtenha o máximo de benefícios na nossa plataforma. Caso tenha alguma pergunta,
            comentário ou sugestão, por favor, não hesite em entrar em contato conosco através do formulário abaixo:</h4>
                </section>

            </section> 

                <section className='block'>
                    <img className="w-200"src={personagemchatbot} />
                </section>  

        </section>

        <section className='h-5 bg-[#0077C8] '></section>

        <section className='bg-[#e9eded] w-[700px] mt-[50px] justify-self-center p-10 rounded-3xl mb-[50px] '>

            <h2 className='text-4xl font-bold justify-self-center'> FORMULÁRIO DE CONTATO </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 justify-self-center ">
            
                <section className=''>
                <input className="mt-5 w-[600px] px-4 py-2 border rounded-3xl focus:ring-2 focus:ring-indigo-500 outline-none border-gray-300 bg-white " id="nome" type="text"{...register("nomeAvaliador", { required: true })}placeholder="Informe seu nome completo:"/>
                </section>

            
                <section className=''>
                <input className="w-[600px] px-4 py-2 border rounded-3xl focus:ring-2 focus:ring-indigo-500 outline-none border-gray-300 bg-white" id="email"type="email"{...register("emailAvaliador", { required: true })}placeholder="Informe seu e-mail:" />
                </section>

                <section className=''>
                    <input className="w-[600px] h-[100px] px-4 py-2 border rounded-3xl focus:ring-2 focus:ring-indigo-500 outline-none border-gray-300 bg-white" id="obs"type="text"{...register("observacao", { required: true })}placeholder="Digite sua observação:" />
                </section>

            
                <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-3xl hover:bg-indigo-700 transition font-bold">ENVIAR</button>

            </form>

            <p className={`mt-4 text-center font-medium ${tipoMensagem === "sucesso" ? "text-green-600" : "text-red-500"}`}>{mensagem}</p>
    
        </section>

        
           
        <Rodape/>
        </>
    )
}
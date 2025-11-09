import Navegador from "../../components/Navegador";
import Rodape from "../../components/Rodape";
import personagemchatbot from '/personagemchatbot.png'
import { useContext } from "react";
import { AuthContext } from "../../context/auth.tsx";

export default function Usuario(){

    const { user } = useContext(AuthContext);

    if (!user) {
        return <p>Você precisa estar logado para ver suas informações.</p>;
    }

    return(
        <>
        <Navegador/>

        <header className="h-35 bg-[url('/hcfmusp-aerea.jpg')] bg-cover bg-center flex justify-center text-7xl text-white p-6">
            <h1 className="font-bold "> MEU PERFIL</h1>
        </header>

        <section className='flex'>

            <section className='block p-15'>
                <section className=" items-center w-[800] flex justify-center mr-15 ">
                    <h2 className="text-6xl font-semibold w-[800] text-justify"> Todas as suas informa-<br/>ções pessoais de saúde <br/>em um lugar só.</h2>
                </section>

                <section className=" w-[700] flex justify-center mt-[25px] ml-5">
                    <h4 className="text-2xl w-[700px] text-justify font-light"> Bem-vindo à sua área de informações pessoais! Aqui, você pode acessar, gerenciar e atualizar suas informações de saúde de forma segura e confidencial. Se tiver alguma dúvida, entre em contato conosco.</h4>
                </section>

            </section>   

                <section className='block'>
                    <img className="w-200"src={personagemchatbot} />
                </section>

        </section>

        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Minhas Informações</h1>
            <p><strong>Nome:</strong> {user.nomePaciente}</p>
            <p><strong>CPF:</strong> {user.cpf}</p>
            <p><strong>Data de Nascimento:</strong> {new Date(user.dtNascimento).toLocaleDateString()}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Telefone:</strong> {user.telefone}</p>
        </div>

        <Rodape/>
        </>
    )
}
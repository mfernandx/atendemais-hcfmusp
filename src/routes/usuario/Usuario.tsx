import Navegador from "../../components/Navegador";
import Rodape from "../../components/Rodape";
import personagemchatbot from '/personagemchatbot.png'
import { useContext, useState } from "react";
import { AuthContext } from "../../context/auth.tsx";
import { useNavigate } from "react-router-dom";

export default function Usuario(){

    const { user,logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [mensagem, setMensagem] = useState<string | null>(null);

    if (!user) {
        return <p>Você precisa estar logado para ver suas informações.</p>;
    }

    const handleExcluir = async () => {
        
        const senha = prompt("Digite sua senha para confirmar a exclusão da conta:");

        if (!senha) {
        setMensagem("Operação cancelada. Nenhuma senha informada.");
        return;
        }

        const resposta = await logout(user.email, senha);

        if (resposta === "Conta excluída com sucesso.") {
        alert(resposta);
        setTimeout(() => {navigate("/login");}, 100);
    
    

        } else {
        setMensagem(resposta || "Erro ao excluir conta.");
      
    }
  };

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

        <section className="p-6 bg-[#e9eded]">
            <h1 className="text-5xl font-bold mb-4 ml-10">Minhas Informações</h1>
            <p className="ml-10 mt-2 text-2xl font-light"><strong>Nome:</strong> {user.nomePaciente}</p>
            <p className="ml-10 mt-2 text-2xl font-light"><strong>CPF:</strong> {user.cpf}</p>
            <p className="ml-10 mt-2 text-2xl font-light"><strong>Data de Nascimento:</strong> {new Date(user.dtNascimento).toLocaleDateString()}</p>
            <p className="ml-10 mt-2 text-2xl font-light"><strong>Email:</strong> {user.email}</p>
            <p className="ml-10 mt-2 text-2xl font-light"><strong>Telefone:</strong> {user.telefone}</p>

            <section className="flex mt-6">
                <a href="/teste"className="block m-auto bg-[#0077C8] hover:bg-indigo-600 py-2 px-14 rounded-full text-white font-bold"
                        type="submit">ALTERAR DADOS</a>
                
                <button onClick={handleExcluir} className="block m-auto bg-red-400 hover:bg-red-500 py-2 px-14 rounded-full text-white font-bold"
                        type="submit">EXCLUIR CONTA</button>
            </section>

            <p className="block m-3  text-center">{mensagem}</p>
        </section>



        <Rodape/>
        </>
    )
}
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";


export default function Alteracao() {
  const { user } = useAuth();

  const [emailAtual, setEmailAtual] = useState("");
  const [senhaAtual, setSenhaAtual] = useState("");
  const [emailNovo, setEmailNovo] = useState("");
  const [senhaNova, setSenhaNova] = useState("");
  const [telefoneNovo, setTelefoneNovo] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [tipoMensagem, setTipoMensagem] = useState<"erro" | "sucesso" | "">("");


  useEffect(() => {
  if (user) {
    setEmailAtual(user.email);
    setEmailNovo(user.email);
    setTelefoneNovo(user.telefone?.toString() || "");
  }
}, [user]);

  const handleSalvar = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!emailAtual || !senhaAtual) {
      setMensagem("Por favor, informe seu e-mail e senha atuais para confirmar a alteração.");
      setTipoMensagem("erro");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8080/pacientes/atualizar/${encodeURIComponent(emailAtual)}/${encodeURIComponent(senhaAtual)}/${encodeURIComponent(emailNovo)}/${encodeURIComponent(senhaNova)}/${encodeURIComponent(telefoneNovo)}`,
        {
          method: "PUT",
        }
      );

      if (response.ok) {

        const msg = await response.text();
        setMensagem(msg || "Dados atualizados com sucesso!");
        setTipoMensagem("sucesso");

      } else {
        const err = await response.json().catch(() => null);
        setMensagem(err?.erro || "Paciente não encontrado ou erro ao atualizar.");
        setTipoMensagem("erro");

      } 

    } catch (error) {
      console.error(error);
      setMensagem("Erro ao tentar salvar alterações.");
      setTipoMensagem("erro");
    }
  };

  return (
    <>

    <div className="min-h-screen flex">
            <div className="bg-[url('/hcfmusp-img.png')] bg-cover bg-center w-2/4 flex flex-col justify-center items-center text-white">
                

            </div>
            <div className="w-2/4 min-h-screen flex flex-col justify-center items-center">
                <form className="m-auto w-96 p-6 border-2 border-gray-400 rounded-md" onSubmit={handleSalvar} >
                    <h1 className="text-5xl text-center text-[#0077C8] font-bold m-6">Atualizar</h1>
                    
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-md" type="text"
                    placeholder="Digite seu e-mail atual:" name="email" value={emailAtual} onChange={(e) => setEmailAtual(e.target.value)}/>
                    
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-md" type="password"
                    placeholder="Digite sua senha atual:" name="senha" value={senhaAtual} onChange={(e) => setSenhaAtual(e.target.value)}/>
                    
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-md" type="text"
                    placeholder="Digite seu novo e-mail:" name="novoEmail" value={emailNovo} onChange={(e) => setEmailNovo(e.target.value)}/>
                    
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-md" type="password"
                    placeholder="Digite sua nova senha:" name="novaSenha" value={senhaNova} onChange={(e) => setSenhaNova(e.target.value)}/>
                    
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-md" type="tel"
                    placeholder="Digite seu novo telefone:" name="novoTelefone" value={telefoneNovo} onChange={(e) => setTelefoneNovo(e.target.value)}/>
                    
                    
            
                    <button className="block m-auto bg-[#0077C8] hover:bg-indigo-600 mt-10 py-2 px-14 rounded-md text-white font-bold"
                    type="submit">Salvar Alterações</button>

                    
                    <p className={`block m-3 text-center font-medium ${tipoMensagem === "erro" ? "text-red-500" : "text-green-600"}`}>{mensagem}</p>
                    <div className="text-center">
                        <span className="inline-block mt-4 me-3">Ir para a página de informações?</span>
                        <Link className="text-blue-600" to={'/usuario'}>Voltar</Link>
                    </div>
                    

                </form>

            </div>
        </div>

    </>
  );
}

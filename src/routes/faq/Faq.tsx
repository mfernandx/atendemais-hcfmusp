import { useState } from "react"
import personagemchatbot from '/personagemchatbot.png'
import Rodape from "../../components/Rodape";
import Navegador from "../../components/Navegador";


type ExibePerguntas = {
    id: string;
    pergunta: string,
    vermais?: boolean,
    children: React.ReactNode;
    estado? : (id:string) => void,

};

function ExibePerguntas({id, pergunta,children, vermais = false, estado}: ExibePerguntas){
    return(
        
    <section className="w-full">
      <button
        type="button"
        aria-expanded={vermais}
        aria-controls={`panel-${id}`}
        onClick={() => estado && estado(id)}
        className={`w-full flex items-center justify-between px-8 py-6 md:px-12 md:py-8 text-left rounded-lg transition-shadow
          ${vermais ? "bg-gray-200 shadow-sm" : "bg-[#e9eded] hover:bg-gray-200" }`}>

        <section className="text-3xl font-medium text-gray-800">{pergunta}</section>

        <img src={vermais ? "iconmenos.png" : "iconmais.png"} />

      </button>

      <section
        id={`panel-${id}`}
        className={`transition-all duration-300 ease-in-out overflow-hidden bg-white px-8 md:px-12 rounded-b-lg border-t border-gray-100 
          ${vermais ? "max-h-65 py-4" : "max-h-0 py-0 "}`}>

        <section className=" font-extralight text-2xl text-gray-700 text-justify">{children}</section>
      </section>

    </section>
  );
}
    
export default function Faq(){

    const perguntas = [
        {id: "pergunta1", pergunta: "Qual o nosso diferencial? ", resposta: "Consideramos que nosso diferencial seja o foco em uma solução pensada a partir da empatia com os pacientes, pensamos em funcionalidades que solucionem verdadeiramente os inconvenientes sofridos pelos usuários. A partir dessa análise, criamos um projeto com uma interface prática e intuitiva, um funcionamento inclusivo para atender pacientes com diferentes níveis de letramento digital ou limitações de acessibilidade, multicanais acessíveis (utiliza plataformas amplamente conhecidas pela população, evitando que o usuário tenha de se familiarizar com uma nova plataforma), uma identidade humanizada para acolher as dificuldades do usuário e notificações automáticas para evitar eventuais esquecimentos."},
        {id: "pergunta2", pergunta: "Qual a eficiência real do projeto? ", resposta: "A partir de testes simulados com pessoas reais pertecentes aos grupos que constituem o público-alvo, observamos quais eram suas maiores dificuldades e desenhamos soluções para contorná-las. A partir disso, estimamos que 80% dos erros mais comuns causadores do absenteísmo (como esquecimento, dificuldades técnicas, comunicação falha) foram eliminados."},
        {id: "pergunta3", pergunta: "Qual o público-alvo do projeto?", resposta: "A plataforma ATENDE+HC tem como público-alvo pessoas idosas, pessoas com baixa alfabetização e/ou com dificuldades na escrita, pessoas com deficiências cognitivas, visuais e/ou motoras, pessoas com pouca familiaridade digital, e quaisquer outros indivíduos com limitações no que tange ao pleno acesso tecnológico."},
        {id: "pergunta4" , pergunta: "Como os pacientes poderão acessar o ChatBot e quais os requisitos técnicos necessários?", resposta: "O ChatBot estará disponível em canais de comunicação conhecidos, que são o Whatsapp e o Telegram, o acesso para ambos estará disponível por meio de um ícone na plataforma digital atual, mas também pode ser acessados por QR Code, link de acesso, pelo número oficial (no caso do Whatsapp) e busca pelo nome do Bot (no caso do Telegram). Os requisitos técnicos incluem uma conexão estável com a internet, instalação da plataforma de interesse caso ainda não seja instalada e ativação do microfone em caso de teleatendimento por mensagem de voz."},
        {id: "pergunta5" , pergunta: "Quais serão os benefícios esperados do uso do ChatBot em termos de eficiência e custo?", resposta: "Os benefícios esperados são a diminuição significativa das taxas de absenteísmo, maior escalabilidade (atendimento simultâneo de um grande volume de pacientes, sem que haja aumento proporcional de custo), diminuição de custos operacionais (menos ligações telefônicas e redução de retrabalho com reagendamentos), automatização de tarefas repetitivas (como esclarecimento de dúvidas, necessidade de instruções, entre outros) permitindo que atendentes humanos executem outras tarefas mais complexas."},
        {id: "pergunta6" , pergunta: "Quais são as limitações do ChatBot?", resposta: "O ChatBot possui algumas limitações em sua usabilidade, como por exemplo a necessidade de uma conexão estável com a internet para funcionar corrretamente, o que pode ser um problema em áreas com pouco acesso à internet. O requisito ambiental também pode afetar sua precisão, já que o comando por voz do ChatBot pode não funcionar bem em ambientes ruidosos ou quando o usuário não se comunica com clareza. "},
        {id: "pergunta7", pergunta: "Como o ChatBot será integrado à plataforma digital de saúde já existente do hospital?", resposta: "A plataforma atual contará com um ícone que levará o usuário diretamente para a plataforma de comunicação de sua escolha (Whatsapp ou Telegram), onde ocorrerá o teleatendimento, e além disso, também contará com um site de apoio que fornecerá explicações e demonstrações claras e intuitivas dessa nova funcionalidade."}
    ];

    const [pegaId, setPegaId] = useState<string | null>(null);

    function alterna(id: string) {
    setPegaId((prev) => (prev === id ? null : id));
  }

    return(
        <>

        <Navegador/>
  
        <header className="h-35 bg-linear-to-r from-[#049fce] via-[#39b7dd] to-[#95e4f8] flex justify-center text-7xl p-6">
            <h1 className="font-bold"> PERGUNTAS FREQUENTES </h1>
        </header>

        <section className='flex'>

            <section className='block p-15'>

                <section className=" items-center w-[800] flex justify-center">
                    <h2 className="text-6xl font-semibold w-[800] text-justify"> Tire suas dúvidas sobre a<br></br> plataforma ATENDE+HC<br></br> na saúde digital. </h2>
                </section>

                <section className=" w-[700] flex justify-center mt-[25px] ml-5">
                    <h4 className="text-2xl w-[700px] text-justify font-light"> Bem-vindo à nossa central de ajuda! Aqui você encontra respostas para as dúvidas
            mais comuns sobre nosso projeto e suas funcionalidades.
            Caso não encontre o que está procurando, entre em contato com a nossa equipe.</h4>
                </section>

            </section>   

                <section className='block'>
                    <img className="w-200"src={personagemchatbot} />
                </section>

        </section>

        <section className='h-5 bg-[#0077C8]'></section>

        <section className="min-h-screen flex items-start justify-center py-10 ">
            
            <section className="w-full max-w-6xl">

                <section className="space-y-3">
                {perguntas.map((pergunta) => (
                    <ExibePerguntas
                    key={pergunta.id}
                    id={pergunta.id}
                    pergunta={pergunta.pergunta}
                    vermais={pegaId === pergunta.id}
                    estado={alterna}
                    >
                    {pergunta.resposta}
                    </ExibePerguntas>
                ))}
                </section>
            </section>
        </section>
        <section className='h-5 bg-[#0077C8]'></section>
    
    <Rodape/>
    
    </>
)
}
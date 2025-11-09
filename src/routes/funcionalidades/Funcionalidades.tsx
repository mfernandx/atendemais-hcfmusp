import personagemchatbot from '/personagemchatbot.png'
import interfaceicon  from '/interfaceicon.png'
import comandovoz from '/comandovozicon.png'
import personalizacaoicon from '/personalizacaoicon.png'
import familiaridadeicon from '/familiaridadeicon.png'
import lembreteicon from '/lembreteicon.png'
import orientacaoicon from '/orientacaoicon.png'
import temporealicon from '/temporealicon.png'
import avaliacaoicon from '/avaliacaoicon.png'
import autenticacaoicon from '/autenticacaoicon.png'
import Navegador from '../../components/Navegador'
import Rodape from '../../components/Rodape'


export default function Funcionalidades(){
    return(
        <>
        <Navegador/>

        <header className="h-35 bg-[url('/hcfmusp-aerea.jpg')] bg-cover bg-center flex justify-center text-7xl text-white p-6">
            <h1 className="font-bold"> FUNCIONALIDADES </h1>
        </header>

        <section className='flex'>

            <section className='block p-15'>

                <section className=" items-center w-[800] flex justify-center ml-[15px]">
                    <h2 className="text-6xl font-semibold w-[800]  "> Funcionalidades focadas em melhorar sua relação <br></br>com a tecnologia.</h2>
                </section>

                <section className=" w-[700] flex justify-center mt-[25px] ml-5">
                    <h4 className="text-2xl w-[700px] text-justify font-light"> A plataforma <span className='font-bold text-[#54b3b4]'>ATENDE+HC</span> possui diversas funcionalidades projetadas para 
            fornecer uma melhoria significativa na acessibilidade do usuário, transformando sua experiência em um processo leve e prático. </h4>
                </section>

            </section>   

                <section className='block '>
                    <img className="w-250"src={personagemchatbot} />
                </section>

        </section>

        <section className='block  '>
            <section className='flex justify-between bg-[#e9eded] p-8'> 

                <section className='block p-5 w-[400px]'>
                    <img className = 'justify-self-center' src={interfaceicon} />
                    <h3 className='text-2xl p-5 justify-self-center font-semibold'>INTERFACE AMIGÁVEL</h3>
                    <p className='text-justify w-[300px] justify-self-center font-extralight text-[20px]'> A interface foi projetada para ser simples,
                         acessível e intuitiva.<br></br> Garantindo que qualquer usuário consiga utilizá-la sem enfrentar dificuldades técnicas.</p>
                </section>

                <section className='block p-5 w-[400px]'>
                    <img className='justify-self-center' src={comandovoz}/>
                    <h3 className='text-2xl p-5 justify-self-center font-semibold'>COMANDO POR VOZ</h3>
                    <p className='text-justify w-[300px] justify-self-center font-extralight text-[20px]'> O usuário pode escolher entre um teleatendimento por voz ou texto, o que torna o atendimento mais inclusivo principalmente para pessoas com limitações visuais, motoras ou com dificuldades na escrita.</p>
                </section>

                <section className='block p-5 w-[400px]'>
                    <img className='justify-self-center' src={personalizacaoicon} />
                    <h3 className='text-2xl p-5 justify-self-center font-semibold'>PERSONALIZAÇÃO </h3>
                    <p className='text-justify w-[300px] justify-self-center font-extralight text-[20px] '> O ChatBot possui uma identidade própria, chamada Helena das Clínicas, a fim de promover uma linguagem mais humanizada e empática, diminuindo a sensação do usuário de estar conversando com uma máquina. </p>
                </section>

            </section>


            <section className='flex justify-between p-8'>


                <section className='block p-5 w-[400px]'>
                    <img className = 'justify-self-center' src={familiaridadeicon} />
                    <h3 className='text-2xl p-5 justify-self-center font-semibold'>FAMILIARIDADE</h3>
                    <p className='text-justify w-[300px] justify-self-center font-extralight text-[20px]'> Integração na plataforma de comunicação Whatsapp, que é a mais amplamente reconhecida pelo público, aumentando o sentimento de familiaridade e confiança</p>
                </section>

                <section className='block p-5 w-[400px]'>
                    <img className='justify-self-center' src={orientacaoicon}/>
                    <h3 className='text-2xl p-5 justify-self-center font-semibold'>ORIENTAÇÃO</h3>
                    <p className='text-justify w-[300px] justify-self-center font-extralight text-[20px]'> Auxilia o usuário com suas dúvidas, a partir de uma orientação clara e objetiva sobre como utilizar a plataforma <span className='font-bold text-[#54b3b4]'>ATENDE+HC</span>.</p>
                </section>

                <section className='block p-5 w-[400px]'>
                    <img className='justify-self-center' src={lembreteicon} />
                    <h3 className='text-2xl p-5 justify-self-center font-semibold'>LEMBRETES</h3>
                    <p className='text-justify w-[300px] justify-self-center font-extralight text-[20px]'> Envia notificações automáticas com lembretes antes do início da teleconsulta, orientando o paciente sobre como prosseguir, e também garantindo suporte à ele em caso de imprevistos. </p>
                </section>


            </section>


            <section className='flex justify-between bg-[#e9eded] p-8 mb-10'>

                <section className='block p-5 w-[400px]'>
                    <img className = 'justify-self-center' src={temporealicon} />
                    <h3 className='text-2xl p-5 justify-self-center font-semibold'>CHAT EM TEMPO REAL</h3>
                    <p className='text-justify w-[300px] justify-self-center font-extralight text-[20px]'> Permite que em situações mais complexas, o paciente seja transferido para um atendente humano em tempo-real.</p>
                </section>

                <section className='block p-5 w-[400px]'>
                    <img className='justify-self-center' src={avaliacaoicon}/>
                    <h3 className='text-2xl p-5 justify-self-center font-semibold'>AVALIAÇÃO DE SATISFAÇÃO</h3>
                    <p className='text-justify w-[300px] justify-self-center font-extralight text-[20px]'> Após cada sessão de interação com o ChatBot, o paciente pode avaliar seu desempenho, contribuindo com seu feedback para melhoria gradual da experiência.</p>
                </section>

                <section className='block p-5 w-[400px]'>
                    <img className='justify-self-center' src={autenticacaoicon} />
                    <h3 className='text-2xl p-5 justify-self-center font-semibold'>AUTENTICAÇÃO</h3>
                    <p className='text-justify w-[300px] justify-self-center font-extralight text-[20px]'> Inclui mecanismos de verificação de identidade e proteção de dados. Para garantir a segurança da informação, promovendo um serviço de confiança.</p>
                </section>


            </section>

        </section>

        

        <Rodape/>
        </>
    )
}